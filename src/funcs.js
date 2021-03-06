function addNewRow(rowData) {
  
  const currentDate = new Date();
  // wsID has to be defined as a script property whit the ID of the datasource spreadsheet
  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("wsID"));
  const ws = ss.getSheetByName("Results");

  ws.appendRow([
    rowData.category, 
    rowData.item, 
    rowData.itemType,
    rowData.qty, 
    currentDate, 
    new Date(rowData.dateReceived),
    rowData.deliveryNote,
    rowData.comments,
    rowData.arrival,
    rowData.issueInputs
  ]);

  return true;
  
}

function getDropDownArray(){

  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("wsID"));
  const ws = ss.getSheetByName("Dropdown Options");
  return ws.getRange(2, 1, ws.getLastRow()-1, 3).getValues();

}

function getQtyOnHand(category, itemName, itemType){
  
  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("wsID"));
  const ws = ss.getSheetByName("Inventory");
  const data = ws.getRange(2, 1, ws.getLastRow()-1, 4).getValues();

  const filteredData = data.filter(r => r[0] === category && r[1] === itemName && r[2] === itemType);

  return filteredData.length === 0 ? 0 : filteredData.reduce((subtotal, r) => subtotal + r[3], 0);

}
