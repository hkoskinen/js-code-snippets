
function sortArrayAsc(array) {
  return [...array].sort((x, y) => x - y);
}

function sortArrayDesc(array) {
  return [...array].sort((x, y) => y - x);
}

const numbers = [-123, 5, 453, 654, 76, 3, 234 ,76, 54.342, -42, -0, 1234, 0,
  Infinity, -534, 234, 76.5, 43.2,123];

console.log('Original', numbers);
console.log('Ascending', sortArrayAsc(numbers));
console.log('Descending', sortArrayDesc(numbers));
console.log('Original', numbers);
