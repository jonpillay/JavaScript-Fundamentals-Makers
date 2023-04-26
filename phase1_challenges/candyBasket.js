class Candy {

  constructor(name, price) {
    this.name = name
    this.price = price
  }

  getName() {
    return this.name
  }

  getPrice() {
    return this.price
  }
}

class ShoppingBasket {

  constructor() {
    this.basket = []
  }

  addItem(item) {
    this.basket.push(item)
  }

  getTotalPrice() {
    let total = 0
    this.basket.forEach(item => total += item.getPrice())
    return total
  }
}

module.exports = { Candy, ShoppingBasket };