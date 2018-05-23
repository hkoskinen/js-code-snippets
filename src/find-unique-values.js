function newArrayWithoutDuplicates(array) {
  return [...new Set(array)];
}

const values = ['hello', 'world', 54, 544, 5, 76, 5, 'world', -123, -1, 1,
  true, false, false, 54.432, 666, 54.432, 'hell'];

console.log(newArrayWithoutDuplicates(values));
