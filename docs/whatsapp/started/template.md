---
sidebar_label: 'Message templates '
sidebar_position: 4
---

# Message templates

All templates must be approved by WhatsApp before use. You can register templates in the Template section of the web interface.[New template quikly](https://console.uspeedo.com/library/template?type=channel&product=1).
> **notice**: WhatsApp monitors the quality of templates based on end users’ block rate. If WhatsApp determines that the templates are of low quality, WhatsApp may limit the number of users to whom you can send messages and/or remove the templates.

## Formatting errors

Be aware that any incorrect formatting will result in the automatic rejection of message templates, such as simple spelling mistakes. Pay attention to any templates containing parameters. Make sure the right number of curly brackets are present {{1}}.

Template names can only be in lower case alphanumeric form, with underscores for spaces. No other characters are allowed. You cannot have more than four consecutive spaces in content.

Variables must begin the count at {{1}} and indexes cannot be repeated.

## Sensitive content

Do not include content that can be considered to be abusive, threatening, or offensive. Threatening customers with legal action is also not permitted.

You must not threaten to add customers to additional WhatsApp groups under any circumstances.

## Spam and scam content

If Meta detects potential spam or scam content in a template, Meta locks the WhatsApp Business Account for 3 days. During this period, you cannot use your WhatsApp Business Account to create templates or send messages. You can still receive messages.

If the detected scam is verified, Meta disables your WhatsApp Business Account. If the detected scam is not verified, Meta unlocks your WhatsApp Business Account.

If the potential spam or scam content is detected multiple times, Meta deactivates all your existing WhatsApp Business Accounts. You will not be able to create a new account.

## Template clarity

Remain clear about your business and the intention of the message. Not all users may be familiar and may seek clarification as to why they are on a communication list. If this is the case, the reviewer will also seek clarity.

Make sure template names are precise as possible. Template names in the form of IDs will slow down the approval process substantially.

If you need to create a template to reopen the messaging window, it is advised to relate this template to the preceding message thread to maintain clarity.

## Template categories

There are total of four categories which are divided into business-initiated and user-initiated conversations. Business-initiated consists of Utility, Authentication, and Marketing conversations. User-initiated conversations are Service conversations. When business sends the template message, that type of conversation window is opened for 24 hours. In case the business sends different kind of template message within that window, the new 24 hour window is opened and charged according to that category.

### Utility conversations

Use utility conversation templates to inform customer about ongoing transactions, post-purchase notifications, and/or recurring billing statements.

Any template that has a mix of utility and marketing content will be classified and charged as a marketing template.

Examples:

"Your order has shipped! It will be delivered on Friday"

"Reminder: your payment is due on Tuesday"

### Authentication conversations

> Starting 29th of May 2023, newly created authentication templates must include OTP button.
> This feature is not available for business in India until later this year.

Authentication templates are predefined by Meta and can contain following parts:

{verification_code} is your verification code.
Security disclaimer (optional): For your security, do not share this code.
Expiration warning (optional): This code expires in {expiration_time} minutes.
Button: Copy code or one-tap autofill button.
Verification code can have up to 15 characters.

URLs, media, and emojis are not supported in this type of templates.

For one-tap autofill button implementation, check the [requirements](https://developers.facebook.com/docs/whatsapp/business-management-api/authentication-templates#app-signing-key-hash).

### Marketing conversations

Promote offers, informational updates, or invitations for customer to respond.

Any conversation that does not qualify as utility or authentication conversation is marked as marketing conversation.

Examples:

"Hello, welcome to our profile on WhatsApp!"

"Here are this month's coupons - happy shopping!"

"You missed your recent appointment, tap here to rebook."

### Service conversations

Conversations initiated by users, helping them to resolve any inquiry.

### Best practices
To make sure that your templates are of high-quality and align with the criteria from WhatsApp, follow these guidelines:

Template content:
- Use the template as a conversation starter and to get the end user to reply to your message.
- Avoid sending open-ended welcome or introductory messages.
- Specify the purpose of the message.
- Make sure that messages are concise and contain the required information.
- Make sure that the template is not abusive or threatening in nature.
- Select the appropriate message type and language.
- Avoid using the word "survey". Use "feedback" instead.
- Upload samples for media files, placeholders, and call-to-action buttons when you register a message template.
- Avoid adjacent placeholders. Example: {{1}} {{2}}
- Avoid starting or ending the template body with a placeholder or a \n new line character.
- Avoid using emojis or \n new line character in the footer.
- Avoid using emojis, asterisks, formatting markup, or the \n newline character in the header.
- Avoid grammatical or spelling mistakes.
- Avoid identical templates.
- Do not share link URLs that do not include your brand and contain several randomized characters.
- Expected: You can send notifications to new and existing customers only if they opt in. Customers must consent to receive messages over WhatsApp from your business. When customers opt in, you obtain their phone number, and can start sending messages to the customers.
- Relevant:
 - Avoid sending messages that seem vague and irrelevant. Example: Instead of "Here is {{1}}", use "Here is your invoice number {{1}}"
 - Personalize the message to the specific person. Example: Based on recent purchases or recent engagement with your business. Use placeholders. Example: Instead of "Dear customer, here are some offers for you.", use "Dear {{1}}, here are some offers on {{2}} best suited for you"
 - Make the template seem user-triggered. Example: Instead of "Here are products that you can buy", use "Hope you had fun exploring our website. Would you like to check your cart and make changes?"
 - Outline the next steps, if applicable.
- Timely:
 - Send the messages when they are relevant.
 - Avoid sending several messages in a single day.
- Follow guidelines:
 - Review and comply with the [WhatsApp terms of use](https://www.whatsapp.com/legal/business-terms/), [business messaging policy](https://www.whatsapp.com/legal/business-policy/?lang=en), and [commerce policy](https://www.whatsapp.com/legal/commerce-policy). Make sure that the template does not contain any keywords that could indicate a  breach of these policies.
 - Follow the guidelines for the display name.
 - If templates are paused, take remediation steps.
