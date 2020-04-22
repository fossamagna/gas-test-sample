import assert from 'assert';
import csv from '../src/csv';

suite('csv', function() {
  test('create CSV data from first sheet of spread.', () => {
    const id = '1iT0mv5Iw1QOB4i8hyT2hNJW0Y2kcfQd5Ce9dGn8cz24';
    const result = csv(id);
    assert.equal(result, 'column1,column2,column3\nvalue1_1,value1_2,value1_3\nvalue2_1,value2_2,value2_3');
  });
});
