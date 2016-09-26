var assert = require('assert');
var csv = require('../src/csv');

suite('csv test', function() {
  test('csv', function() {
    var id = '1iT0mv5Iw1QOB4i8hyT2hNJW0Y2kcfQd5Ce9dGn8cz24';
    var result = csv(id);
    assert.equal(result, 'column1,column2,column3\nvalue1_1,value1_2,value1_3\nvalue2_1,value2_2,value2_3');
  });
});
