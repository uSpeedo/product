# SendMessage

To send message through a business phone.

## Request Parameters

| Name          | Type   | Description                                     | Required |
| ------------- | ------ | ----------------------------------------------- | -------- |
| Action        | string | ActionName                                      | YES      |
| AccountId     | int    | Account Id                                      | YES      |
| To            | string | Target phone number                             | YES      |
| Type          | string | [Message Type](./999-Enum.md#message_type)      | YES      |
| Content       | string | Message Content varies with Type (json in text) | YES      |
| BusinessPhone | string | Business Phone                                  | YES      |

## Request Example

```json
{
  "Action": "SendMessage",
  "accountId": 8899,
  "companyId": 8899,
  "BusinessPhone": "8615000579987",
  "To": "447731688264",
  "Type": "text",
  "Purpose": 1,
  "Content": "{\"body\":\"text-message-content\",\"preview_url\":false}"
}
```

### Parameters of Text Messages

| Name        | Type    | Description                                                                                                                                                                                                                                                                                                                                                                            | Required |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| body        | string  | The body of a text message can contain a URL or formatting elements. The formatting elements are described as follows. Bold: Bold text, for example, Your total is **$10.50**. Italics: Text that requires italics, such as Your total is *$10.50*. Underline: Text that requires strikethrough , for example, Your total is ~~$10.50~~.                                         | YES      |
| preview_url | boolean | Whether to enable URL preview. If true is set to enable URL preview, and false is set to disable URL preview. The URL must start with http:// or https:// and be followed by the link address information expressed in the domain name (the link address expressed in the IP address is not identified). URL preview is a message rendering feature supported by WhatsApp client side. | NO       |

### Types of Text Messages, Example JSON

```json
{
  "body": "text-message-content",
  "preview_url": false
}
```

### Parameters of Image Messages

| Name    | Type   | Description                                                                                          | Required |
| ------- | ------ | ---------------------------------------------------------------------------------------------------- | -------- |
| link    | string | (Either id or link) URL link of the image. It must be HTTP/HTTPS URLs.                               | NO       |
| id      | string | (Either id or link) Image storage ID, obtained after uploading the file through the Media interface. | NO       |
| caption | string | Description of image                                                                                 | NO       |

### Types of Image Messages, Example JSON

```json
{
  "id": "5867096a-a9be-4a56-94d6-89377623b4ac",
  "caption": "image test"
}
```

### Parameters of Video Messages

| Name    | Type   | Description                                                                                          | Required |
| ------- | ------ | ---------------------------------------------------------------------------------------------------- | -------- |
| link    | string | (Either id or link) URL link of the video. It must be HTTP/HTTPS URLs.                               | NO       |
| id      | string | (Either id or link) Video storage ID, obtained after uploading the file through the Media interface. | NO       |
| caption | string | Description of video                                                                                 | NO       |

### Types of Video Messages, Example JSON

```json
{
  "id": "5867096a-a9be-4a56-94d6-89377623b4ac",
  "caption": "video test"
}
```

### Parameters of Audio Messages

| Name | Type   | Description                                                                                          | Required |
| ---- | ------ | ---------------------------------------------------------------------------------------------------- | -------- |
| link | string | (Either id or link) URL link of the audio. It must be HTTP/HTTPS URLs.                               | NO       |
| id   | string | (Either id or link) Audio storage ID, obtained after uploading the file through the Media interface. | NO       |

### Types of Audio Messages, Example JSON

```json
{
  "id": "5867096a-a9be-4a56-94d6-89377623b4ac"
}
```

### Parameters of Document Messages

| Name     | Type   | Description                                                                                             | Required |
| -------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- |
| link     | string | (Either id or link) URL link of the document. It must be HTTP/HTTPS URLs.                               | NO       |
| id       | string | (Either id or link) Document storage ID, obtained after uploading the file through the Media interface. | NO       |
| filename | string | The name of document                                                                                    | NO       |

### Types of Document Messages, Example JSON

```json
{
  "id": "5867096a-a9be-4a56-94d6-89377623b4ac",
  "filename": "document"
}
```

### Parameters of Location Messages

| Name      | Type    | Description               | Required |
| --------- | ------- | ------------------------- | -------- |
| latitude  | float64 | information of latitude   | YES      |
| longitude | float64 | information of longtitude | YES      |
| name      | string  | name of file              | NO       |
| address   | string  | name of file              | NO       |

### Types of Location Messages, Example JSON

```json
{
  "latitude": 22.550802897696343,
  "longitude": 113.93844723701477,
  "name": "Los Angeles, CA",
  "address": "Westwood Blvd"
}
```

### Parameters of sticker Messages

| Name | Type   | Description                                                                                       | Required |
| ---- | ------ | ------------------------------------------------------------------------------------------------- | -------- |
| link | string | (Either id or link) URL link of sticker. It must be HTTP/HTTPS URLs.                                   | NO       |
| id   | string | (Either id or link) sticker storage ID, obtained after uploading the file through the Media interface. | NO       |

### Types of sticker, Example JSON

```json
{
  "id": "5867096a-a9be-4a56-94d6-89377623b4ac"
}
```

### Parameters of Template Messages

| Name       | Type        | Description                                                   | Required |
| ---------- | ----------- | ------------------------------------------------------------- | -------- |
| name       | string      | name of template                                              | YES      |
| language   | Language    | settings of template language                                 | YES      |
| components | []Component | Sequences of variable setting for components within templates | NO       |

#### Parameters of Language

| Name   | Type   | Description                      | Required |
| ------ | ------ | -------------------------------- | -------- |
| code   | string | code of language                 | YES      |
| policy | string | The fixed value is deterministic | YES      |

#### Parameters of Component

| Name       | Type        | Description                                                                                                                                                                                                                                                                              | Required |
| ---------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| type       | string      | type of component. It can be header，body，button<br/>1）When type = header, set the variable information in the template header;<br/>2）When type = body, set the variable information in the template content;<br/>3）When type = button, set the variable information in the template button. | YES      |
| sub_type   | string      | The type of button created. It is required only when type =  button, and it can be url, quick_reply. If type is of other types, this parameter is unavailable.                                                                                                                           | NO       |
| index      | string      | The position index of the button. It is required only when type = button. The serial number of the button is 0 to 2.                                                                                                                                                                     | NO       |
| parameters | []Parameter | list of component parameters                                                                                                                                                                                                                                                             | NO       |

##### Parameters

| Name     | Type     | Description                                                                                                                                                                                                                                                                                                                                   | Required |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| type     | string   | 1）When the type of component object = header, it can be text，image，video，document；<br/>2）When the type of component object = body, the value is text；<br/>3）When the type of component object = button and sub_type = url, the value is text；<br/>4)When the type of component object = button and sub_type = quick_reply, the value is payload. | YES      |
| text     | string   | Set the text content of the corresponding parameter. It is required only when type = text. If type is of other types, this parameter is unavailable.                                                                                                                                                                                          | NO       |
| payload  | string   | Set the payload content of the corresponding parameter. The payload object is defined with reference to the video message. It is required only when type = payload. If type is of other types, this parameter is unavailable.                                                                                                                 | NO       |
| image    | Image    | Set the image content of the corresponding parameter. The image object is defined with reference to the image message. It is required only when type = image. If type is of other types, this parameter is unavailable.                                                                                                                       | NO       |
| video    | Video    | Set the video content of the corresponding parameter. The video object is defined with reference to the video message. It is required only when type = video. If type is of other types, this parameter is unavailable.                                                                                                                       | NO       |
| document | Document | Set the document content of the corresponding parameter. The ducument object is defined with reference to the document message. It is required only when type = document. If type is of other types, this parameter is unavailable.                                                                                                           | NO       |

#### Types of Verification Code Messages, Example JSON

```json
{
  "name": "otp_test_02",
  "language": {
    "policy": "deterministic",
    "code": "zh_CN"
  },
  "components": [
    {
      "type": "body",
      "parameters": [
        {
          "type": "text",
          "text": "123456"
        }
      ]
    },
    {
      "type": "button",
      "sub_type": "url",
      "index": "0",
      "parameters": [
        {
          "type": "text",
          "text": "123456"
        }
      ]
    }
  ]
}
```

#### Types of Variable Template Messages, Example JSON

```json
{
  "name": "text_template",
  "language": {
    "code": "en_US",
    "policy": "deterministic"
  },
  "components": [
    {
      "type": "body",
      "parameters": [
        {
          "type": "text",
          "text": "David"
        },
        {
          "type": "text",
          "text": "B520"
        }
      ]
    }
  ]
}
```

#### Types of Quick Reply Template Messages,Example JSON

```json
{
  "name": "xy_button_tempalte",
  "language": {
    "code": "en_US",
    "policy": "deterministic"
  },
  "components": [
    {
      "type": "header",
      "parameters": [
        {
          "type": "text",
          "text": "header"
        }
      ]
    },
    {
      "type": "button",
      "sub_type": "quick_reply",
      "index": "0",
      "parameters": [
        {
          "type": "payload",
          "payload": "text1"
        }
      ]
    },
    {
      "type": "button",
      "sub_type": "quick_reply",
      "index": "1",
      "parameters": [
        {
          "type": "payload",
          "payload": "text2"
        }
      ]
    },
    {
      "type": "button",
      "sub_type": "quick_reply",
      "index": "2",
      "parameters": [
        {
          "type": "payload",
          "payload": "text3"
        }
      ]
    }
  ]
}
```

## Response Parameters

| Name      | Type   | Description                                           |
| --------- | ------ | ----------------------------------------------------- |
| Action    | string | SendMessageResponse                                   |
| RetCode   | int    | 0 for success [Error Codes](./999-Enum.md#error_code) |
| Message   | string | Message                                               |
| RequestId | string | Request Id                                            |
| Data      | object | Return data                                           |

### Data Parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| MessageId | string | Message Id  |

## Response Example

```json
{
  "Action": "SendMessageResponse",
  "Data": {
    "MessageId": "xxx"
  },
  "Message": "",
  "RequestId": "8ea6c8f2-e23f-4816-9a48-243a40d66bfb",
  "RetCode": 0
}
```
