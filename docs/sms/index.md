---
sidebar_position: 1
---

# SMS

## 一、准备

> 在生成 API 请求中的签名（Signature） 时，需要提供 AccessKeyId 和 AccessKeySecret可从控制台账户中获取，具体获取方法如下：

### 1、登录[uSpeedo系统](https://console.uspeedo.com)

如果没有账号要先[注册](https://console.uspeedo.com/signin)

### 2、获取密钥AccessKeyId和AccessKeySecret

进入[Dashboard](https://console.uspeedo.com)页面，如下

![Key](../../static/img/sdk/key.png)

点击上图GENERATE按钮生成`AccessKeyId`和`AccessKeySecret`

这里假设获取的密钥为：

```golang
AccessKeyId := ""
AccessKeySecret := ""
```

### 3、获取要调用的接口，[API文档](http://baidu.com)

我们以[申请短信模版API](http://uspeedo.page.ucloudadmin.com/api-doc/USMS/%E6%8E%A7%E5%88%B6%E5%8F%B0API/CreateUSMSTemplate.html)为例子

```go
{
    "Action": "CreateUSMSTemplate",
    "AccountId": 10000,
    "TemplateName": "this is a test template",
    "Template": "test template"
    "Purpose": 1,
}
```

## 二、构造签名

生成签名方首先将所有参数和值放入一个map 中，并按照 key 值升序排列。然后将所有参数拼接起来，组成签名原文。最后使用 SHA1签名原文进行签名。若接口中需携带图片/视频等文件上传请求，文件流不参与签名，请自行将文件转换成文件流形式，且以文件流格式请求。

### 1、将请求参数按照名称进行升序排列

> 获取请求中的请求报文主体（request body）并按照第一个字符的键值 ASCII 码递增排序（字母升序排序），如果遇到相同字符则按照第二个字符的键值 ASCII 码递增排序，以此类推

```go
{
    "AccountId": 10000,
    "Action": "CreateUSMSTemplate",
    "Purpose": 1,
    "Template": "test template",
    "TemplateName": "this is a test template",
}
```

### 2、构造被签名参数串

被签名串的构造规则为: 被签名串 = 所有请求参数拼接(无需 HTTP 转义)。并在本签名串的结尾拼接 API 密钥的私钥（AccessKeySecret）。

```
AccountId60000051ActionCreateUSMSTemplateInternationaltruePurpose1Templatethis is a test templateTemplateNametest template AccountId60000051ActionCreateUSMSTemplateInternationaltruePurpose1Templatethis is a test templateTemplateNametest templateYmZmYWJiZTItZmFlNC00MWMwLTk4MzUtOWM5NjZhZjhhODJm
```

TODO: 需要确认我们SDK的规则是否和ucloud统一，关于空格和自定义符号怎么说？

注意：

- 对于 bool 类型，应编码为 true/false
- 对于浮点数类型，如果小数部分为 0，应仅保留整数部分，如 42.0 应保留 42
- 对于浮点数类型，不能使用科学计数法

## 三、生成签名值

使用SHA1编码被签名参数串，生成请求签名

## 四、SDK中内置处理签名处理算法

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