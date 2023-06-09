# GetMessageSummary

## **Request Parameters**

- span up to 30 days, default last 7 days

| Parameter name | Type | Description       | Required |
| -------------- | ---- | ----------------- | -------- |
| AccountId      | Int  | Account Id.        | Yes      |
| StartTime      | Int  | Search start time. | No       |
| EndTime        | Int  | Search end time.   | No       |

## **Request Example**

```json
{
    "Action":"GetMessageSummary",
    "AccountId": 55
}
```

## Response Parameters
| Name      | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| Action    | string | GetMessageSummaryResponse.                                  |
| RetCode   | int    | 0 for success.  [Error Codes](./999-Enum.md#error_code) |
| Message   | string | Message.                                               |
| RequestId | string | Request Id.                                            |
| Data      | object | Return data.                                           |

## Data Parameters
| Name      | Type    | Description         |
| --------- | ------- | ------------------- |
| List      | []IList | Summary Data List.                    |
| MsgNum    | int     | Message total count. |
| MsgAmount | int     | Message cost amount. |

**Response Elements IList**

| Parameter name | Type   | Description       |
| :------------- | :----- | :---------------- |
| BusinessPhone  | String | Business phone number.   |
| Country        | String | Country code.      |
| ConvNum        | Int    | Conversion count.  |
| ConvAmount     | Int    | Conversion amount. |



## **Response Example**
```json
{
    "Action": "GetMessageSummaryResponse",
    "Data": {
        "MsgAmount": 6,
        "MsgNum": 1,
        "List": [
            {
                "BusinessPhone": "8613xxxxx8072",
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
