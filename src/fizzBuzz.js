function FizzBuzz(){};

  FizzBuzz.prototype.isDivisibleByThree = function(number) {
    if (number % 3 === 0) {
    return 'fizz';
    }
  };