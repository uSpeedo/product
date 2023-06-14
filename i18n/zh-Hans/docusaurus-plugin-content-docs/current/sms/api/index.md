---
sidebar_label: '快速开始'
sidebar_position: 1
---

# 快速开始

## 一、准备工作

- 1、获取签名：用来调用接口鉴权使用，[获取签名](/docs/sms/signature-1)
- 2、AccountId: 服务账号，每个用户默认只有一个，需要开通更多需要联系运营support@uspeedo.com，[获取AccountId](https://console.uspeedo.com/sms/overview)，如下图

![AccountId](/img/sdk/accountId.png)

## 二、调用方式

> 目前默认支持：SDK

- Golang: [usms-sdk-go](https://github.com/uSpeedo/usms-sdk-go)

## 三、请求参数说明

> 所有API都需要传递这两个参数

|Parameter name| Type |Description|Required|
|---|---|---|---|
| Action | string | API名称   | **Yes**  |
| AccountId | int | 项目ID：[获取AccountId](https://console.uspeedo.com/sms/overview)    | Yes |

## 四、返回参数说明

> 参数返回结构

|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|当RetCode不为0时，Message中显示具体错误描述，若RetCode为0，不返回Message|**Yes**|
|Action|string|操作名称|**Yes**|
|Message|string|当RetCode不为0时，Message中显示具体错误描述|**Yes**|

## 五、API列表

- 短信模版
  - [申请短信模版](./list/CreateUSMSTemplate)
  - [删除短信模版](./list/DeleteUSMSTemplate)
  - [修改短信模版](./list/UpdateUSMSTemplate)
  - [查询短信模版](./list/QueryUSMSTemplate)
- 发送短信
  - [批量发送短信](./list/SendBatchUSMSMessage)
  - [获取短信发送状态](./list/GetUSMSSendReceipt)