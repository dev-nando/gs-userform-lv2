function addNewRow(rowData) {
  
  const currentDate = new Date();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Results");

  ws.appendRow([rowData.item, rowData.qty, currentDate]);
  
}