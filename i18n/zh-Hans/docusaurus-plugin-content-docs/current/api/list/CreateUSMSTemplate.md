---
sidebar_label: '申请短信模板'
sidebar_position: 2
---

> 调用接口CreateUSMSTemplate申请短信模板

## Request Parameters
| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| Action | string | 值为：CreateUSMSTemplate   | **Yes**      |
| AccountId | int | 项目ID：[获取AccountId](/docs/api/list/index.md)   | **Yes**      |
| Purpose | int  | 短信模板用途类型：1-验证码类短信模板；2-系统通知类短信模板；3-会员推广类短信模板； | **Yes** |
| TemplateName   | string | 短信模板名称，不超过32个字符，每个中文、符号、英文、数字等都计为1个字。 | **Yes**  |
| Template       | string | 短信模板内容，说明如下：字数不超过500，每个中文、符号、英文、数组等都计为一个字；模板中的变量填写格式：{N}，其中N为大于1的整数，有多个参数时，建议N从1开始顺次，例如：{1}、{2}等；短信模板禁止仅包括变量的情况； | **Yes**  |
| Remark         | string | 短信模板申请原因说明，字数不超过128，每个中文、符号、英文、数字等都计为1个字。  | No       

## Response Elements
| Parameter name | Type   | Description  | Required |
| --- | --- | --- | --- |
| RetCode        | int    | 当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message | **Yes**  |
| Action         | string | 操作名称                                                                 | **Yes**  |
| Message        | string | 返回状态码描述，如果操作成功，默认返回为空                               | **Yes**  |
| TemplateId     | string | 短信模板ID（短信模板申请时的工单ID）                                     | **Yes**  |

## Request Example

```shell
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "CreateUSMSTemplate",
   "AccountId": 1,
   "Purpose": 1,
   "TemplateName": "vnSDFAjK",
   "Template": "ulaAspXU",
   "Remark": "eGfxoirr",
}'
```

## Response Example
```json
{
    "Action": "CreateUSMSTemplateResponse", 
    "Message": "iUdpztgk", 
    "RetCode": 0, 
    "TemplateId": "edcONjeS"
}
```