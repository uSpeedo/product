---
sidebar_label: 'Golang'
sidebar_position: 2
---
# GO SDK

## 1. Preparation

### 1) Obtain API key information

Before calling the API, you need to obtain the key information to generate the `X-Signature` signature. You need to provide `AccessKeyId` and `AccessKeySecret`, which can be obtained from the console account. For detailed steps on how to obtain them, please refer to: [How to obtain AccessKeyId and AccessKeySecret](/docs/sms/api/signature-1).

### 2) Apply for SMS template

[How to apply for an SMS template](https://console.uspeedo.com/sms/template)

## 2. SDK

### 1) Install using go get.

```go
go get github.com/uSpeedo/usms-sdk-go
```
Note: If you encounter unstable network, you can use a proxy server to speed up the download, such as using GOPROXY acceleration

```go
export GOPROXY=https://goproxy.io
```

### 2) Install using go mod

Importing SDK

```go
import _ "github.com/uSpeedo/usms-sdk-go"

```

Afterwards, execute it in the project root directory:

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
See [How To Construct Api Signature](/docs/sms/api/signature-1.md)

## 3. Example

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
