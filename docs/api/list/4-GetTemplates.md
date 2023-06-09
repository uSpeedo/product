# GetTemplates
To get a list of template associated with a business phone.  

## Request Parameters
| Name          | Type   | Description               | Required |
| ------------- | ------ | ------------------------- | -------- |
| Action        | string | GetTemplates              | YES      |
| AccountId     | int    | Account Id                | YES      |
| BusinessPhone | string | 业务手机号                | YES      |
| Name          | string | Template name             | NO       |
| Limit         | int    | Limit size of each search | NO       |
| After         | string | Paging cursor             | NO       |
| Before        | string | Paging cursor             | NO       |


## Request Example
```json
{
    "Action": "GetTemplates",
    "AccountId": 8899,
    "BusinessPhone": "8615xxxx79987",
    "Name":"ceshi",
    "Limit":2,
    "After":"MAZDZD"
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

## Data Parameters
| Name   | Type       | Description   |
| ------ | ---------- | ------------- |
| Data   | []template | Template list |
| Paging | object     | Paging info   |

## Paging Parameters
| Name   | Type   | Description                                                   |
| ------ | ------ | ------------------------------------------------------------- |
| Cursor | object | Paging cursor                                                 |
| Next   | string | Next page. If it is not empty, you can turn the page forwards |
| Prev   | string | Pre page. If it is not empty, you can turn the page backwards |

## Cursor Parameters
| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| After  | string | Paging cursor(Next Page) |
| Before | string | Paging cursor(Prev Page) |

## template Parameters
| Name           | Type        | Description                                 |
| -------------- | ----------- | ------------------------------------------- |
| ID             | string      | Template Id                                 |
| Name           | string      | Template Name                               |
| Category       | string      | [Category](./999-Enum.md#template_category) |
| Language       | string      | Template Language                           |
| Status         | string      | [Status](./999-Enum.md#template_status)     |
| RejectedReason | string      | Template RejectedReason                     |
| QualityScore   | object      | Template QualityScore                       |
| Tags           | []string    | Template Tags                               |
| Components     | []component | Template Components                         |

## QualityScore Parameters
| Name  | Type   | Description                                           |
| ----- | ------ | ----------------------------------------------------- |
| Score | string | [Quality Score](./999-Enum.md#template_quality_score) |

## component Parameters
Refer to [Components](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components)


## Response Example
```json
{
    "Action": "GetTemplatesResponse",
    "Data": {
        "Data": [
            {
                "Category": "AUTHENTICATION",
                "Components": [
                    {
                        "Example": {
                            "BodyText": [
                                [
                                    "1313"
                                ]
                            ]
                        },
                        "Text": "你好，你的验证码是{{1}}，请不要将信息告诉别人",
                        "Type": "BODY"
                    }
                ],
                "ID": "92962xxxx754",
                "Language": "en",
                "Name": "ceshiyanzhengma",
                "QualityScore": {
                    "Score": "UNKNOWN"
                },
                "Tags": [
                    "TEST_TAG"
                ],
                "RejectedReason": "INVALID_FORMAT",
                "Status": "REJECTED"
            },
            {
                "Category": "UTILITY",
                "Components": [
                    {
                        "Example": {
                            "HeaderHandle": [
                                "https://scontent.whatsapp.net/v/t61.29466-34/339053090_782169319941265_6515992918508567612_n.png?ccb=1-7&_nc_sid=57045b&_nc_ohc=kqoiquC7lvYAX_nBRL_&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&oh=01_AdQ6WI1_lWevNio26xXchMxcIv8aeVoF1UD9cTVdXtkkuw&oe=646FF3F7"
                            ]
                        },
                        "Format": "IMAGE",
                        "Type": "HEADER"
                    },
                    {
                        "Text": "测试模板",
                        "Type": "BODY"
                    },
                    {
                        "Buttons": [
                            {
                                "Text": "链接",
                                "Type": "URL",
                                "URL": "http://uspeedo.com/"
                            }
                        ],
                        "Type": "BUTTONS"
                    }
                ],
                "ID": "782xxxx607932",
                "Language": "af",
                "Name": "ceshi",
                "Tags": null,
                "QualityScore": {
                    "Score": "UNKNOWN"
                },
                "RejectedReason": "INCORRECT_CATEGORY",
                "Status": "REJECTED"
            }
        ],
        "Paging": {
            "Cursors": {
                "After": "MgZDZD",
                "Before": "MQZDZD"
            },
            "Next": "",
            "Previous": ""
        }
    },
    "Message": "",
    "RequestId": "d71eb04c-7475-4f06-8be4-96cea6041545",
    "RetCode": 0
}
```