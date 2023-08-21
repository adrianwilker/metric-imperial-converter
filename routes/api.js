'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function (req, res) {
    let response = '';
    let initNum = convertHandler.getNum(req.query.input);
    let initUnit = convertHandler.getUnit(req.query.input);
    let returnNum, returnUnit, string;
    if(initNum == 'invalid number' && initUnit == 'invalid unit') {
        res.send('invalid number and unit');
      } else if(initNum == 'invalid number') {
        res.send('invalid number');
      } else if(initUnit == 'invalid unit') {
        res.send('invalid unit');
      } else {
        returnNum = convertHandler.convert(initNum, initUnit);
        returnUnit = convertHandler.getReturnUnit(initUnit);
        string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.send({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: string
        });
      }
  });

};
