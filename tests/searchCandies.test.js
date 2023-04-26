const searchCandies = require('../phase2_challenges/searchCandies');

describe('searchCandies', () => {
  it ('return the correct candies', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  })
});