# 删除模板

## Request Parameters
| Name          | Type   | Description                      | Required |
| ------------- | ------ | -------------------------------- | -------- |
| Action        | string | DeleteTemplate                   | YES      |
| AccountId     | int    | 账户ID（网关参数）               | YES      |
| companyId     | int    | 公司ID                           | YES      |
| BusinessPhone | string | 业务手机号                       | YES      |
| Name          | string | 模板名称(同名多语言模板一并删除) | YES      |


## Request Example
```json
{
    "Action": "DeleteTemplate",
    "accountId": 8899,
    "companyId": 8899,
    "BusinessPhone": "8615000579987",
    "Name":"embedded_test_232504140249178"
}
```

## Response Parameters
| Name      | Type   | Description            |
| --------- | ------ | ---------------------- |
| Action    | string | DeleteTemplateResponse |
| RetCode   | int    | 0成功，非0失败         |
| Message   | string | 消息                   |
| RequestId | string | 请求ID                 |
| Data      | object | 返回数据               |



## Response Example
```json
{
    "Action": "DeleteTemplateResponse",
    "Data": {  },
    "Message": "",
    "RequestId": "c2bc8aa1-2bfe-4a92-b8aa-2c6fac8968e2",
    "RetCode": 0
}
```