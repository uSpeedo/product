---
sidebar_label: 'Query one or more SMS templates'
sidebar_position: 5
---

> Call the QueryUSMSTemplate interface to query SMS templates.

## Request Parameters

|Parameter name| Type     |Description|Required|
|---|---|---|---|
|Action|string| Value: "QueryUSMSTemplate" | Yes|
|AccountId  | int  | Project ID: [Get AccountId](../index.md)  | Yes |
|TemplateId| []string | Template ID |Yes|

## Response Elements

|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message is not returned. |Yes|
|Action|string|Operation name|Yes|
|Message|string|Return status code description. If the operation is successful, it is empty by default.|Yes|
|Data|object|SMS template details information, see OutTemplate for detailed field descriptions.|No|

## OutTemplate

|Parameter name|Type|Description|Required|
|---|---|---|---|
|TemplateId|string|SMS template ID|Yes|
|Purpose|int|Template type, options: 1-verification code template; 2-notification template; 3-member promotion template.|Yes|
|TemplateName|string|SMS template name.|Yes|
|Template|string|SMS template content.|Yes|
|Status|int|SMS template status; status description: 0-pending review, 1-under review, 2-approved, 3-failed review, 4-disabled.|Yes|
|Remark|string|Template description.|Yes|
|ErrDesc|string|Reason for review failure.|Yes|
|CreateTime|int|Creation time.|Yes|
|Instruction|string|Explanation of template variable attributes.|No|


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

