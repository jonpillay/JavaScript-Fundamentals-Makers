const fizzbuzz = require('../phase1_challenges/fizzbuzz');

describe('fizzbuzz', () => {
  it ('return fizz, buzz, or fizzbuzz correctly', () => {
    expect(fizzbuzz(3)).toBe("Fizz")
    expect(fizzbuzz(5)).toBe("Buzz")
    expect(fizzbuzz(15)).toBe("FizzBuzz")
    expect(fizzbuzz(2)).toEqual(2)
  })
});