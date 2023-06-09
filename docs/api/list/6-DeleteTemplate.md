# DeleteTemplate
To delete a template associated with a business phone.  

## Request Parameters
| Name          | Type   | Description                                                           | Required |
| ------------- | ------ | --------------------------------------------------------------------- | -------- |
| Action        | string | DeleteTemplate                                                        | YES      |
| AccountId     | int    | Account Id                                                            | YES      |
| BusinessPhone | string | Phone number of template                                              | YES      |
| Name          | string | Template name (all language templates with same name will be deleted) | YES      |


## Request Example
```json
{
    "Action": "DeleteTemplate",
    "accountId": 8899,
    "BusinessPhone": "86150xxxx87",
    "Name":"embedded_test_232504140249178"
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
    "Action": "DeleteTemplateResponse",
    "Message": "",
    "RequestId": "c2bc8aa1-2bfe-4a92-b8aa-2c6fac8968e2",
    "RetCode": 0
}
```