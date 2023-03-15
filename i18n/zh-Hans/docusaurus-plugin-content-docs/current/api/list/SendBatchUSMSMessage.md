---
sidebar_label: '批量发送短信'
sidebar_position: 7
---

# SendBatchUSMSMessage

调用SendBatchUSMSMessage接口批量发送短信

> 在一次批量请求中，最多支持1000个号码

## Request Parameters
|Parameter name| Type | Description |Required|
|---|---|---|---|
|Action| string | 值为：SendBatchUSMSMessage |**Yes**|
|AccountId| int | 项目ID: [获取AccountId](../index) |**Yes**|
|TaskContent| []TaskCountModal | 批量发送内容，发送内容json数组中，每个“模板”组合作为一个子项，每个子项内支持多个号码 |**Yes**|

> 支持在一次请求中向多个不同的手机号码发送不同内容的短消息

### TaskCountModal

|Parameter name| Type | Description | Required |
|---|---|---|---|
|TemplateId| string | 模版ID | **Yes** |
|Target| []TargetModal | 具体到号码粒度的发送内容 | **Yes**|
|SenderId| string | 短信SenderId | **No** |


### TargetModal

|Parameter name| Type | Description | Required |
|---|---|---|---|
|Phone|string|手机号码|**Yes**|
|TemplateParams| []string | 实际发送的模板参数（若使用的是无参数模板，该参数不能传值） | **No** |
|SenderId| string | 短信SenderId | **No** |
|ExtendCode|string|短信扩展码||**No**|
|UserId|string|自定义业务标识||**No**|

## Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|发生错误时表示错误描述|**Yes**|
|SessionNo|string|本次提交发送任务的唯一ID，可根据该值查询本次发送的短信列表。注：成功提交短信数大于0时，才返回该字段|No|
|ReqUuid|string|本次请求Uuid|No|
|SuccessCount|int|成功提交短信（未拆分）条数|No|
|FailContent|array|未发送成功的详情，返回码非0时该字段有效，可根据该字段数据重发|No|

## BatchInfo
|Parameter name|Type|Description|Required|
|---|---|---|---|
|TemplateId|string|模板ID|**Yes**|
|SenderId|string|SenderId|**Yes**|
|Target|array|具体号码信息|**Yes**|
|FailureDetails|string|未能成功发送的详情。注：模板/SenderId检验失败时，该字段有效|No|

## FailPhoneDetail
|Parameter name|Type|Description|Required|
|---|---|---|---|
|TemplateParams|array|模板参数|**Yes**|
|Phone|string|手机号|**Yes**|
|ExtendCode|string|扩展号码|No|
|UserId|string|用户自定义ID|No|
|FailureDetails|string|发送失败原因。注：若模板/SenderId校验失败，该字段为空|No|

## Request Example

```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "SendBatchUSMSMessage",
   "AccountId": 1,
   "TaskContent": [
  {
    "TemplateId": "UTA20212831C85C",
    "SenderId": "uSpeedo",
    "Target": [
      {
        "TemplateParams": [
          "123456"
        ],
        "Phone": "(852)55311111",
        "ExtendCode": "123",
        "UserId": "456"
      }
    ]
  }
]
}'
```

## Response Example

```json
{
    "FailContent": [
        {
            "SenderId": "UCloud", 
            "Target": [
                {
                    "Phone": "(852)55311111", 
                    "UserId": "catch the big fish", 
                    "ExtendCode": "123", 
                    "TemplateParams": [
                        "开心果挖土机", 
                        "13579"
                    ]
                }
            ], 
            "FailureDetails": "phone in the black list", 
            "TemplateId": "UTA20212831C85C"
        }
    ], 
    "RetCode": 0, 
    "SuccessCount": 2, 
    "SessionNo": "abcd-dadd-dafs-dadfa-dafdsa", 
    "Action": "SendBatchUSMSMessageResponse", 
    "Message": "submit success", 
    "ReqUuid": "abcd-dadd-dafs-dadfa-dafdsa"
}
```