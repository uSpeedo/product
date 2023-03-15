---
sidebar_label: 'API Signature'
sidebar_position: 1
---

# Generating API Signature

## 1. Preparation

> When generating a signature for an API request, you need to provide the AccessKeyId and AccessKeySecret, which can be obtained from the console account. The specific method of obtaining them is as follows

### 1). Log in to the [uSpeedo](https://console.uspeedo.com)

If you don't have an account, you need to [register](https://console.uspeedo.com/signin) first.

### 2). Obtain the AccessKeyId and AccessKeySecret

Enter then [Dashboard](https://console.uspeedo.com) page，as shown below

![Key](/img/sdk/key.png)

Click the GENERATE button in the above figure to generate the AccessKeyId and AccessKeySecret.

Here, let's assume that the obtained keys are:

```js
AccessKeyId := ""
AccessKeySecret := ""
```

### 3). Obtain the API to be called，[API documentation](https://docs.uspeedo.com)

Let's take the [Apply SMS Template API](http://uspeedo.page.ucloudadmin.com/api-doc/USMS/%E6%8E%A7%E5%88%B6%E5%8F%B0API/CreateUSMSTemplate.html) as an example.

```json
{
    "Action": "CreateUSMSTemplate",
    "AccountId": 10000,
    "TemplateName": "this is a test template",
    "Template": "test template",
    "Purpose": 1,
}
```

## 2. Constructing the signature.

The first step in generating a signature is to place all parameters and their values in a map and sort them in ascending order by key value. Then concatenate all parameters into a signature string. Finally, use SHA1 to sign the signature string. If the API requires a file upload request such as an image/video, the file stream is not included in the signature. You need to convert the file into a stream format and request it in that format.

### 1). Sort the request parameters in ascending order by name

> Obtain the request body of the request and sort it in ascending order by ASCII code of the first character of each key (in alphabetical order). If there are identical characters, sort them by ASCII code of the second character of each key, and so on.

```json
{
    "AccountId": 10000,
    "Action": "CreateUSMSTemplate",
    "Purpose": 1,
    "Template": "test template",
    "TemplateName": "this is a test template",
}
```

### 2). Constructing the signature parameter string.

The construction rule for the signature string is: The signature string is constructed by concatenating all request parameters (without HTTP escape). The private key of the API key is appended to the end of this signature string.（AccessKeySecret）。

```
AccountId60000051ActionCreateUSMSTemplateInternationaltruePurpose1Templatethis is a test templateTemplateNametest templateYmZmYWJiZTItZmFlNC00MWMwLTk4MzUtOWM5NjZhZjhhODJm
```

Note:

- For bool type, it should be encoded as true/false.
- For floating-point type, if the decimal part is 0, only the integer part should be kept. For example, 42.0 should be kept as 42.
- For floating-point type, scientific notation cannot be used.

## 3. Generating the Signature Value

Use SHA1 to encode the signature parameter string and generate the request signature.