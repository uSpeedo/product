---
sidebar_label: 'Create USMS Template'
sidebar_position: 2
---
# CreateUSMSTemplate

> This is a process of calling the CreateUSMSTemplate interface to apply for an SMS template. Here are detailed descriptions of the request parameters and response elements

## Request Parameters
| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| Action | string | Value: CreateUSMSTemplate.   | Yes      |
| AccountId | int | Project ID, [Get AccountId](../index.md).   | Yes      |
| Purpose | int  | SMS template usage type: 1-verification and authentication SMS template; 2-notification SMS template; 3-promotion SMS template. | Yes |
| TemplateName   | string | SMS template name, no more than 32 characters, each English letter, symbol, number, Chinese character, etc. counts as 1 word. | Yes  |
| Template       | string | SMS template content, as follows: The number of words does not exceed 500, and each English letter, symbol, Chinese character, array, etc. counts as one word; the variable format in the template is filled in as {N}, where N is an integer greater than 1. When there are multiple parameters, it is recommended to start sequentially from 1, such as {1}, {2}, etc.; SMS templates are prohibited from including only variables. | Yes  |
| Remark         | string | Explanation of the reason for applying for the SMS template, the number of words does not exceed 128, each English letter, symbol, number, Chinese character, etc. counts as 1 word.  | No

# Response Elements
| Parameter name | Type   | Description  | Required |
| --- | --- | --- | --- |
| RetCode        | int    | When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message will not be returned. | Yes  |
| Action         | string | Operation name.                                                                 | Yes  |
| Message        | string | Return status code description. If the operation is successful, it will be returned as empty by default.                               | Yes  |
| TemplateId     | string | SMS template ID (work order ID when applying for an SMS template).                                    | Yes  |

## Request Example

```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "CreateUSMSTemplate",
   "AccountId": 1,
   "Purpose": 1,
   "TemplateName": "vnSDFAjK",
   "Template": "ulaAspXU",
   "Remark": "eGfxoirr",
}'
```

## Response Example

```json
{
    "Action": "CreateUSMSTemplateResponse", 
    "Message": "iUdpztgk", 
    "RetCode": 0, 
    "TemplateId": "edcONjeS"
}
```

