# GetMedia-获取媒体文件

## Request Parameters
| Name          | Type   | Description        | Required |
| ------------- | ------ | ------------------ | -------- |
| Action        | string | ActionName         | YES      |
| AccountId     | int    | 账户ID（网关参数） | YES      |
| MediaId       | string | 媒体文件ID         | YES      |
| BusinessPhone | string | 业务号码           | YES      |


## Request Example
```json
{
    "Action": "GetMedia",
    "accountId": 8899,
    "companyId": 8899,
    "BusinessPhone": "8615000579987",
    "MediaId":"765769601625028"
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
| Name     | Type   | Description |
| -------- | ------ | ----------- |
| FileName | string | 文件名      |
| MimeType | string | 文件类型    |
| URL      | string | 文件URL     |


## Response Example
```json
{
    "Action": "GetMediaResponse",
    "Data": {
        "FileName": "62093be0-7a55-4347-82f5-38f7607fcf1f4ac35b3a-264e-472e-bd8d-73973187d937",
        "MimeType": "image/png",
        "URL": "https://goss.oss-cn-hongkong.aliyuncs.com/765769601625028?Expires=1682416632&OSSAccessKeyId=LTAI5tBrjWM5EyDe6MA5uc7z&Signature=Y9jxRYQ%2F%2F3vK4zyu6MUUKNMZE3U%3D"
    },
    "Message": "",
    "RequestId": "e21c3f9d-78ec-4cb7-9472-5d4376fa1957",
    "RetCode": 0
}
```