describe("FizzBuzz", function() {

  var fizzbuzz = new FizzBuzz()

  it("returns 'true' when passed 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });

  it("returns 'false' when passed 7", function() {
    expect(fizzbuzz.isDivisibleByThree(7)).toBe(false);
  });

  it("returns 'true' when passed 6", function () {
      expect(fizzbuzz.isDivisibleByThree(6)).toBe(true);
  });

  it("returns 'true' when passed 5", function () {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

  it("returns 'false' when passed 8", function () {
      expect(fizzbuzz.isDivisibleByFive(8)).toBe(false);
  });

  it("returns 'true' when passed 15", function () {
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
  });

  it("returns 'false' when passed 20", function () {
    expect(fizzbuzz.isDivisibleByFifteen(20)).toBe(false);
  });

  it("returns fizz when passed 3", function () {
    expect(fizzbuzz.fizzBuzz(3)).toBe('fizz');
  });

  it("returns 4 when passed 4", function () {
    expect(fizzbuzz.fizzBuzz(4)).toBe(4);
  });

  it("returns fizzbuzz when passed 30", function () {
    expect(fizzbuzz.fizzBuzz(30)).toBe('fizzbuzz');
  });

});
