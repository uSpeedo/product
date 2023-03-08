# 获取短信发送状态-GetUSMSSendReceipt

调用接口GetUSMSSendReceipt短信发送状态信息

# Request Parameters
|Parameter name| Type     |Description|Required|
|---|----------|---|---|
| AccountId     | int      | 项目ID  请参考ListProjects接口                     | Yes        |
|SessionNoSet| []string |发送短信时返回的SessionNo集合，单次调用集合数需控制在100个以内|**Yes**|

?> 短信提交发送后，可调用接口GetUSMSSendReceipt查询及获取短信发送的状态信息；若发送后未立即拿到回执状态，建议在发送后5至10分钟内在尝试代用获取，若超过12小时仍未拿到发送状态，可联系Uspeedo技术支持协助

# Response Elements
|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|错误描述|**Yes**|
|Data|array|回执信息集合|**Yes**|

## ReceiptPerSession
|Parameter name|Type|Description|Required|
|---|---|---|---|
|SessionNo|string|发送短信时返回的SessionNo|**Yes**|
|ReceiptSet|array|每个手机号的短信回执信息集合|**Yes**|

## ReceiptPerPhone
|Parameter name|Type| Description                                                                                     |Required|
|---|---|-------------------------------------------------------------------------------------------------|---|
|Phone|string| 手机号码                                                                                            |**Yes**|
|CostCount|int| 消耗短信条数                                                                                          |**Yes**|
|ReceiptResult|string| 回执结果，枚举值：<br/>  Success: 代表成功 <br/> Fail: 代表失败  <br/> Unknow: 代表未知 <br/> SubmitFail: 代表提交失败 |**Yes**|
|ReceiptCode|string| 状态报告编码                                                                                          |**Yes**|
|ReceiptDesc|string| 回执结果描述                                                                                          |**Yes**|
|ReceiptTime|int| 回执返回时间                                                                                          |**Yes**|
|UserId|string| 自定义的业务标识ID，字符串                                                                                  |**Yes**|

# Request Example
```
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "GetUSMSSendReceipt",
   "AccountId": 1,
   "SessionNoSet": ["nAQDODtO"]
}'
```

# Response Example
```
{
    "Action": "GetUSMSSendReceiptResponse", 
    "Message": "OnVhSPcD", 
    "Data": [
        {
            "SessionNo": "BmThtoRB", 
            "ReceiptSet": [
                {
                    "CostCount": 6, 
                    "ReceiptTime": 6, 
                    "UserId": "1213", 
                    "ReceiptCode": "0", 
                    "Phone": "QbPtKJPa", 
                    "ReceiptResult": "Success", 
                    "ReceiptDesc": "DxMRsuET"
                }
            ]
        }
    ], 
    "RetCode": 0
}
```

