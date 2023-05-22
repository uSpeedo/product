# SendMessage-发送消息

## Request Parameters
| Name          | Type   | Description                            | Required |
| ------------- | ------ | -------------------------------------- | -------- |
| Action        | string | ActionName                             | YES      |
| AccountId     | int    | 账户ID（网关参数）                     | YES      |
| To            | string | 接收方号码                             | YES      |
| Type          | string | [消息类型](./999-Enum.md#message_type) | YES      |
| Content       | string | 消息内容                               | YES      |
| BusinessPhone | string | 企业号码                               | YES      |


## Request Example
```json
{
    "Action": "SendMessage",
    "accountId": 8899,
    "companyId": 8899,
    "BusinessPhone": "8615000579987",
    "To":"447731688264",
    "Type":"text",
    "Purpose":1,
    "Content":"{\"body\":\"text-message-content\",\"preview_url\":false}"
}
```

## Response Parameters
| Name      | Type   | Description        |
| --------- | ------ | ------------------ |
| Action    | string | ActionNameResponse |
| RetCode   | int    | 0成功，非0失败     |
| Message   | string | 消息               |
| RequestId | string | 请求ID             |
| Data      | object | 返回数据           |

## Data Parameters
| Name      | Type   | Description |
| --------- | ------ | ----------- |
| MessageId | string | 消息ID      |


## Response Example
```json
{
    "Action": "SendMessageResponse",
    "Data": {
        "MessageId": "wamid.HBgMNDQ3NzMxNjg4MjY0FQIAERgSQTkyNUNCODYzNzc2N0U3MERGAA=="
    },
    "Message": "",
    "RequestId": "8ea6c8f2-e23f-4816-9a48-243a40d66bfb",
    "RetCode": 0
}
```