# SendEmailTemplate

Before using this API, please prepare the following content in the [console](https://console.uspeedo.com):

- Create available templates.
- Set up the custom domain name and verify that it passes.
- Set sender information.

#### Request Parameters

| Field Name   | Parameter Type | Describe                                                                             | Require |
|--------------|:--------------:|--------------------------------------------------------------------------------------|:-------:|
| Action       |     string     | Value: SendEmailTemplate                                                             |   Yes   |
| AccountId    |      int       | Project ID. [Get AccountId](https://docs.uspeedo.com/docs/sms/api/).                 |   Yes   |
| TemplateId   |     string     | ID of the email template to be sent                                                  |   Yes   |
| SenderEmail  |     string     | The email address that was configured in the console Sender Setting.                 |   Yes   |
| EmailContent | []TargetEmail  | Email receiving address.TargetEmail structure array with a length between 1 and 100. |   Yes   |

##### TargetEmail struct

| Field Name             | Parameter Type | Describe                                                                                                                          | Require |
|------------------------|:--------------:|-----------------------------------------------------------------------------------------------------------------------------------|:-------:|
| EmailAddress           |     string     | email  receiving address                                                                                                          |   Yes   |
| TemplateVariableParams |    []string    | template variable parameters. Strings are concatenated from variable names, {##}, and variable values. For example：name{##}Jane. |   No    |

#### Response Parameters

| Field Name   |   Parameter Type    | Describe                                                                                                                                                                                             | Require |
|--------------|:-------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|
| RetCode      |         int         | When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message will not be returned.                                                                        |   Yes   |
| Message      |       string        | Return status code description. If the operation is successful, it will be returned as empty by default.                                                                                             |   Yes   |
| SessionNo    |       string        | The unique ID of this sending task.you can query the list of emails sent according to the value.Note：the field is returned only when the number of successfully submitted emails is greater than 0. |   No    |
| SuccessCount |         int         | The number of successfully submitted emails.                                                                                                                                                         |   No    |
| FailContent  | []FailedTargetEmail | Details that were not sent successfully can be resent based on the  field.                                                                                                                           |   No    |



##### FailedTargetEmail struct

| Field Name             | Parameter Type | Describe                                                                                          |
|------------------------|:--------------:|---------------------------------------------------------------------------------------------------|
| EmailAddress           |     string     | email receiving address                                                                           |
| TemplateVariableParams |    []string    | template variable parameters                                                                      |
| FailureReason          |     string     | the reason why submit failed.Note:if the template/domain/sender check failed, the field is empty. |

#### Request Example

```shell
curl 'https://api.uspeedo.com/api' \
--header 'X-AccessToken: eyJxxxxxxxxx1RI' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "Action": "SendEmailTemplate",
    "SendEmail": "example@example.com",
    "TemplateId": "UETXXXXXXXXXXX",
    "EmailContent": [
        {
            "EmailAddress": "example@example.com",
            "TemplateVariableParams": [
                "variable1{##}Params1",
                "variable2{##}Params2"
            ]
        }
    ]
}'
```

#### Response Example

```json
{
    "Action": "SendEmailTemplateResponse",
    "FailContent": [
        {
            "EmailAddress": "example@example.com",
            "TemplateVariableParams": [
                "variable1{##}Params1",
                "variable2{##}Params2"
            ],
            "FailureReason": "reason"
        }
    ],
    "Message": "Success",
    "RequestUuid": "bb7ee377-fa16-4df4-945a-0e624fc1316b",
    "RetCode": 0,
    "SessionNo": "6977469d-d6fc-47e1-ad46-67d866f80655",
    "SuccessCount": 0
}
```