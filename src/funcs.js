function addNewRow(rowData) {
  
  const currentDate = new Date();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Results");

  ws.appendRow([
    rowData.category, 
    rowData.item, 
    rowData.qty, 
    currentDate, 
    new Date(rowData.dateReceived),
    rowData.deliveryNote,
    rowData.comments
  ]);

  return true;
  
}

function getDropDownArray(){

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Dropdown Options");
  return ws.getRange(2, 1, ws.getLastRow()-1, 2).getValues();

}