# Sheet2Slack
Send 1-many Slack messages from your Google Sheets

## Spreadsheet Template (Make A Copy)

https://docs.google.com/spreadsheets/d/1FsL_ai3QvzRNAzESgE1Pn_xutRJgaLQdtD8vZlBf1K0/edit#gid=0

## Step 1: Setup Steps for Sheet2Slack Users/Devs

In order to use Sheet2Slack, you need to create a Slack App and a a copy of the [template spreadsheet](https://docs.google.com/spreadsheets/d/1FsL_ai3QvzRNAzESgE1Pn_xutRJgaLQdtD8vZlBf1K0/edit#gid=0) which will work together to send messages into Slack.

1. Create a Slack App at https://api.slack.com
2. Give your Slack App permission to join and post to Slack Channels
3. Give your Slack App an Icon and a Name
4. Request that your Slack App be installed on the workspace you want it to run on 
> If you are not a Slack Admin, **see Step 2: Setup Steps for Slack Admins**
5. Make a copy of the Spreadsheet Template.
> 💡 Security Tip: Make sure you only share the spreadsheet with users who need access to the data (e.g. Lock down your spreadsheet's sharing permissions)
6. Add your API Key to the Spreadsheet Template.
> The first time you run a Spreadsheet script, Google will ask if youi want to give this Spreadsheet App permission to talk to third-party services (Slack) when requested
7. Customize the "Message Blob" and Channels for your use-case
8. Give your Spreadsheet App permission to talk to third-party services (Slack)

## Step 2: Setup Steps for Slack Admins

In order for your App Developers to be able to build apps that communicate with users, you need to add your Developer's Slack Bot to your Workspace and give it permission to access data about your workspace.

1. Add your developer to the Workspace
2. The developer will request adding their Slack App to the Workspace
> Be sure to review what permissions you are granting to the App before approving it. You can advise on other ways to access the data requested if you feel more comfortable that way.
3. Approve their Slack App from https://api.slack.com/apps
4. If new permissions are requested, then you will need to re-approve any new App Permissions (App Scopes) every time they add new scopes

## Have an Issue?

This is a new way of working, so it's understandable to get stuck along the way!

If you happen to find issues, [please submit a new Issue in our github repo](https://github.com/danphamx/Sheet2Slack/issues).

Yes, We're real people :) 

