# Sheet2Slack
Send 1-many Slack messages from your Google Sheets

## Spreadsheet Template (Make A Copy)

https://docs.google.com/spreadsheets/d/1FsL_ai3QvzRNAzESgE1Pn_xutRJgaLQdtD8vZlBf1K0/edit#gid=0

## Step 1: Setup Steps for Developer

In order to use Sheet2Slack, you need to create a Slack App and a Spreadsheet App which will work together to send messages into Slack

1. Create a Slack App at api.slack.com
2. Give your Slack App permission to join and post to Slack Channels
3. Request that your Slack App be installed on the workspace you want it to run on (If you are not a Slack Admin, **see Step 2: Setup Steps for Slack Admins**)
4. Add your API Key to the Spreadsheet Template
5. Customize the "Message Blob" and Channels 
6. Give your Spreadsheet App permission to talk to third-party services (Slack)

## Step 2: Setup Steps for Slack Admins

In order for your App Developers to be able to build apps that comminicate with users, you need to add your Developer's Slack Bot to your Workspace and give it permission to access data about your workspace.

1. Add your developer to the Workspace
2. Approve their Slack App from https://api.slack.com/apps
3. Approve any App Permissions (App Scopes) required of the App before it can be installed on your Workspace.
4. Be sure to review what permissions you are granting to the App

## Have an Issue?

This is a new way of working, so it's understandable to get stuck along the way!

If you happen to find issues, [please submit a new Issue in our github repo](https://github.com/danphamx/Sheet2Slack/issues).

Yes, We're real people :) 

