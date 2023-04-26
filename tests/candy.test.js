const {Candy} = require('../phase1_challenges/candyBasket');

describe('Candy', () => {
  it ('creates and returns the proper information for Candy object', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars')
    expect(candy.getPrice()).toEqual(4.99)
  })
});