const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const checkLength = (str) => {
  if (str.length < 11) {
    return true
  }
}

const filterLongNumbers = (arr) => {
  return arr.filter(checkLength)
}

const generateMessages = (arr) => {
  return arr.map(name => 'Hi ' + name + '! 50% off our best candies for you today!')
}

const generateDiscountMessages = (arr) => {
  return arr.map(cust => 'Hi ' + cust.name + '! ' + cust.discount + '% off our best candies for you today!')
}

console.log(generateDiscountMessages(namesAndDiscounts))

console.log(generateMessages(names))

console.log(filterLongNumbers(numbers))

console.log(filterLongNumbers(['4763687363', '7867867862']))

/*
> filterLongNumbers(numbers);
[ '1763687364', '4763687363', '7867867862' ]

> filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
[ '4763687363', '7867867862' ]

> filterLongNumbers([])
[ ]
*/