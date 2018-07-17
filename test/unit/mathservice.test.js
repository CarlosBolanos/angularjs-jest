
require('angular')
require('angular-mocks')
require('../../src/mathservice.js');

describe('Math service - addTwoNumbers', function(){
  var _mathservice;

  beforeEach(() => {
    angular.mock.module('math')
  });

  beforeEach(inject((mathservice) => {
    _mathservice = mathservice;
  }));

  it('1 + 1 should equal 2', function(){
    var actual = _mathservice.addTwoNumbers(1,1);
    expect(actual).toEqual(2);
  });

  it('10 + 5 should equal 15', function(){
    var actual = _mathservice.addTwoNumbers(10,5);
    expect(actual).toEqual(15);
  });

  it('50 + 80 should equal 130', function(){
    var actual = _mathservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });
});
