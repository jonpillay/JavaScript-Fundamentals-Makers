const {ShoppingBasket} = require('../phase1_challenges/candyBasket');

describe('Shopping Basket', () => {
  it ('creates, fills and returns the proper total price', () => {
    const doubleCandy = { getName: () => 'Skittle', getPrice: () => 3.99 };
    const doubleChock = { getName: () => 'Mars', getPrice: () => 4.99 };
    let basket = new ShoppingBasket();
    basket.addItem(doubleChock);
    basket.addItem(doubleCandy);
    basket.addItem(doubleCandy);
    expect(basket.getTotalPrice()).toEqual(12.97)
  })
});