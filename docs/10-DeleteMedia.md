# DeleteMedia-删除媒体文件

## Request Parameters
| Name      | Type   | Description        | Required |
| --------- | ------ | ------------------ | -------- |
| Action    | string | DeleteMedia        | YES      |
| AccountId | int    | 账户ID（网关参数） | YES      |


## Request Example
```json
{
    "Action": "DeleteMedia",
    "accountId": 8899,
    "companyId": 8899,
    "BusinessPhone": "8615000579987",
    "MediaId":"765769601625028"
}
```

## Response Parameters
| Name      | Type   | Description         |
| --------- | ------ | ------------------- |
| Action    | string | DeleteMediaResponse |
| RetCode   | int    | 0成功，非0失败      |
| Message   | string | 消息                |
| RequestId | string | 请求ID              |
| Data      | object | 返回数据            |

## Data Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |


## Response Example
```json
{
    "Action": "DeleteMediaResponse",
    "Message": "",
    "RequestId": "ddf52c54-47f5-43a3-b924-a084a4e52bde",
    "RetCode": 0,
    "Data":{}
}
```