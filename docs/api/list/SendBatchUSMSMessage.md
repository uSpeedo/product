---
sidebar_label: 'Send Batch USMS Message'
sidebar_position: 7
---

# SendBatchUSMSMessage

Call the SendBatchUSMSMessage API to send SMS messages in bulk.

> In a single batch request, up to 1000 numbers are supported.

## Request Parameters
|Parameter name| Type | Description |Required|
|---|---|---|---|
|Action| string | The value is: SendBatchUSMSMessage |Yes|
|AccountId| int | Project ID [Get AccountId](../index.md) |Yes|
|TaskContent| []TaskCountModal | Batch sending content. In the sending content JSON array, each "template" combination is a sub-item, and multiple numbers are supported in each sub-item. |Yes|

> Support sending SMS messages with different contents to multiple different phone numbers in a single request.

### TaskCountModal

|Parameter name| Type | Description | Required |
|---|---|---|---|
|TemplateId| string | Template ID | Yes |
|Target| []TargetModal | Sending content specific to the number granularity | Yes|
|SenderId| string | SMS SenderId | No |


### TargetModal

|Parameter name| Type | Description | Required |
|---|---|---|---|
|Phone|string|Phone number|Yes|
|TemplateParams| []string | The actual template parameters sent (if using a template without parameters, this parameter cannot be passed). | No |
|SenderId| string | SMS SenderId | No |
|ExtendCode|string|SMS extension code||No|
|UserId|string|Custom business identifier||No|

## Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message is not returned.|Yes|
|Action|string|Operation name|Yes|
|Message|string|Error description when an error occurs|Yes|
|SessionNo|string|The unique ID of the submitted send task for this session, which can be used to query the list of SMS messages sent for this session. Note: This field is returned only when the number of successfully submitted SMS messages is greater than 0.|No|
|ReqUuid|string|The UUID of this request|No|
|SuccessCount|int|The number of successfully submitted SMS (not split)|No|
|FailContent|array|Details of unsent messages. This field is valid when the return code is non-zero and can be used to resend based on the data in this field.|No|

## BatchInfo
|Parameter name|Type|Description|Required|
|---|---|---|---|
|TemplateId|string|Template ID|Yes|
|SenderId|string|SenderId|Yes|
|Target|array|Specific number information|Yes|
|FailureDetails|string|Details of unsent messages. Note: This field is valid when the template/SenderId check fails.|No|

## FailPhoneDetail
|Parameter name|Type|Description|Required|
|---|---|---|---|
|TemplateParams|array|Template parameters|Yes|
|Phone|string|Mobile phone number|Yes|
|ExtendCode|string|Extension number|No|
|UserId|string|User-defined ID|No|
|FailureDetails|string|Reason for sending failure. Note: This field is empty if the template/SenderId check fails.|No|

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
                        "23333", 
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