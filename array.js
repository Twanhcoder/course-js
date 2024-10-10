// Array Interation

// - `forEach` 3,4
// - `map` 5
// - `filter` 4
// - `reduce`2
// - `some`2
// - `every`2
// - `find` 4
// - `findIndex`2

// 1. forEach

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(var i = 1; i <= numbers.length; i++){
//   console.log(i);
// }

// numbers.forEach((currentValue,index, array) => {
//   console.log(currentValue,index, array);

// })

// 2. map

let newNumber = 30;

let arrayNew = numbers.map(function (currentValue, index, array) {
  return currentValue * 2;
});

console.log([...arrayNew, newNumber]);

// 3. filter

let arrayFilter = numbers.filter(function (currentValue, index, array) {
  return currentValue > 5;
});

console.log(arrayFilter);

// 4. reduce

let arrayReduce = numbers.reduce(function (
  accumulator,
  currentValue,
  index,
  array
) {
  return accumulator + currentValue;
});

console.log(arrayReduce);

// 5. some

let arraySome = numbers.some(function (currentValue, index, array) {
  return currentValue > 11;
});

console.log(arraySome);

// 6. every

let arrayEvery = numbers.every(function (currentValue, index, array) {
  return currentValue > 1;
});

console.log(arrayEvery);

// 7. find
const id =1
const arrayObject = [
  { name: "string 1", value: 1, other: "that" },
  { name: "string 2", value: 2, other: "that" },
];
let arrayFind = arrayObject.find((currentValue, index, array) => {
 return currentValue.value === id;
});

console.log(arrayFind);



// 8. findIndex

let firstEvenIndex = numbers.findIndex((currentValue, index, array) => {
  return currentValue % 2 === 0;
})

console.log(firstEvenIndex);
