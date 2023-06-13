# 获取模板列表-GetTemplates

## Request Parameters
| Name          | Type   | Description        | Required |
| ------------- | ------ | ------------------ | -------- |
| Action        | string | GetTemplates       | YES      |
| AccountId     | int    | 账户ID（网关参数） | YES      |
| companyId     | int    | 公司ID             | YES      |
| BusinessPhone | string | 业务手机号         | YES      |
| Name          | string | 模板名称           | NO       |
| Limit         | int    | 每页条数           | NO       |
| After         | string | 分页标识           | NO       |
| Before        | string | 分页标识           | NO       |


## Request Example
```json
{
    "Action": "GetTemplates",
    "accountId": 8899,
    "companyId": 8899,
    "BusinessPhone": "8615000579987",
    "Name":"ceshi",
    "Limit":2,
    "After":"MAZDZD"
}
```

## Response Parameters
| Name      | Type   | Description          |
| --------- | ------ | -------------------- |
| Action    | string | GetTemplatesResponse |
| RetCode   | int    | 0成功，非0失败       |
| Message   | string | 消息                 |
| RequestId | string | 请求ID               |
| Data      | object | 返回数据             |

## Data Parameters
| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| Data   | []template | 模板列表    |
| Paging | object     | 分页信息    |

## Paging Parameters
| Name   | Type   | Description             |
| ------ | ------ | ----------------------- |
| Cursor | object | 分页标识                |
| Next   | string | 下一页 不为空可向后翻页 |
| Prev   | string | 上一页 不为空可向前翻页 |

## Cursor Parameters
| Name   | Type   | Description    |
| ------ | ------ | -------------- |
| After  | string | 游标值(下一页) |
| Before | string | 游标值(上一页) |

## template Parameters
| Name           | Type        | Description                                 |
| -------------- | ----------- | ------------------------------------------- |
| ID             | string      | 模板ID                                      |
| Name           | string      | 模板名称                                    |
| Category       | string      | [模板分类](./999-Enum.md#template_category) |
| Language       | string      | 模板语言                                    |
| Status         | string      | [模板状态](./999-Enum.md#template_status)   |
| RejectedReason | string      | 模板驳回原因                                |
| QualityScore   | object      | 模板质量分                                  |
| Components     | []component | 模板组件                                    |

## QualityScore Parameters
| Name  | Type   | Description                                    |
| ----- | ------ | ---------------------------------------------- |
| Score | string | [质量分](./999-Enum.md#template_quality_score) |

## component Parameters
见 [模板组件](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components)


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
                "ID": "929629324741754",
                "Language": "en",
                "Name": "ceshiyanzhengma",
                "QualityScore": {
                    "Score": "UNKNOWN"
                },
                "RejectedReason": "INVALID_FORMAT",
                "Status": "REJECTED"
            },
            {
                "Category": "AUTHENTICATION",
                "Components": [
                    {
                        "Text": "测试测试信息",
                        "Type": "BODY"
                    }
                ],
                "ID": "777444197075183",
                "Language": "zh_CN",
                "Name": "ceshiyanzhengma",
                "QualityScore": {
                    "Score": "UNKNOWN"
                },
                "RejectedReason": "INCORRECT_CATEGORY",
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
                "ID": "782169316607932",
                "Language": "af",
                "Name": "ceshi",
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
            "Previous": "https://graph.facebook.com/v16.0/105027559226899/message_templates?fields=id%2Ccategory%2Clanguage%2Cname%2Cstatus%2Ccomponents%2Crejected_reason%2Cquality_score&name=ceshi&limit=2&before=MQZDZD"
        }
    },
    "Message": "",
    "RequestId": "d71eb04c-7475-4f06-8be4-96cea6041545",
    "RetCode": 0
}
```
