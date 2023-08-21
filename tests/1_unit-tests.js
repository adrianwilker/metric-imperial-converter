const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('whole number input', function() {
    assert.equal(convertHandler.getNum(1), 1);
    assert.equal(convertHandler.getNum(10), 10);
    assert.equal(convertHandler.getNum(55), 55);
    assert.equal(convertHandler.getNum(999), 999);
    assert.equal(convertHandler.getNum(10000), 10000);
  });
  test('decimal number input', function() {
    assert.equal(convertHandler.getNum(1.5), 1.5);
    assert.equal(convertHandler.getNum(10.98), 10.98);
    assert.equal(convertHandler.getNum(55.73), 55.73);
    assert.equal(convertHandler.getNum(999.302), 999.302);
    assert.equal(convertHandler.getNum(10000.1), 10000.1);
  });
  test('fractional input', function() {
    assert.equal(convertHandler.getNum(1/2), 0.5);
    assert.approximately(convertHandler.getNum(4/3), 1.333, 0.1);
    assert.equal(convertHandler.getNum(6/3), 2);
    assert.equal(convertHandler.getNum(9/8), 1.125);
    assert.equal(convertHandler.getNum(95/10), 9.5);
  });
  test('fractional input with a decimal', function() {
    assert.equal(convertHandler.getNum(6.8/2), 3.4);
    assert.equal(convertHandler.getNum(10/2.5), 4);
    assert.approximately(convertHandler.getNum(86.22/2.2), 39.1909, 0.0001);
    assert.approximately(convertHandler.getNum(25.25/5.55), 4.5495, 0.0001);
    assert.equal(convertHandler.getNum(1.5/1.5), 1);
  });
  test('double-fraction', function() {
    assert.equal(convertHandler.getNum('3/2/3'), 'invalid number');
    assert.equal(convertHandler.getNum('4.3/2.7/3.3'), 'invalid number');
    assert.equal(convertHandler.getNum('10/2.1/3.4'), 'invalid number');
    assert.equal(convertHandler.getNum('7.9/5/0.1'), 'invalid number');
    assert.equal(convertHandler.getNum('5.5/9.4/2'), 'invalid number');
  });
  test('default numerical input 1', function() {
    assert.equal(convertHandler.getNum('gal'), 1);
    assert.equal(convertHandler.getNum('l'), 1);
    assert.equal(convertHandler.getNum('mi'), 1);
    assert.equal(convertHandler.getNum('km'), 1);
    assert.equal(convertHandler.getNum('lbs'), 1);
    assert.equal(convertHandler.getNum('kg'), 1);
  });
  test('read each valid input unit', function() {
    assert.equal(convertHandler.getUnit('gal'), 'gal');
    assert.equal(convertHandler.getUnit('l'), 'L');
    assert.equal(convertHandler.getUnit('L'), 'L');
    assert.equal(convertHandler.getUnit('mi'), 'mi');
    assert.equal(convertHandler.getUnit('km'), 'km');
    assert.equal(convertHandler.getUnit('Km'), 'km');
    assert.equal(convertHandler.getUnit('lbs'), 'lbs');
    assert.equal(convertHandler.getUnit('kg'), 'kg');
  });
  test('invalid input unit', function() {
    assert.equal(convertHandler.getUnit('abc'), 'invalid unit');
    assert.equal(convertHandler.getUnit('kms'), 'invalid unit');
    assert.equal(convertHandler.getUnit('sl'), 'invalid unit');
    assert.equal(convertHandler.getUnit('lbSs'), 'invalid unit');
    assert.equal(convertHandler.getUnit('gl'), 'invalid unit');
  });
  test('return unit for each valid input unit', function() {
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });
  test('spelled-out string unit', function() {
    assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
    assert.equal(convertHandler.spellOutUnit('l'), 'liters');
    assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
    assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
    assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
  });
  test('Convert gal to L', function() {
    assert.equal(convertHandler.convert(67, 'gal'), 253.62247);
    assert.equal(convertHandler.convert(3.14159, 'gal'), 11.89221);
    assert.equal(convertHandler.convert(42, 'gal'), 158.98722);
    assert.equal(convertHandler.convert(1/5, 'gal'), 0.75708);
    assert.equal(convertHandler.convert(7/4.8, 'gal'), 5.52039);
  });
  test('Convert L to gal', function() {
    assert.equal(convertHandler.convert(4/5, 'l'), 0.21134);
    assert.equal(convertHandler.convert(2.71828, 'l'), 0.71809);
    assert.equal(convertHandler.convert(87, 'l'), 22.98298);
    assert.equal(convertHandler.convert(3/4, 'l'), 0.19813);
    assert.equal(convertHandler.convert(3.14/4.1, 'l'), 0.20232);
  });
  test('Convert mi to km', function() {
    assert.equal(convertHandler.convert(3.1, 'mi'), 4.98895);
    assert.equal(convertHandler.convert(123, 'mi'), 197.94882);
    assert.equal(convertHandler.convert(6.28318, 'mi'), 10.11177);
    assert.equal(convertHandler.convert(5/8, 'mi'), 1.00584);
    assert.equal(convertHandler.convert(3.1/1.9, 'mi'), 2.62577);
  });
  test('Convert km to mi', function() {
    assert.equal(convertHandler.convert(60, 'km'), 37.28236);
    assert.equal(convertHandler.convert(7.66, 'km'), 4.75972);
    assert.equal(convertHandler.convert(18/7, 'km'), 1.59782);
    assert.equal(convertHandler.convert(67.11, 'km'), 41.70032);
    assert.equal(convertHandler.convert(6.66/2.3, 'km'), 1.79928);
    
  });
  test('Convert lbs to kg', function() {
    assert.equal(convertHandler.convert(3000, 'lbs'), 1360.77600);
    assert.equal(convertHandler.convert(17/2, 'lbs'), 3.85553);
    assert.equal(convertHandler.convert(15.498, 'lbs'), 7.02977);
    assert.equal(convertHandler.convert(8.1/3.3, 'lbs'), 1.11336);
    assert.equal(convertHandler.convert(954, 'lbs'), 432.72677);
  });
  test('Convert kg to lbs', function() {
    assert.equal(convertHandler.convert(85.72, 'kg'), 188.98041);
    assert.equal(convertHandler.convert(81, 'kg'), 178.57458);
    assert.equal(convertHandler.convert(91/33, 'kg'), 6.07942);
    assert.equal(convertHandler.convert(8.75/41.3, 'kg'), 0.46708);
    assert.equal(convertHandler.convert(88.264, 'kg'), 194.58897);
  });
});