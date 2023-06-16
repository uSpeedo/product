---
sidebar_label: 'Billing'
sidebar_position: 5
---

# Billing

WhatsApp is using a conversation-based pricing model. Businesses are charged per conversation, which includes all messages delivered in a 24-hour session. 

## Conversation Categories

Conversations are categorized with one of the following categories:

- Marketing — Marketing conversations include promotions or offers, informational updates, or invitations for customers to respond or take action.
- Utility — Utility conversations facilitate a specific, agreed-upon request or transaction, or update a customer about an ongoing transaction. These may include transaction confirmations, transaction updates, and/or post-purchase notifications.
- Authentication — Authentication conversations enable you to authenticate users with one-time passcodes, potentially at multiple steps in the login process (e.g., account verification, account recovery, integrity challenges).
- Service — Service conversations help you resolve customer inquiries.

Marketing, utility, and authentication conversations can only be opened with template messages. Service messages can only be opened with free-form messages. See Opening Conversations below.

To learn more about conversation categories and how to choose an appropriate category when creating your templates, see [Template Categorization](docs/whatsapp/started/template).

## Opening Conversations

Conversations are opened when you send a template message or free-form message under the following conditions.

### Marketing, Utility, and Authentication Conversations

Marketing, utility, and authentication conversations are opened when you send an approved marketing, utility, or authentication template message to a customer and no open conversation with that category exists between you and that customer.

For example, if an open authentication conversation exists between you and a customer and you send them another authentication template message within 24 hours, a new conversation is not opened. If you send them a marketing message, however, a new marketing conversation is opened, resulting in two open conversations.

### Service Conversations

Service conversations are opened when you are within a customer service window, you send a free-form message to a customer, and no open conversation of any category exists between you and the customer.

For example, if an open conversation of any category exists between you and a customer and you send them a free-form message within 24 hours, no new conversation is opened. However, if no open conversation exists and the customer messages you (which starts a customer service window) and you reply within 24 hours with a free-form message, a new service conversation is opened.

## Customer Service Windows

When a customer messages you, a 24 hour timer called a customer service window starts. If you are within the window, you can send free-form messages or template messages. If you are outside the window, you can only send template messages.

## Conversation Duration

Marketing, utility, authentication, and service conversations last 24 hours unless closed by a newly opened free-entry point conversation.

Free-entry point conversations last 72 hours.

## Multiple Conversations

It is possible to have multiple open conversations between you and a customer. This can happen in the following situations:

- An open marketing, utility, or authentication conversation exists between you and a customer and you send them a template message of a different category within 24 hours.
- An open service conversation exists between you and a customer and you send them a template message within 24 hours.
See Conversation Examples below.

## Free Entry Point Conversations

A free entry point conversation is opened if (1) a customer using a device running Android or iOS messages you via a Click to WhatsApp Ad or Facebook Page Call-to-Action button and (2) you respond within 24 hours. If you do not respond within 24 hours, a free entry point conversation is not opened and you must use a template to message the customer, which opens a marketing, utility, or authentication conversation, per the category of the template.

The free entry point conversation is opened as soon as your message is delivered and lasts 72 hours. When a free entry point conversation is opened, it automatically closes all other open conversations between you and the customer, and no new conversations will be opened until the free entry point conversation expires.

Once the free entry point conversation is opened, you can send any type of message to the customer without incurring additional charges. However, you can only send free-form messages if there is an open customer service window between you and the customer.

For example, if the customer messages you via a Click to WhatsApp Ad at 10am and you respond via a template message at 10pm the same day:

- The free-entry point conversation starts at 10pm and lasts 72 hours.
- You can send template messages at no charge in those 72 hours.
- You can send free-form messages until 10am the next day, at which point the customer service window closes, as it is independent of the free entry point conversation (if the customer messages you again, however, it opens another 24 hour customer service window in which you can send free form messages).

## Conversation Examples

Only one conversation opened with a customer:

- No open conversation exists between you and a customer and you send multiple utility template messages to the customer within 24 hours.
- An open conversation of any category exists between you and a customer and you send multiple free-form messages to the customer within 24 hours.

Multiple conversations opened with a customer:

- An open marketing conversation exists between you and a customer and you send them a utility template message within 24 hours. This results in a marketing conversation and a utility conversation.
- An open service conversation exists between you and a customer and you send them a utility template message within 24 hours. This results in a service conversation and a utility conversation.

## Pricing

Prices vary based on conversation category and country/region. You can view the [pricing](docs/price/whatsapp.md).
