# Enums

## Template_Category
| Value          | Description                                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MARKETING      | Include promotions or offers, updates or messages inviting customers to respond/take action. Anything that does not qualify for utility or authentication purposes is marketing               |
| UTILITY        | Facilitate a specific request or transaction agreed upon, or provide customers with updates related to transactions in progress, including post-sale notifications and periodic billing       |
| AUTHENTICATION | Enables merchants to authenticate users using one-time passwords, which may occur in multiple steps of the login process (e.g., account verification, account recovery, integrity challenges) |

## Template_Status
| Value            | Description      |
| ---------------- | ---------------- |
| APPROVED         | APPROVED         |
| PENDING          | PENDING          |
| PENDING_DELETION | PENDING_DELETION |
| DISABLED         | DISABLED         |
| IN_APPEAL        | IN_APPEAL        |
| REJECTED         | REJECTED         |
| DELETED          | DELETED          |
| PAUSED           | PAUSED           |
| LIMIT_EXCEEDED   | LIMIT_EXCEEDED   |

## Template_Quality_Score
| Value   | Description |
| ------- | ----------- |
| UNKNOWN | 未知        |
| GREEN   | HIGH        |
| YELLOW  | MIDDLE      |
| RED     | LOW         |

## Message_Type
| Value    | Description |
| -------- | ----------- |
| text     | text        |
| image    | image       |
| audio    | audio       |
| video    | video       |
| document | document    |
| location | location    |
| sticker  | sticker     |
| template | template    |

## Phone_Status
| Value        | Description  |
| ------------ | ------------ |
| PENDING      | PENDING      |
| DELETED      | DELETED      |
| MIGRATED     | MIGRATED     |
| BANNED       | BANNED       |
| RESTRICTED   | RESTRICTED   |
| RATE_LIMITED | RATE_LIMITED |
| FLAGGED      | FLAGGED      |
| CONNECTED    | CONNECTED    |
| DISCONNECTED | DISCONNECTED |
| UNKNOWN      | UNKNOWN      |
| UNVERIFIED   | UNVERIFIED   |


## Phone_Name_Status
| 值                       | 说明                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| APPROVED                 | The name has  been approved.                                                                     |
| NONE                     | No certificate available.                                                                        |
| AVAILABLE_WITHOUT_REVIEW | Certificates for phone numbers can be downloaded and display names can be used without auditing. |
| DECLINED                 | The name has not been approved. You cannot download certificates.                                |
| EXPIRED                  | Your certificate has expired and is no longer available for download.                            |
| PENDING_REVIEW           | Your name request is under review. You cannot download certificates.                             |


## Phone_Quality_Rating
| 值      | 说明    |
| ------- | ------- |
| GREEN   | HIGH    |
| YELLOW  | MIDDLE  |
| RED     | LOW     |
| UNKNOWN | UNKNOWN |


## Phone_Messaging_Limit
| 值             | 说明                            |
| -------------- | ------------------------------- |
| TIER_1K        | 1 thousand customers/24 hours   |
| TIER_10K       | 10 thousand customers/24 hours  |
| TIER_100K      | 100 thousand customers/24 hours |
| TIER_50        | 50 thousand customers/24 hours  |
| TIER_250       | 250 thousand customers/24 hours |
| TIER_UNLIMITED | UNLIMITED                       |