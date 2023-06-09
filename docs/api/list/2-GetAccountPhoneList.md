# GetAccountPhoneList
To get a list of all phone numbers associated with a WhatsApp Business account.  

## Request Parameters
| Name      | Type   | Description         | Required |
| --------- | ------ | ------------------- | -------- |
| Action    | string | Value: GetAccountPhoneList. | YES      |
| AccountId | int    | Account ID.          | YES      |

## Request Example
```json
{
    "Action": "GetAccountPhoneList",
    "AccountId": 8899
}
```

## Response Parameters
| Name      | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| Action    | string | GetAccountPhoneListResponse.                                 |
| RetCode   | int    | 0 for success. [Error Codes](./999-Enum.md#error_code) |
| Message   | string | Return message.                                        |
| RequestId | string | Request id.                                            |
| Data      | object | Return data.                                           |

## Data Parameters
| Name      | Type  | Description       |
| --------- | ----- | ----------------- |
| PhoneList | array | Phones of account. |

## PhoneList Parameters
| Name           | Type   | Description                                           |
| -------------- | ------ | ----------------------------------------------------- |
| Number         | string | Phone number.                                          |
| Country        | string | Phone belong country.                                  |
| Status         | string | [Status](./999-Enum.md#phone_status)                  |
| QualityRating  | string | [Quality](./999-Enum.md#phone_quality_rating)         |
| DisplayName    | string | Display name.                                          |
| MessagingLimit | string | [MessagingLimit](./999-Enum.md#phone_messaging_limit) |

## Response Example
```json
{
    "Action": "GetAccountPhoneListResponse",
    "Data": {
        "PhoneList": [
            {
                "Number": "86136xxxx1386",
                "Country": "CN",
                "Status": "",
                "QualityRating": "",
                "DisplayName": "",
                "MessagingLimit": ""
            },
            {
                "Number": "86150xxxx9987",
                "Country": "CN",
                "Status": "CONNECTED",
                "QualityRating": "GREEN",
                "DisplayName": "UCloud Information Technology (HK) Limited",
                "MessagingLimit": "TIER_250"
            }
        ]
    },
    "Message": "",
    "RequestId": "702f7f18-c242-4612-97fd-4e41fc161fa7",
    "RetCode": 0
}
```

