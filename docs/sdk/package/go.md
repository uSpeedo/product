---
sidebar_label: 'Golang'
sidebar_position: 2
---
# GO SDK

## I. Preparation

### 1) Obtain API key information

Before calling the API, you need to obtain the key information to generate the `X-Signature` signature. You need to provide `AccessKeyId` and `AccessKeySecret`, which can be obtained from the console account. For detailed steps on how to obtain them, please refer to: [How to obtain AccessKeyId and AccessKeySecret](../signature.md).

### 2) Apply for SMS template

[How to apply for an SMS template](https://console.uspeedo.com/sms/template)

## 二、配置SDK

### 1) 使用 go get 安装

```go
go get github.com/uSpeedo/usms-sdk-go
```
Note: If you encounter unstable network, you can use a proxy server to speed up the download, such as using GOPROXY acceleration

```go
export GOPROXY=https://goproxy.io
```

### 2) 使用 go mod 安装

在任意代码中添加

```go
import _ "github.com/uSpeedo/usms-sdk-go"

```
之后在项目根目录执行：

```go
go mod init
go mod tidy
```

### 3) Parameter description
-  Phone number list (PhoneNumbers): supports international and domestic SMS, international SMS uses the format (86)13812345678, and the international telephone area code needs to be added in front of the phone number.
- SMS template ID (TemplateId): For first-time use, you need to apply for a template in the UCloud console. After the template is approved, pass the template ID to this location. 
- SMS template parameter list (TemplateParams): The variables that can be passed in the SMS template. If there are several variables in the template when applying, you need to pass in several. 
- SMS signature (SigContent): For first-time use, you need to apply for a signature in the UCloud console. After the signature is approved, pass the signature to this location. When there is a default signature, this parameter can be left blank.

### 4) Construct API signature

> The signature generator first puts all parameters and values into a map and sorts them in ascending order by key value. Then concatenate all parameters to form the signature text. Finally, sign the signature text using SHA1. If the interface requires uploading requests such as pictures/videos, the file stream does not participate in the signature. Please convert the file to a file stream format and request it in file stream format.

1) Obtain AccessKeySecret from console account

```json
MjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1
```

2) Get the request body of the request and sort it in ascending order of ASCII code of the first character of each key (ascending order of letters). If the same character is encountered, sort it in ascending order of ASCII code of the second character, and so on.

```json
{
    "Action"     :  "SendBatchUSMSMessage",
    "Limit"      :  10,
    "Region"     :  "cn-bj2"
}
```

3) Combine the sorted parameters with their corresponding values in the format of "parameter=value", and concatenate "AccessKeySecret" at the end of this signature string. The resulting string is the string to be signed.

```
ActionSendBatchUSMSMessageLimit10Regioncn-bj2MjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1
```

4) Calculate the signature value

Use SHA1 to encode the string to be signed and generate the request signature.

```
575fd93b539c4eb9837c8de6651e92389456adfa
```

## 4. Built-in Signature Processing Algorithm in SDK

```go
package main

import (
	"fmt"

	"github.com/uSpeedo/usms-sdk-go/um/auth"
)

func main() {
	params := map[string]interface{} {
		"Action": "CreateUSMSTemplate",
		"AccountId": um.Int(600000),
		"Purpose": um.Int(1),
		"International": true,
		"TemplateName": um.String("test template"),
		"Template": um.String("this is a test template"),
	}
	r := auth.CalculateSignature(params, AccessKeySecret)
	fmt.Print("r", r)
}
```

5) Set HTTP headers

API requests require the signature information to be passed through HTTP headers, which must include the following four parameters

X-Signature  签名值

X-Timestamp  时间戳，五分钟以内

X-Nonce      随机字符串

X-Access-Key-Id 控制台账户的AccessKeyId

## 三、完整示例
```go
package main

import (
	"fmt"
	"github.com/uSpeedo/usms-sdk-go/private/utils"
	"time"

	"github.com/uSpeedo/usms-sdk-go/services/usms"
	"github.com/uSpeedo/usms-sdk-go/um"
	"github.com/uSpeedo/usms-sdk-go/um/auth"
	"github.com/uSpeedo/usms-sdk-go/um/config"
	"github.com/uSpeedo/usms-sdk-go/um/log"
)

func main() {
	cfg := config.NewConfig()
	cfg.LogLevel = log.DebugLevel

	credential := auth.NewCredential()
	credential.AccessKeyId = "..."
	credential.AccessKeySecret = "..."

	client := usms.NewClient(&cfg, &credential)

	// send request
	req := client.NewSendBatchUSMSMessageRequest()
	req.AccountId = um.Int(1)
	req.Action = um.String("SendBatchUSMSMessage")
	req.Target = &usms.SendBatchInfo{
		TemplateId: "...",
		Targets: []usms.SendBatchTarget{
			{TemplateParams: []string{"1311"}, Phone: "138xxxx1123"},
		},
	}
	//add header
	req.SetNonce(utils.RandStr(10))
	req.SetAccessKeyId(credential.AccessKeyId)
	req.SetSignature(credential.CreateSign(makeSendParamMap(req)))
	t, _ := time.ParseDuration("-2m")
	req.SetTimestamp(time.Now().Add(t).Unix())
	resp, err := client.SendBatchUSMSMessage(req)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%+v", resp)
}

func makeSendParamMap(req *usms.SendBatchUSMSMessageRequest) map[string]interface{} {
	m := make(map[string]interface{}, 0)
	m["AccountId"] = req.AccountId
	m["Target"] = req.Target
	m["Action"] = req.Action
	return m
}
```