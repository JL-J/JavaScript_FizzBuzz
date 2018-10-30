describe("FizzBuzz", function() {

  var fizzbuzz = new FizzBuzz()

  it("returns 'fizz' when passed 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe('fizz');
  });

  it("returns 'fizz' when passed 6", function () {
      expect(fizzbuzz.isDivisibleByThree(6)).toBe('fizz');
  });

  it("returns 'buzz' when passed 5", function () {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });
});
