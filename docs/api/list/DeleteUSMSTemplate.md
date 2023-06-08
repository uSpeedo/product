---
sidebar_label: 'Delete SMS Template'
sidebar_position: 3
---

# DeleteUSMSTemplate

> Call the DeleteUSMSTemplate API to delete an SMS template.

- Deleting a template that is currently being reviewed is not supported.
- Please be careful when deleting SMS templates as they cannot be recovered once deleted.

## Request Parameters

|Parameter name| Type |Description|Required|
|---|---|---|---|
| Action | string | Value: DeleteUSMSTemplate.   | **Yes**  |
| AccountId | int | Project ID：[Get AccountId](../index.md).  | **Yes** |
|TemplateIds| []string |Template ID (i.e. the work order ID when applying for the SMS template), supports an array format.|**Yes**|

## Response Elements

|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message will not be returned.|Yes|
|Action|string|Operation name.|Yes|
|Message|string|Return the status code description. If the operation is successful, it will be returned as empty by default.|Yes|

## Request Example

```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "DeleteUSMSTemplate",
   "AccountId": 1,
   "TemplateIds": ["UTA1908XXXX8B3F","UTA1908XXXX8B3D"],
}'

```

## Response Example

```json
{
    "Action": "DeleteUSMSTemplateResponse", 
    "Message": "", 
    "RetCode": 0
}
```
