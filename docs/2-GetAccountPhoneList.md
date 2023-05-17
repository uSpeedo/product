# GetAccountPhoneList-获取账号手机号列表

## Request Parameters
| Name      | Type   | Description         | Required |
| --------- | ------ | ------------------- | -------- |
| Action    | string | GetAccountPhoneList | YES      |
| AccountId | int    | 账户ID（网关参数）  | YES      |

## Request Example
```json
{
    "Action": "GetAccountPhoneList"
}
```

## Response Parameters
| Name      | Type   | Description           |
| --------- | ------ | --------------------- |
| Action    | string | CreateAccountResponse |
| RetCode   | int    | 0成功，非0失败        |
| Message   | string | 消息                  |
| RequestId | string | 请求ID                |
| Data      | object | 返回数据              |

## Data Parameters
| Name      | Type  | Description |
| --------- | ----- | ----------- |
| PhoneList | array | 手机号列表  |

## PhoneList Parameters
| Name           | Type   | Description                                     |
| -------------- | ------ | ----------------------------------------------- |
| Number         | string | 手机号                                          |
| Country        | string | 国家                                            |
| Status         | string | [状态](./999-Enum.md#phone_status)              |
| QualityRating  | string | [质量评级](./999-Enum.md#phone_quality_rating)  |
| DisplayName    | string | 显示名称                                        |
| MessagingLimit | string | [消息限制](./999-Enum.md#phone_messaging_limit) |

## Response Example
```json
{
    "Action": "GetAccountPhoneListResponse",
    "Data": {
        "PhoneList": [
            {
                "Number": "8613667151386",
                "Country": "CN",
                "Status": "",
                "QualityRating": "",
                "DisplayName": "",
                "MessagingLimit": ""
            },
            {
                "Number": "8615000579987",
                "Country": "CN",
                "Status": "CONNECTED",
                "QualityRating": "GREEN",
                "DisplayName": "優刻得信息科技-香港有限公司",
                "MessagingLimit": "TIER_250"
            }
        ]
    },
    "Message": "",
    "RequestId": "702f7f18-c242-4612-97fd-4e41fc161fa7",
    "RetCode": 0
}
```

