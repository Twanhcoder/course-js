//Create Object Part 1
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
// Create Object Part 2

let person2 = new Object();
person2.name2 = "Tuấn Anh";
person2.age2 = 23;
// Cách truy xuất 1
// console.log(myHonda.engine.cylinders);

// Cách truy xuất 2
// console.log(myHonda['engine']['size']);

delete myHonda.wheels;
// console.log(myHonda);

// Create Array Part 1
let arrayPerson = ["Bảo", "Tuấn Anh", "Hùng"];

// Create Array Part2
let arrayPerson2 = new Array();

arrayPerson2[0] = "Bảo";

// console.log(arrayPerson2);

// function Person(name, age, job) {
//   this.name = name
//   this.age = age
//   this.job = job
//   this.instroduce = function () {
//     return `My name is ${this.name}. I am ${this.age} years old. I am a ${this.job}`;
//   }
// }

// function Person(code, symbol, description) {
//   this.name = name
//   this.age = age
//   this.job = job
//   this.instroduce = function () {
//     return `My name is ${this.name}. I am ${this.age} years old. I am a ${this.job}`;
//   }
// }


// call api => Response.map((currentValue, index, array) => {
//   return new Person(currentValue.code, currentValue.symbol, currentValue.description);
// })

// let person = new Person('Bảo', 23, 'Developer')

// console.log(person);

// Person.prototype.greet = function () {
//   console.log('Hello, my name is ' + this.name);
// }

// let person1 = new Person('Tuấn Anh')
// person1.greet()

const week = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"];
const number = 1;

let now = new Date();

switch (number) {
  case 1:
    console.log((number[0] = "thứ 2"));
    break;

  default:
    console.log("Chủ Nhật");
    break;
}

// console.log(typeof now);

// PI
// console.log(Math.round(Math.min(-1,5,8,9,2)));

const abc = 11;

if (abc > 10) {
  console.log("abc lon hon 10");
} else {
  console.log("abc nho hon 10");
}

const ab = abc > 10 ? "abc > 10" : "abc < 10";

const person = {name: "Tuấn Anh", age: 23, job: "Developer"};

for(let key of week){
  console.log(key);
}
// document.getElementById("successAndErrorMessages").innerHTML="someContent"; 

  let element = document.querySelector("#input")
  console.log(element);
  let newElement = document.createElement("p");
  newElement.innerText = "getvalueText";


console.log(newElement);



element.addEventListener('click', function(event) {
  console.log(event);
});

