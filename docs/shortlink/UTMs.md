---
sidebar_label: 'What are UTM parameters?'
sidebar_position: 1
---

UTM parameters are bits of information added at the end of a URL that can help you understand the visitors on your site. You've likely seen UTM parameters in your browser, like when you've clicked a link in a newsletter.

There are three in this example — for source, medium, and campaign:

https://www.uspeedo.com?utm_source=facebook&utm_medium=social&utm_campaign=sms

These three tags give you great insights into your site traffic. With analytics tools like Google Analytics, Kissmetrics, Mixpanel, or others, you can say: "These visitors clicked on a link in our social post on Facebook about our sms product."

And then you can go on to see how many of these visitors made a purchase through newsletters vs. other sources, like ads.

Using this information with uSpeedo's analytics, you can get a full view of site visitor interactions, from link clicks in uSpeedo to visitor conversions like purchases or registrations in your website analytics.

# Common UTM parameters
With the right values, each UTM field helps you answer a specific question about your site's visitors. UTMs should be consistent, so using common values for source and medium is best practice. It's also important to know that UTMs are case sensitive, so it's best that all values are in lowercase. 

Common parameters include:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content

## utm_source
Where is the traffic coming from? This is the specific place where people are seeing your link. Are you sharing it in a banner ad, your email signature, a social media post?

Some examples of common source values:

- A social post on Facebook, utm_source=facebook
- An email newsletter, utm_source=newsletter

## utm_medium
How is the link served to your audience? Think of this as the delivery method or communication channel for the link. It is the most general value in your UTMs.

Some examples of common medium values:

- A post on any social platform, like Facebook or Twitter, utm_medium=social
- A link in a cost-per-click ad, utm_medium=cpc
- An email newsletter, utm_medium=email
- A link in an email signature, because it also appears in emails you're sending, is also utm_medium=email
- A banner ad through Google Ads, utm_medium=paidsearch

## utm_campaign
What's the "topic" you're driving people to? This describes what you're promoting. It might be a product you're selling, a blog post topic that will attract people to your site, or an event you're promoting. The possibilities are endless.

If you have campaign values that you might repeat, it's a good idea to include a date to help you report results. For example, if you're promoting a "50%-off sale" in April 2023, you could use utm_campaign=50percent-apr23.

## utm_term
Which keywords were used to attract these visitors? This is mainly used to track search keywords that you pay for in Google Ads campaigns. You can also use to identify other information, like the CTA on the link.

## utm_content
What else do we need to know about this link? This parameter narrows down information about your link, so it can be used in many different ways. The most common is for testing two different versions of an ad, or A/B testing, but others include identifying the type of link (like an image vs. a button), where the link is placed (top of an ad vs. bottom), or specific content in a partner's post.

# Using UTM parameters
Add UTM parameters when you shorten a link in uSpeedo or create a campaign.

Your parameters are attached to the end of your original URL, not to the short link. This gives you a short link that's easy to share while still capturing all of the valuable information that UTMs can provide.

The source, medium, and campaign values are required when using UTM parameters. The others are optional and give you more detail in your reporting.

# Testing your UTMs
To test how your UTMs will appear at the end of your link, try [Google's Campaign URL Builder](https://ga-dev-tools.google/campaign-url-builder/?utm_source=uspeedo&utm_medium=helpcenter&utm_campaign=shortlink).

Experimenting with the URL Builder can help you define a consistent UTM strategy without creating a bunch of links. The UTM strategy is vital to organizing your links and saving you from lots of frustration when you analyze your data.

> **Reminders for using UTMs**
>
> - Source, medium, and campaign are required for using UTMs. The other values help you get more specific about the traffic, but they are optional.
> - Because UTM parameters are case sensitive, it is best practice is to use lowercase letters for all your UTM values.
> - When using UTMs, add them to your long URL before you shorten it.
