describe("FizzBuzz", function() {

  var fizzbuzz = new FizzBuzz()

  it("returns 'fizz' when passed 3", function() {
    expect(fizzbuzz.DivisibleByThree(3)).toBe('fizz');
  });

  it("returns 'fizz' when passed 6", function () {
      expect(fizzbuzz.DivisibleByThree(6)).toBe('fizz');
  });

  it("returns 'buzz' when passed 5", function () {
      expect(fizzbuzz.DivisibleByFive(5)).toBe('buzz');
  });

  it("returns 'fizzbuzz' when passed 15", function () {
    expect(fizzbuzz.DivisibleByFifteen(15)).toBe('fizzbuzz');
  });
});
