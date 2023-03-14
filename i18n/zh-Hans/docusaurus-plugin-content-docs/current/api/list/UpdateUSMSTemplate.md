---
sidebar_label: '修改短信模板'
sidebar_position: 4
---

# UpdateUSMSTemplate

> 调用接口UpdateUSMSTemplate修改未通过审核的短信模板，并重新提交审核

## Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
| Action | string | 值为： UpdateUSMSTemplate  | **Yes**      |
| AccountId   | int   | 项目ID：[获取AccountId](./index.md)     | **Yes** |
|TemplateId|string|短信模板ID|**Yes**|
|Template|string|新的模板内容。模板名称和模板内容必须提供一个，否则会报错。小于等于600个字|**Yes**|
|TemplateName|string|新的模板名称。小于等于32个字，每个中文、英文、数组、符合都计为一个字|No|
|Remark|string|短信模板申请原因说明，字数不超过128，每个中文、符号、英文、数字等都计为1个字。|No|
|Instruction|string|模板变量属性说明|No|

> 修改消息模板。用于修改现有模板，提交成功后，若修改了模板内容，模板状态等会重置到初创状态；若只修改模板名称，则不会重置

## Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|发生错误时表示错误描述|**Yes**|

## Request Example

```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "UpdateUSMSTemplate",
   "AccountId": 1,
   "TemplateId": "UTA1908XXXX8B3F",
   "Template": "alertXXXXXXXXXXXXXXXXXXXXXXXX",
   "TemplateName": "ucloud-alert",
   "Remark": "XXXXXXXXXXXXXXX",
   "Instruction": "cmUVPDNr"
}'
```

# Response Example

```json
{
    "Action": "UpdateUSMSTemplateResponse", 
    "Message": "", 
    "RetCode": 0
}
```

