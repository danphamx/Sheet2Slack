/* SLACK API ENDPOINTS */
POST_MESSAGE_ENDPOINT = 'https://slack.com/api/chat.postMessage'

/**
 * Sends a Slack Message using the User's Access or Bot Token
 *
 * @param {String} channel_id Channel ID you will send the message to
 * @param {String} message_blob Message content that will be sent
 * @param {Boolean} unfurl_links Whether Slack should unfurl links in your message
 * @param {Boolean} unfurl_media Whether Slack should unfurl media in your message
 * @return {String} the result of the API response
 * @customfunction
 */  
function sendSlackMessage(CHANNEL_ID,MESSAGE_BLOB, BOOLEAN_UNFURL_LINKS, BOOLEAN_UNFURL_MEDIA){
  var API_KEY = getAPIKey();
  var channel = CHANNEL_ID;
  var message = MESSAGE_BLOB;
  var unfurl_links = BOOLEAN_UNFURL_LINKS;
  var unfurl_media = BOOLEAN_UNFURL_MEDIA;
  var payload = {token:API_KEY, channel:channel, text:message, unfurl_links:false, unfurl_media:false  };
  var response = UrlFetchApp.fetch(POST_MESSAGE_ENDPOINT, {method: 'post', payload:payload});
  return response;
}

function showPrompt(){
  //do nothing
}


/**
 * SANDBOX: Loops through the Launchpad Google Sheet and sends 1-many Slack Messages
 */  
function sendLaunchpadSANDBOX(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Launchpad");
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    //Enabled	Test Channel ID	LIVE Channel ID	Message Blob	Unfurl Links?	Unfurl Media?	Status	Link to Message	Last Sent
    var enabled = data[i][0];
    var testChannelId = data[i][1];
    var liveChannelId = data[i][2];
    var messageBlob = data[i][3];
    var unfurlLinksBoolean = data[i][4];
    var unfurlMediaBoolean = data[i][5];
    var status = data[i][6];
    var linkToMsg = data[i][7];
    var lastSent = data[i][8];
    var unusedCol1 = data[i][9];
    var unUsedCol2 = data[i][10];

    /* If enabled = TRUE, then try to send the Message. Make sure you've added the Slack Bot to the channel */
    if (enabled==true){
      Logger.log(enabled);
      Logger.log(testChannelId);
      Logger.log(messageBlob);
      var response = sendSlackMessage(testChannelId,messageBlob,unfurlLinksBoolean,unfurlMediaBoolean);
      Logger.log(response)
    } else {
      //do nothing
    }
  }
}

/**
 * PRODUCTION: Loops through the Launchpad Google Sheet and sends 1-many Slack Messages
 */  
function sendLaunchpadPROD(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Launchpad");
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    var enabled = data[i][0];
    var testChannelId = data[i][1];
    var liveChannelId = data[i][2];
    var messageBlob = data[i][3];
    var unfurlLinksBoolean = data[i][4];
    var unfurlMediaBoolean = data[i][5];
    var status = data[i][6];
    var linkToMsg = data[i][7];
    var lastSent = data[i][8];
    var unusedCol1 = data[i][9];
    var unUsedCol2 = data[i][10];
    
    /* If enabled = TRUE, then try to send the Message. Make sure you've added the Slack Bot to the channel */
    if (enabled==true){
      Logger.log(enabled);
      Logger.log(liveChannelId);
      Logger.log(messageBlob);
      var response = sendSlackMessage(liveChannelId,messageBlob,unfurlLinksBoolean,unfurlMediaBoolean);
      Logger.log(response)
    } else {
      //do nothing
    }
  }
}

/**
 * Initializes the Google Sheet
 *
 */  
function initializeLaunchpad(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  try{
    ss.insertSheet('Launchpad');
  } catch(e) {
    Logger.log("A sheet named Launchpad already exists");
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Launchpad");
  var range = sheet.getRange("Launchpad!A1:I1");

  // Sets the column headers. The size of the two-dimensional array must match the size of the range.
  var values = [
    [ "Enabled","Sandbox Channel ID", "Production Channel ID", "Message Blob", "Unfurl Links?", "Unfurl Media?","Status","Link to Message","Last Sent" ]
  ];

  var range = sheet.getRange("Launchpad!A2:I2");

  // Sets the column headers. The size of the two-dimensional array must match the size of the range.
  var values = [
    [ false,"C1MS21MCJ", "CRHFX0048", "Hello World <@User_ID>", false, false,"","","" ]
  ];


  range.setValues(values);

  // Sets the first column to a width of 200 pixels
  sheet.setColumnWidth(1, 150);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 150);
  sheet.setColumnWidth(4, 150);
  sheet.setColumnWidth(5, 150);
  sheet.setColumnWidth(6, 150);
  sheet.setColumnWidth(7, 150);
  sheet.setColumnWidth(8, 150);

}
