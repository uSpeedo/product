---
sidebar_label: 'API调用说明'
sidebar_position: 1
---

# API调用说明

## 一、获取签名和AccountId

- 获取[签名](../sdk/signature.md)
- [获取AccountId](https://console.uspeedo.com/sms/overview)，如下图

![AccountId](/img/sdk/accountId.png)

## 二、请求参数说明

|Parameter name| Type |Description|Required|
|---|---|---|---|
| Action | string | 值为：DeleteUSMSTemplate   | **Yes**  |
| AccountId | int | 项目ID  请参考ListProjects接口  | Yes |


## 三、返回参数说明

|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|当RetCode不为0时，Message中显示具体错误描述|**Yes**|