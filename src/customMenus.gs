function onOpen(){
  ui.createMenu('🪄 Sheet2Slack')
    .addItem('🧪 Send Slack Messages (Test Version)', 'sendLaunchpadSANDBOX')
    .addItem('🚀 Send Slack Messages (Live Version)', 'sendLaunchpadPROD')
    .addItem('🏃 Initalize', 'showPrompt')
    .addItem('🔑 Set API key', 'setKey')
    .addItem('🗑️ Delete API key', 'resetKey')
    .addItem('🗑️ Delete all credentials', 'deleteAll')
    .addItem('🙋 Get Support', 'showSidebar')
  .addToUi();
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
