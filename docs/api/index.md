---
sidebar_label: 'Quick Start'
sidebar_position: 1
---

# Quick Start

## Preparation

- Get signature: Used for API authentication, [View](../sdk/signature-2). 
- AccountId: Service account, each user has only one by default. To obtain more, please contact support@uspeedo.com. [Get AccountId](https://console.uspeedo.com/sms/overview), as shown below:

![AccountId](/img/sdk/accountId.png)

## Calling Method

> Currently only supports: SDK

- Golang: [usms-sdk-go](https://github.com/uSpeedo/usms-sdk-go)

## Request Parameters

> These two parameters are required for all APIs

|Parameter name| Type |Description|Required|
|---|---|---|---|
| Action | string | API name   | **Yes**  |
| AccountId | int | Project ID：[Get AccountId](https://console.uspeedo.com/sms/overview)    | Yes |

## Response Parameters

> Parameter return structure

|Parameter name|Type|Description|Required|
|---|---|---|---|
|RetCode|int|When RetCode is not 0, the specific error description is displayed in Message. If RetCode is 0, Message is not returned.|Yes|
|Action|string|Operation name.|Yes|
|Message|string|When RetCode is not 0, the specific error description is displayed in Message.|Yes|

## API List

- SMS Template
  - [Create USMS Template](/docs/api/list/CreateUSMSTemplate)
  - [Delete USMS Template](/docs/api/list/DeleteUSMSTemplate)
  - [Update USMS Template](/docs/api/list/UpdateUSMSTemplate)
  - [Query USMS Template](/docs/api/list/QueryUSMSTemplate)
- Send SMS
  - [Send Batch USMS Message](/docs/api/list/SendBatchUSMSMessage)
  - [Get USMS Send Receipt](/docs/api/list/GetUSMSSendReceipt)