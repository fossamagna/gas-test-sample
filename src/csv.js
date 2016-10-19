function getFirstSheet(id) {
  var ss = SpreadsheetApp.openById(id);
  return ss.getSheets()[0];
}

function toCSV(sheet) {
  // This represents ALL the data
  var range = sheet.getDataRange();
  var values = range.getValues();

  // This logs the spreadsheet in CSV format with a trailing comma
  var rows = [];
  for (var i = 0; i < values.length; i++) {
    var columns = [];
    for (var j = 0; j < values[i].length; j++) {
      columns.push(values[i][j] || '');
    }
    rows.push(columns.join(','));
  }
  return rows.join('\n');
}

module.exports = function(id) {
  var sheet = getFirstSheet(id);
  return toCSV(sheet);
}
