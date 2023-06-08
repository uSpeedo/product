# UploadMedia
To upload a media file associated with a business phone.  
## Request Parameters
| Name          | Type   | Description            | Required |
| ------------- | ------ | ---------------------- | -------- |
| Action        | string | UploadMedia            | YES      |
| AccountId     | int    | Account Id             | YES      |
| File          | string | File content in base64 | YES      |
| BusinessPhone | string | Business Phone Number  | YES      |

## Request Example
```json
{
    "Action": "UploadMedia",
    "AccountId": 8899,
    "BusinessPhone": "8615xxxx7",
    "File":"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"
}
```

## Response Parameters
| Name      | Type   | Description          |
| --------- | ------ | -------------------- |
| Action    | string | GetTemplatesResponse |
| RetCode   | int    | 0 for success        |
| Message   | string | Message              |
| RequestId | string | Request Id           |
| Data      | object | Return data          |

## Data Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| Id   | int  | Media Id    |

## Response Example
```json
{
    "Action": "UploadMediaResponse",
    "Data": {
        "Id": "76576xxxx5028"
    },
    "Message": "",
    "RequestId": "cf3288ef-1af0-4cef-824c-ef67b5f832ea",
    "RetCode": 0
}
```