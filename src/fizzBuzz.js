function FizzBuzz(){};

  FizzBuzz.prototype.DivisibleByThree = function(number) {
    if (number % 3 === 0) {
    return 'fizz';
    }
  };

  FizzBuzz.prototype.DivisibleByFive = function(number) {
    if (number % 5 === 0) {
    return 'buzz';
    }
  };

  FizzBuzz.prototype.DivisibleByFifteen = function(number) {
    if (number % 15 === 0) {
      return 'fizzbuzz';
    }
  };
