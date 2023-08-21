function ConvertHandler() {

  //const regex = /^\d+(\.\d+)?(\/\d+)?(\.\d+)?$/
  
  this.getNum = function(input) {
    input = input.toString().toLowerCase();
    if(input[0]=='.')
      input = '0' + input;
    if(input[input.length] == '.')
      input = input + '0';
    if((/^[a-z]/.test(input)))
      input = '1' + input;

    if(/^\d+(\.\d+)?(\/\d+)?(\.\d+)?\D*$/.test(input)) {
      if(/[a-z]/.test(input)) {
        input = input.slice(0, input.search(/[a-z]/));
      }
      const func = new Function(`return ${input};`);
      return func();
    }
    return 'invalid number';
  };
  
  this.getUnit = function(input) {
    input = input.toLowerCase();
    let unit = input.split('').filter(c => /[a-z]/.test(c)).join('');
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];

    if(unit.length > 0) {
      if(units.includes(unit)) {
        if(unit=='l')
          return 'L';
        return unit;
      }
    }
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    if(initUnit == 'gal') return 'L';
    if(initUnit == 'L') return 'gal';
    if(initUnit == 'lbs') return 'kg';
    if(initUnit == 'kg') return 'lbs';
    if(initUnit == 'mi') return 'km';
    if(initUnit == 'km') return 'mi';
  };

  this.spellOutUnit = function(unit) {
    if(unit == 'gal') return 'gallons';
    if(unit == 'L' || unit == 'l') return 'liters';
    if(unit == 'lbs') return 'pounds';
    if(unit == 'kg') return 'kilograms';
    if(unit == 'mi') return 'miles';
    if(unit == 'km') return 'kilometers';
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    initUnit = initUnit.toLowerCase();

    if(initUnit == 'gal') return parseFloat((initNum * galToL).toFixed(5));
    if(initUnit == 'l') return parseFloat((initNum / galToL).toFixed(5));
    if(initUnit == 'lbs') return parseFloat((initNum * lbsToKg).toFixed(5));
    if(initUnit == 'kg') return parseFloat((initNum / lbsToKg).toFixed(5));
    if(initUnit == 'mi') return parseFloat((initNum * miToKm).toFixed(5));
    if(initUnit == 'km') return parseFloat((initNum / miToKm).toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
