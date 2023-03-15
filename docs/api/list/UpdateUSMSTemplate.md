---
sidebar_label: 'Update USMS Template'
sidebar_position: 7
---
# UpdateUSMSTemplate

> Call the UpdateUSMSTemplate API to modify an unapproved SMS template and resubmit it for review.

## Request Parameters
|Parameter name|Type|Description|Required|
|---|---|---|---|
|Action|string| The value is: UpdateUSMSTemplate. |Yes|
|AccountId|int| Project ID. [Get AccountId](../index.md) |Yes|
|TemplateId|string|ID of the SMS template to be modified.|Yes|
|Template|string|New template content. Either the template name or the template content must be provided, otherwise an error will occur. The length must be less than or equal to 600 characters.|Yes|
|TemplateName|string|New template name. The length must be less than or equal to 32 characters, and each Chinese character, English letter, number, and symbol counts as one character.|No|
|Remark|string|Explanation of the reason for applying for the SMS template. The length must not exceed 128 characters, and each Chinese character, symbol, English letter, number, etc. counts as one character.|No|
|Instruction|string|Explanation of the template variable properties.|No|

> Modify the SMS template. It is used to modify existing templates. After a successful submission, if the template content is modified, the template status will be reset to the initial state; if only the template name is modified, it will not be reset.

## Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message is not returned.|Yes|
|Action|string|Operation name.|Yes|
|Message|string|Error description when an error occurs.|Yes|

# Request Example
```
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "UpdateUSMSTemplate",
   "AccountId": 1,
   "TemplateId": "UTA1908XXXX8B3F",
   "Template": "alertXXXXXXXXXXXXXXXXXXXXXXXX",
   "TemplateName": "uSpeedo-alert",
   "Remark": "XXXXXXXXXXXXXXX",
   "Instruction": "cmUVPDNr"
}'
```

# Response Example
```
{
    "Action": "UpdateUSMSTemplateResponse", 
    "Message": "", 
    "RetCode": 0
}
```

