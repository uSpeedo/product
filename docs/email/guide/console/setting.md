---
sidebar_label: '1 Settings and Configuration'
sidebar_position: 1
---
# Settings and Configuration
## Domain
Click the New Domain button.
![](/img/email/guide_1.png)
Head to the domain creation page and select the appropriate domain type. Next, provide the desired second-level domain and the tracking domain prefix. Finally, click the submit button to finalize the process.

The sending domain name is the "ID card" when sending e-mail. Each account must have a sending domain name.
- Create domain when using, you need to specify its "type" (trigger / batch), "sending domain " and "tracking options"
- Type :Domain for trigger type can only send trigger mai l, API_USER can only send bulk mail. trigger: Used to send emails triggered by specific events in different scenarios, such as registration activation, password retrieval, site notifications, information confirmation, and bill delivery. batch: Used to send bulk notification emails to members, informing them about new features, discounts, and more.
- Tracking options: after selection, when use this sending domain sends a message, we can help you collect the corresponding tracking information of the receiver.

**The principle of tracking implementation**

- Click: the system will replace the original email link with the link of tracking domain name with parameters. When the user clicks the link in the email, because the CNAME tracking the domain name configuration is track.sendcloud.org, the server will receive a request to count the clicks, and then jump to the original link.
- Open: the system will insert a transparent picture of 1 pixel into the email. When an e-mail is opened, the MP client and web page will automatically download the pictures in the e-mail, and the sendcloud server will receive a request for statistics.
- Unsubscribe: the system will insert an HTML code with unsubscribe link at the bottom of the email, or change the`%%user_defined_unsubscribe_link%%` variable is replaced with the unsubscribe link. When the unsubscribe link is clicked, the corresponding unsubscribe page will be displayed. The user selects the unsubscribe reason on the unsubscribe page. After submitting the form, sendcloud collects the message for processing.

**Tracking switch**

The switch and setting can be adjusted according to the situation.

It is recommended to keep subscription tracking on so that users can unsubscribe when they don't want to continue receiving e-mail, instead of reporting to MP.

If the DNS configuration of the tracking domain name you use does not maintain the CNAME configuration, the link in the email may not be able to click jump after the click tracking service is turned on.

Tips:
For domain in an unverified or failed status, editing operations are supported, while deletion operations are not. However, if a domain was previously verified but is currently in a failed status, editing operations cannot be performed. Please log in to your Domain Name System (DNS) hosting platform to check the configuration.

Note: 
uSpeedo mandates that recipient addresses are obtained from member registration, and the content of the emails should solely focus on the user's active subscription, without any advertising or marketing elements.
![](/img/email/NewDomain.png)

Click the config button to enter the domain resolution verification page. As shown in the figure, fill in the configuration information of the five parameters in turn on the domain resolution page of your domain management platform.
![](/img/email/guide_3.png)

Check the resolution configuration in your domain management platform against the data provided by the console.
![](/img/email/guide_4.png)

After confirming that it is correct, click the Verify Configuration button on the console page. Once you see the status change to Passed, complete domain verification. If you encounter problems, you can contact the corresponding business manager.
![](/img/email/domain_configuration.png)
![](/img/email/guide_6.png)

## Sender
Click the New Sender button.
![](/img/email/guide_7.png)
Enter the sender creation page, fill in the email address and nickname corresponding to the domain name, and submit. Complete the sender addition.
![](/img/email/guide_8.png)


