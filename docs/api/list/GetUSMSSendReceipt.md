---
sidebar_label: 'Get SMS sending status'
sidebar_position: 8
---
# GetUSMSSendReceipt

Call the GetUSMSSendReceipt API to obtain the status information of SMS sending.

## Request Parameters

|Parameter name| Type |Description|Required|
|---|---|---|---|
|Action| string | The value is: GetUSMSSendReceipt. |Yes|
|AccountId | int | Project ID. [Get AccountId](../index.md) | Yes |
|SessionNoSet| []string | The SessionNo set returned when the SMS is sent. The number of sets per call should be controlled within 100.|Yes|

- After submitting and sending SMS, you can call the GetUSMSSendReceipt interface to query and obtain the status information of SMS sending.

- If you do not receive the receipt status immediately after sending, it is recommended to try to call it again within 5 to 10 minutes after sending.

- If you have not received the sending status after more than 12 hours, you can contact support@uspeedo.com for technical support.

## Response Elements

|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message is not returned.|Yes|
|Action|string|Operation name.|Yes|
|Message|string|Error description when an error occurs.|Yes|
|Data|array|Receipt information set.|Yes|

## ReceiptPerSession

|Parameter name|Type|Description|Required|
|---|---|---|---|
|SessionNo|string|The SessionNo returned when sending the SMS.|Yes|
|ReceiptSet|array|The collection of receipt information for each phone number.|Yes|

## ReceiptPerPhone

|Parameter name|Type|Description|Required|
|---|---|---|---|
|Phone|string|The phone number.|Yes|
|CostCount|int|The number of SMS messages consumed.|Yes|
|ReceiptResult|string|The receipt result, with the following enumeration values:<br/>Success: indicates success<br/>Fail: indicates failure<br/>Unknow: indicates unknown<br/>SubmitFail: indicates submission failure.|Yes|
|ReceiptCode|string|The status report code.|Yes|
|ReceiptDesc|string|The receipt result description.|Yes|
|ReceiptTime|int|The time when the receipt was returned.|Yes|
|UserId|string|Custom business identification ID, in string format.|Yes|

## Request Example

```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "GetUSMSSendReceipt",
   "AccountId": 1,
   "SessionNoSet": ["nAQDODtO"]
}'
```

## Response Example

```json
{
    "Action": "GetUSMSSendReceiptResponse", 
    "Message": "OnVhSPcD", 
    "Data": [
        {
            "SessionNo": "BmThtoRB", 
            "ReceiptSet": [
                {
                    "CostCount": 6, 
                    "ReceiptTime": 6, 
                    "UserId": "1213", 
                    "ReceiptCode": "0", 
                    "Phone": "QbPtKJPa", 
                    "ReceiptResult": "Success", 
                    "ReceiptDesc": "DxMRsuET"
                }
            ]
        }
    ], 
    "RetCode": 0
}
```