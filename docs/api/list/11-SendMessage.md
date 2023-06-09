# SendMessage
To send message through a business phone.  
## Request Parameters
| Name          | Type   | Description                                | Required |
| ------------- | ------ | ------------------------------------------ | -------- |
| Action        | string | ActionName.                                 | YES      |
| AccountId     | int    | Account Id.                                 | YES      |
| To            | string | Target phone number.                        | YES      |
| Type          | string | [Message Type](./999-Enum.md#message_type) | YES      |
| Content       | string | Message Content (json in text).             | YES      |
| BusinessPhone | string | Business Phone number.                            | YES      |


## Request Example
```json
{
    "Action": "SendMessage",
    "AccountId": 8899,
    "BusinessPhone": "86150xxxxx987",
    "To":"4477xxxxx264",
    "Type":"text",
    "Content":"{\"body\":\"text-message-content\",\"preview_url\":false}"
}
```

## Response Parameters
| Name      | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| Action    | string | SendMessageResponse.                                  |
| RetCode   | int    | 0 for success. [Error Codes](./999-Enum.md#error_code) |
| Message   | string | Message.                                               |
| RequestId | string | Request Id.                                            |
| Data      | object | Return data.                                           |

## Data Parameters
| Name      | Type   | Description |
| --------- | ------ | ----------- |
| MessageId | string | Message Id.  |


## Response Example
```json
{
    "Action": "SendMessageResponse",
    "Data": {
        "MessageId": "xxx"
    },
    "Message": "",
    "RequestId": "8ea6c8f2-e23f-4816-9a48-243a40d66bfb",
    "RetCode": 0
}
```
