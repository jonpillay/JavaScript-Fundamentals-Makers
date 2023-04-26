const addToBatch = (batch, num) => {
  if (batch.length >= 5) {
    return batch;
  } else {
    return batch.concat(num)
  };
}

console.log(addToBatch([1], 3))
console.log(addToBatch([1,2,3], 12))
console.log(addToBatch([1,5,2,5,1,4], 1000))