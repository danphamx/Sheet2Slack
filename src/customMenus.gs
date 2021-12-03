var ui = SpreadsheetApp.getUi();
var userProperties = PropertiesService.getUserProperties();

const API_KEY = 'api.key';

function onOpen(){
  ui.createMenu('🪄 Sheet2Slack')
    .addItem('🧪 Send Slack Messages (Sandbox)', 'sendLaunchpadSANDBOX')
    .addItem('🚀 Send Slack Messages (Production)', 'sendLaunchpadPROD')
    .addItem('🏃 Initalize', 'showPrompt')
    .addItem('🔑 Set API key', 'setKey')
    .addItem('🗑️ Delete API key', 'resetKey')
    .addItem('🗑️ Delete all credentials', 'deleteAll')
    .addItem('🙋 Get Support', 'showSidebar')
  .addToUi();
}

function setKey(){
  var scriptValue = ui.prompt('Please provide your API key.' , ui.ButtonSet.OK);
  userProperties.setProperty(API_KEY, scriptValue.getResponseText());
}

function resetKey(){
  userProperties.deleteProperty(API_KEY);
}

function deleteAll(){
  userProperties.deleteAllProperties();
}

/**
 * Creates a Sidebar and loads Page.html
 */  
function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setTitle('Sheet2Slack Support');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}


function showPrompt() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.prompt(
      'Let\'s get to know each other!',
      'Please enter your name:',
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Your name is ' + text + '.');
  } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert('I didn\'t get your name.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog.');
  }
}
