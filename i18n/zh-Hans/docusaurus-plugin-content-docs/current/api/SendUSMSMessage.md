---
sidebar_label: '发送短信'
sidebar_position: 6
---

# SendUSMSMessage

> 调用接口SendUSMSMessage发送短信

> 在一次请求中，最多可以向1000个手机号码发送相同内容的短信；

## Request Parameters
| Parameter name   | Type  | Description |Required|
|---|---|---|---|
| AccountId  | int  | 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)                   |**Yes**|
| PhoneNumbers   | []string | 电话号码数组，电话号码格式为(60)1xxxxxxxx，()中为国际长途区号(如中国为86或0086，两种格式都支持)，后面为电话号码.若不传入国际区号，如1851623xxxx，则默认为国内手机号                 |**Yes**|
| TemplateId       | string   | 模板ID（也即短信模板申请时的工单ID），请到[USMS控制台](https://console.uspeedo.com/sms/overview)的模板管理页面查看；使用的短信模板必须是已申请并通过审核；                       |**Yes**|
| SenderId         | string   | 国际短信SenderId，最长11位；                                                                                                 |No|
| TemplateParams | []string | 模板可变参数，以数组的方式填写，若模板中无可变参数，则该项可不填写；若模板中有可变参数，则该项为必填项，参数个数需与变量个数保持一致，否则无法发送； |No|
| ExtendCode       | string   | 短信扩展码，格式为阿拉伯数字串，默认不开通，如需开通请联系 UCloud技术支持                                                                            |No|
| UserId           | string   | 自定义的业务标识ID，字符串（ 长度不能超过32 位），不支持 单引号、表情包符号等特殊字符                                                                      |No|

> 支持在一次请求中向多个不同的手机号码发送相同内容的短信；

## Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|发生错误时表示错误描述|**Yes**|
|SessionNo|string|本次提交发送的短信的唯一ID，可根据该值查询本次发送的短信列表|No|
|UserId|string|本次提交的自定义业务标识ID，仅当发送时传入有效的UserId，才返回该字段。|No|

## Request Example

```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "SendUSMSMessage",
   "AccountId": 123,
   "PhoneNumbers": ["185xxxxxxxx","131xxxxxxxx"],
   "TemplateParams": [123456,10],
   "SenderId": "UCloud",
   "TemplateId": "UTA20210101xxxx",
   "UserId": "hGBCrtQw"
}'
```

## Response Example

```json
{
    "Action": "SendUSMSMessageResponse", 
    "SessionNo": "5a3XXXXXXb-7XXXX2-4XXX", 
    "Message": "提交发送成功", 
    "UserId": "najiyZOy", 
    "RetCode": 0
}
```

