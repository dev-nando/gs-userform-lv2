function loadForm() {
  
  const htmlForSidebar = HtmlService.createTemplateFromFile("uform");
  const htmlOutput = htmlForSidebar.evaluate();
  
  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(htmlOutput); 

}

function createMenu(){

  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu("My Forms");
  menu.addItem("Show Userform", "loadForm");
  menu.addToUi();

}

function onOpen(){

  createMenu();
  
}