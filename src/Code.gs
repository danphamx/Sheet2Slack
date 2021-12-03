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
function sendSlackMessage(channel_id,message_blob, unfurl_links, unfurl_media){
  var channel = CHANNEL_ID;
  var ACCESS_TOKEN = API_KEY;
  var message = MESSAGE_BLOB;
  var unfurl_media = BOOLEAN_UNFURL_MEDIA;
  var payload = {token:ACCESS_TOKEN, channel:channel, text:message, unfurl_links:false, unfurl_media:false  };
  var response = UrlFetchApp.fetch(POST_MESSAGE_ENDPOINT, {method: 'post', payload:payload});
  return response;
}


/**
 * SANDBOX: Loops through the Launchpad Google Sheet and sends 1-many Slack Messages
 */  
function sendLaunchpadSANDBOX(){
  
}

/**
 * PRODUCTION: Loops through the Launchpad Google Sheet and sends 1-many Slack Messages
 */  
function sendLaunchpadPROD(){
  
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



/*
Custom functions don't have a concept of required and optional fields, but you can emulate that behavior using logic like this:

function foo(arg1, opt_arg2) {
  if (arg1 == null) {
    throw 'arg1 required';
  }
  return 'foo';
}
*/
