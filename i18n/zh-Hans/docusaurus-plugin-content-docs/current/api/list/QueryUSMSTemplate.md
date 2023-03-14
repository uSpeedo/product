---
sidebar_label: '查询一个或多个短信模板'
sidebar_position: 5
---

# QueryUSMSTemplate

> 调用接口QueryUSMSTemplate查询短信模板

## Request Parameters
|Parameter name| Type     |Description|Required|
|---|---|---|---|
|Action|string| 值为：QueryUSMSTemplate | **Yes**|
|AccountId  | int  | 项目ID：[获取AccountId](./index.md)  | **Yes** |
|TemplateId| []string |模板ID|**Yes**|

## Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|当RetCode不为0时，Message中显示具体错误描述|**Yes**|
|Data|object|短信模板明细信息，各字段说明详见OutTemplate|No|

## OutTemplate
|Parameter name|Type|Description|Required|
|---|---|---|---|
|TemplateId|string|短信模板ID|**Yes**|
|Purpose|int|模板类型，选项：1-验证码类 2-通知类 3-会员推广类|**Yes**|
|TemplateName|string|短信模板名称|**Yes**|
|Template|string|短信模板内容|**Yes**|
|Status|int|短信模板状态；状态说明：0-待审核，1-审核中，2-审核通过，3-审核未通过，4-被禁用|**Yes**|
|Remark|string|模板说明|**Yes**|
|ErrDesc|string|审核失败原因|**Yes**|
|CreateTime|int|创建时间|**Yes**|
|Instruction|string|模板变量属性说明|No|

## Request Example
```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
    "Action": "QueryUSMSTemplate", 
    "AccountId": "1", 
    "TemplateId": ["UTA190715D9108C"]
}'
```

## Response Example
```json
{
    "Action": "QueryUSMSTemplateResponse", 
    "Message": "", 
    "Data": {
        "Status": 2, 
        "TemplateName": "Verification code template 01", 
        "Template": "Your verification code is {1}. Please use it within {2} minutes. Do not disclose it to others.", 
        "TemplateId": "UTA190715D9108C", 
        "ErrDesc": "", 
        "CreateTime": 1566783067
    }, 
    "RetCode": 0
}
```

