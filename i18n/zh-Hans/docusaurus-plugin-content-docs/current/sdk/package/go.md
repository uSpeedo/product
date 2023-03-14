---
sidebar_label: 'SDK接入'
sidebar_position: 2
---

# GO SDK

## 一、准备工作

### 1) 获取API秘钥信息

调用API前需要获取秘钥信息生成签名`X-Signature`需要提供 `AccessKeyId` 和 `AccessKeySecret`可从控制台账户中获取。[获取步骤详见：如何获取AccessKeyId、AccessKeySecret](http://example.com/).

### 2) 申请短信模板

您可在短信服务-控制台的[国际短信/短信签名模块](http://example.com/).，自助申请短信模板；详细申请步骤详见：[如何申请短信模板](http://example.com/)

## 二、配置SDK

### 1) 使用 go get 安装

```go
go get github.com/uSpeedo/usms-sdk-go
```
Note 如果遇到网络不稳定，可以使用代理服务器来加速下载，例如使用 GOPROXY 加速：

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

### 3) 参数说明

- 手机号列表（PhoneNumbers）：支持国际及国内短信，国际短信使用 (86)13812345678 格式，需要在手机号码前面带上国际电话区号
- 短信模板 ID（TemplateId）: 首次使用，需要在 UCloud 控制台申请模板，审核通过后，将模板 ID 传入到该处。
- 短信模板参数列表（TemplateParams）：短信模板中可传入变量，申请的时候模板中有几个变量，则需要传入几个。
- 短信签名（SigContent）：首次使用，需要在 UCloud 控制台申请签名，审核通过后，将签名传入该处。首次申请的签名为默认签名，有默认签名存在时，该参数可不填。

### 4) 构造API签名


>生成签名方首先将所有参数和值放入一个map 中，并按照 key 值升序排列。然后将所有参数拼接起来，组成签名原文。最后使用 SHA1签名原文进行签名。若接口中需携带图片/视频等文件上传请求，文件流不参与签名，请自行将文件转换成文件流形式，且以文件流格式请求。

1) 从控制台账户中获取AccessKeySecret

```json
MjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1
```

2) 获取请求中的请求报文主体（request body）并按照第一个字符的键值 ASCII 码递增排序（字母升序排序），如果遇到相同字符则按照第二个字符的键值 ASCII 码递增排序，以此类推

```json
{
"Action"     :  "SendBatchUSMSMessage",
"Limit"      :  10,
"Region"     :  "cn-bj2"
}
```

3) 将排序后的参数与其对应值，组合成 参数参数值 的格式，并在本签名串的结尾拼接`AccessKeySecret`，此时生成的字符串为待签名字符串

```
ActionSendBatchUSMSMessageLimit10Regioncn-bj2MjI3YmYyMjItNmM4Mi00ZGM5LWEwNDQtN2EzZjM0Yzk2OWE1
```

4) 计算签名值

使用 SHA1 编码待签名字符串，生成请求签名

```
575fd93b539c4eb9837c8de6651e92389456adfa
```

5) 设置HTTP头

API请求要求通过HTTP Header来传递签名信息，必须包含以下四个参数

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