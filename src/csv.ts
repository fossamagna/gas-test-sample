function getFirstSheet(id: string) {
  const ss = SpreadsheetApp.openById(id);
  return ss.getSheets()[0];
}

function toCSV(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
  // This represents ALL the data
  const range = sheet.getDataRange();
  const values = range.getValues();

  // This logs the spreadsheet in CSV format with a trailing comma
  const rows = [];
  for (var i = 0; i < values.length; i++) {
    const columns = [];
    for (let j = 0; j < values[i].length; j++) {
      columns.push(values[i][j] || '');
    }
    rows.push(columns.join(','));
  }
  return rows.join('\n');
}

export default function(id: string) {
  const sheet = getFirstSheet(id);
  return toCSV(sheet);
}
