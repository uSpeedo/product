# 枚举

## Template_Category
| Value          | Description                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| MARKETING      | 包括促销或优惠、信息更新或邀请客户回应/采取行动的信息。任何不符合效用或身份验证用途均为营销              |
| UTILITY        | 促成商定的某个具体请求或交易，或向客户提供与进行中的交易相关的最新信息，包括售后通知和定期账单           |
| AUTHENTICATION | 使商家可以使用一次性密码验证用户身份，可能会在登录过程的多个步骤中出现（如帐号认证、帐号找回、诚信挑战） |

## Template_Status
| Value            | Description    |
| ---------------- | -------------- |
| APPROVED         | 模板已通过审核 |
| PENDING          | 模板待审核     |
| PENDING_DELETION | 模板待删除     |
| DISABLED         | 模板已禁用     |
| IN_APPEAL        | 模板申诉中     |
| REJECTED         | 模板已拒绝     |
| DELETED          | 模板已删除     |
| PAUSED           | 模板已暂停     |
| LIMIT_EXCEEDED   | 模板已超限     |

## Template_Quality_Score
| Value   | Description |
| ------- | ----------- |
| UNKNOWN | 未知        |
| GREEN   | 高          |
| YELLOW  | 中          |
| RED     | 低          |

## Message_Type
| Value    | Description |
| -------- | ----------- |
| text     | 文本        |
| image    | 图片        |
| audio    | 音频        |
| video    | 视频        |
| document | 文档        |
| location | 位置        |
| sticker  | 表情        |
| template | 模板        |

## Message_Purpose
| Value | Description                                  |
| ----- | -------------------------------------------- |
| 1     | 商户发起                                     |
| 2     | 客户发起                                     |
| 3     | 免费链接                                     |
| 4     | 效用（实用、工具类）对话                     |
| 5     | 身份验证对话                                 |
| 6     | 营销对话（不符合效用、身份验证的都属于营销） |
| 7     | 服务对话  所有用户发起的对话                 |

## Phone_Status
| Value        | Description |
| ------------ | ----------- |
| PENDING      | 待验证      |
| DELETED      | 已删除      |
| MIGRATED     | 已迁移      |
| BANNED       | 已封禁      |
| RESTRICTED   | 已限制      |
| RATE_LIMITED | 已限速      |
| FLAGGED      | 已标记      |
| CONNECTED    | 已连接      |
| DISCONNECTED | 已断开      |
| UNKNOWN      | 未知        |
| UNVERIFIED   | 未验证      |


## Phone_Name_Status
| 值                       | 说明                                                     |
| ------------------------ | -------------------------------------------------------- |
| APPROVED                 | 名称尚未获得批准。                                       |
| NONE                     | 没有可用证书。                                           |
| AVAILABLE_WITHOUT_REVIEW | 可下载电话号码的证书，而且无需进行审核，即可使用显示名。 |
| DECLINED                 | 名称尚未获得批准。您不能下载证书。                       |
| EXPIRED                  | 您的证书已过期，不可再下载。                             |
| PENDING_REVIEW           | 您的名称请求正在审核中。您不能下载证书。                 |


## Phone_Quality_Rating
| 值      | 说明     |
| ------- | -------- |
| GREEN   | 高质量   |
| YELLOW  | 中质量   |
| RED     | 低质量   |
| UNKNOWN | 质量未知 |


## Phone_Messaging_Limit
| 值             | 说明               |
| -------------- | ------------------ |
| TIER_1K        | 1 千位客户/24 小时 |
| TIER_10K       | 1 万位客户/24 小时 |
| TIER_100K      | 10万位客户/24 小时 |
| TIER_50        | 50 位客户/24 小时  |
| TIER_250       | 250 位客户/24 小时 |
| TIER_UNLIMITED | 不适用             |