// Google Apps Script - Deploy as Web App
// 1. Go to https://script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Deploy > New deployment > Web app
// 5. Execute as: Me, Who has access: Anyone
// 6. Copy the URL and replace SHEETS_URL in index.html

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Get existing headers or create new ones
  let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  if (headers.length === 0) {
    headers = ['timestamp', 'name', 'phone', 'email', 'serviceType', 'propertyType', 'description'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  
  // Parse form data
  const data = JSON.parse(e.postData.contents);
  const row = [
    new Date(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.serviceType || '',
    data.propertyType || '',
    data.description || ''
  ];
  
  // Append row
  sheet.appendRow(row);
  
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
