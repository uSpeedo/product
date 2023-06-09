# DeleteMedia
To delete a media file associated with a business phone.  
## Request Parameters
| Name      | Type   | Description | Required |
| --------- | ------ | ----------- | -------- |
| Action    | string | DeleteMedia | YES      |
| AccountId | int    | Account Id  | YES      |


## Request Example
```json
{
    "Action": "DeleteMedia",
    "accountId": 8899,
    "BusinessPhone": "86150xxxxx987",
    "MediaId":"76576xxxxxx5028"
}
```

## Response Parameters
| Name      | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| Action    | string | GetTemplatesResponse                                  |
| RetCode   | int    | 0 for success [Error Codes](./999-Enum.md#error_code) |
| Message   | string | Message                                               |
| RequestId | string | Request Id                                            |
| Data      | object | Return data                                           |



## Response Example
```json
{
    "Action": "DeleteMediaResponse",
    "Message": "",
    "RequestId": "ddf52c54-47f5-43a3-b924-a084a4e52bde",
    "RetCode": 0
}
```