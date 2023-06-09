# GetMedia
To get a media file associated with a business phone.  
## Request Parameters
| Name          | Type   | Description    | Required |
| ------------- | ------ | -------------- | -------- |
| Action        | string | Value: ActionName.     | YES      |
| AccountId     | int    | Account Id.     | YES      |
| MediaId       | string | Media file Id.  | YES      |
| BusinessPhone | string | Business phone number. | YES      |


## Request Example
```json
{
    "Action": "GetMedia",
    "AccountId": 8899,
    "BusinessPhone": "86150xxxx987",
    "MediaId":"76576xxxxxx028"
}
```

## Response Parameters
| Name      | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| Action    | string | GetTemplatesResponse.                                  |
| RetCode   | int    | 0 for success [Error Codes](./999-Enum.md#error_code). |
| Message   | string | Message.                                               |
| RequestId | string | Request Id.                                            |
| Data      | object | Return data.                                           |

## Data Parameters
| Name     | Type   | Description      |
| -------- | ------ | ---------------- |
| FileName | string | File name.        |
| MimeType | string | File type.        |
| URL      | string | File content url. |


## Response Example
```json
{
    "Action": "GetMediaResponse",
    "Data": {
        "FileName": "62093be0-7a55-xxxx-xxx-38f7607fcf1f4ac35b3a-264e-472e-bd8d-xxxxxxxxx",
        "MimeType": "image/png",
        "URL": "https://xxx"
    },
    "Message": "",
    "RequestId": "e21c3f9d-78ec-4cb7-9472-5d4376fa1957",
    "RetCode": 0
}
```
