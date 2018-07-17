module.exports = angular.module('math', [])
  .service('mathservice', function(){

    this.addTwoNumbers = (x, y) => {
      return x + y;
    };

    this.multiplyTwoNumbers = (x, y) => {
      return x * y;
    };

  });
