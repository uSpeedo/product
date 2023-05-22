# **获取计费信息 | GetMessageSummary**

## **请求方式**

- POST

## **Request Parameters**

- 跨度最大30天、默认当前时间最近七天

| Parameter name | Type | Description | Required |
| :------------- | :--- | :---------- | :------- |
| AccountId      | Int  | 项目Id      | Yes      |
| StartTime      | Int  | 开始时间    | No       |
| EndTime        | Int  | 结束时间    | No       |

## **Request Example**

```
{
    "Action":"GetMessageSummary",
    "AccountId": 55
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
| Name      | Type    | Description |
| --------- | ------- | ----------- |
| List      | []IList |             |
| MsgNum    | int     | 消息总数    |
| MsgAmount | int     | 消息费      |

**Response Elements IList**

| Parameter name | Type   | Description  |
| :------------- | :----- | :----------- |
| BusinessPhone  | String | 商户号码     |
| Country        | String | 用户国家简码 |
| ConvNum        | Int    | 会话总数     |
| ConvAmount     | Int    | 会话费       |



## **Response Example**

返回数据示例
```json
{
    "Action": "GetMessageSummaryResponse",
    "Data": {
        "MsgAmount": 6,
        "MsgNum": 1,
        "List": [
            {
                "BusinessPhone": "8613155948072",
                "Country": "GB",
                "ConvAmount": 1
            }
        ]
    },
    "Message": "",
    "RequestId": "8ea6c8f2-e23f-4816-9a48-243a40d66bfb",
    "RetCode": 0
}
```
