function addNewRow(rowData) {
  
  const currentDate = new Date();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Results");

  ws.appendRow([rowData.item, rowData.qty, currentDate]);

  return true;
  
}

function getDropDownArray(){

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Dropdown Options");
  return ws.getRange(2, 2, ws.getLastRow()-1, 1).getValues();

}