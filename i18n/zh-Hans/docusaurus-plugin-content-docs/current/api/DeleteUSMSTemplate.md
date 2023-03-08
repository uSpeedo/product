---
sidebar_label: '删除短信模板'
sidebar_position: 3
---

# DeleteUSMSTemplate

> 调用接口DeleteUSMSTemplate删除短信模板

- 不支持删除正在审核中的短信模板；
- 短信模板删除后不可恢复，请谨慎操作。

## Request Parameters

|Parameter name| Type |Description|Required|
|---|---|---|---|
| Action | string | 值为：DeleteUSMSTemplate   | **Yes**  |
| AccountId | int | 项目ID  请参考ListProjects接口  | Yes |
|TemplateIds| []string |模板ID（也即短信模板申请时的工单ID），支持以数组的方式|**Yes**|

## Response Elements

|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|返回状态码描述，如果操作成功，默认返回为空|**Yes**|

## Request Example

```bash
curl -X POST https://api.uspeedo.com/api -H 'Content-Type: application/json' -d '{
   "Action": "DeleteUSMSTemplate",
   "AccountId": 1,
   "TemplateIds": ["UTA1908XXXX8B3F","UTA1908XXXX8B3D"],
}'

```

## Response Example

```json
{
    "Action": "DeleteUSMSTemplateResponse", 
    "Message": "", 
    "RetCode": 0
}
```