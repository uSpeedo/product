---
sidebar_label: 'Embedded signup'
sidebar_position: 2
---

# Embedded signup
Embedded signup enables you to register a sender for the WhatsApp Business API from the uSpeedo website. You can then use the API to send WhatsApp messages.

## Important information

- Phone Number used for existing WhatsApp account: To use a phone number that is already registered in the Android, iPhone, or Business Application versions of WhatsApp, you must delete the WhatsApp account associated with that phone number to use it for a business account.
- Organizations with Government Affiliation: If your organization has a government affiliation, you need additional approval from WhatsApp. Contact us for guidance.

## Prerequisites

- Facebook account
- Administrator access to your Facebook business account. Alternatively, you can create a Facebook business account during the embedded signup process.
- Keep the following information ready:
1. Legal company name
2. Business phone number
3. Business website
4. Business email address of your representative
5. Country
6. Corporate street address
7. City
8. State/province/region
9. Sender display name.
10. Business category
11. Business description
12. Phone number to register as a sender. This number must not be connected to any WhatsApp Account (private or WhatsApp Business API). 
13. Access to this number to receive an SMS or a Voice call for verification

## Embedded signup process
Complete each of the following sections sequentially.

### Log in to your Facebook account
1. Log in to the [uSpeedo console](https://console.uspeedo.com/whatsapp/overview)
In the Overview, click **Create WhatsApp business account**, and log in to your named Facebook account.

![image](https://github.com/uSpeedo/product/assets/116861648/9c213c5a-ee4f-4f2e-bad1-6d410ed0979a)

### Create Facebook and WhatsApp Business accounts
You can either choose an existing Facebook business account on which you have administrator permissions or create a new Facebook business account.

To create a new Facebook business account, follow these steps:

1. Enter the following information:
- Legal business name
- Business phone number
- Business website
- Business email address
- Country
- Corporate address
- City
- State/province/region

2. Click Continue.

### Create a WhatsApp Business profile

1. Enter the business display name.
>  The visibility of the display name depends on the sender location:
>  Senders in Indonesia, Mexico, or Columbia: Your display name is visible to the end user.
>  Senders in other regions: If you have a verified sender, your display name is visible to the end user. If you have either an approved sender or an approved sender with limited access, the end user can view your display name only in the contact information section of WhatsApp.
2. If your business display name is different from your legal company name, select that option.
3. Choose a business category from the list.
4. Enter a description for your business. You can edit the description at any time, including after sender verification.
5. Click Continue.

### Submit sender (Phone number) for verification

1. Enter the phone number that you want to use as your WhatsApp business number.
2. Choose one of the following verification methods:
- SMS
- Voice call
3. Click Send Code. You will receive a six-digit verification code through the selected option.
4. (Optional) If you do not receive the code in a few minutes, click **Try again**.
5. Enter the verification code.
6. Click Verify.
7. Click OK.
Your request is submitted to WhatsApp for review.

When you complete the embedded signup, you can submit a request for Business Verification, which is an optional process. You can submit this request without waiting for WhatsApp approval to be complete. If you complete business verification, you can add additional senders and begin messaging immediately on these senders. You can have up to 250 conversations per day on each of these additional senders. After the display name review is complete, this limit automatically increases to 1,000 conversations.

## (Optional) Submit business verification
To become either an approved sender or a verified sender, you must go through business verification. Skip this step if you want to become an approved sender with limited access or if your business has already been verified by WhatsApp.

Business verification is a way for you to demonstrate to WhatsApp that your business is legitimate. Obtaining business verification offers the following features:

- Register more than two phone numbers
- Send templated messages to more than 50 customers daily

You can submit a request for business verification at any time. But we recommends that you submit the request after you complete the embedded signup.

### Business verification process

Complete the verification steps in [Facebook Business Manager](https://business.facebook.com/).

WhatsApp reviews your request and approves it if it is compliant with their policies. You will receive a notification in Facebook Business Manager.

## Receive WhatsApp approval
To obtain access to the WhatsApp Business API, you must meet WhatsApp's requirements. WhatsApp will verify the account and display name, and verify whether your business is compliant with their [Business Policy](https://www.whatsapp.com/legal/business-policy/) and [Commerce Policy](https://www.whatsapp.com/legal/commerce-policy/). If your business is compliant, WhatsApp will approve your business account for use.

### Display name rejection
You can check the status of the display name approval in [Facebook Business Manager](https://business.facebook.com/). For a rejected display name, you can also view the reason for rejection. If your display name is rejected, contact us and provide a new name that follows the guidelines. 

## (Optional) Request Official Account (Verified Sender)
Skip this section if you do not want to become a verified sender.

Verified senders get a verified badge next to their company name in WhatsApp. Being a verified sender gives customers confidence in your brand by letting them know that Meta has made sure that your company is legitimate.

The sender verification process for verified senders is an additional level of WhatsApp approval. It is different from the standard WhatsApp approval.

### Prerequisites
You must get your business verified by Meta.

### Request process
To become a verified sender, you must have an official WhatsApp business account. To request an official account, do one of the following:

- If you registered your sender through our embedded signup process, [request an official account](https://developers.facebook.com/docs/whatsapp/overview/business-accounts#official-business-account) through WhatsApp Account Manager. 
- If you did not register through the embedded signup process, contact us.
