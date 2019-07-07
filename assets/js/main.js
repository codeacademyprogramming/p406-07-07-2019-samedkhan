//Loop. 
// 1-den 100-e qeder console.log() et.

// 6 > ela
// 5 < x <= 6  yaxshi
// x < 5 - kafi

// const students = [{
//     name: 'John Doe',
//     score: 8.5,
//   },
//   {
//     name: 'Doe John',
//     score: 5.5,
//   },
//   {
//     name: 'Margot Mc',
//     score: 4.2,
//   }
// ];

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   let studentLog = `${student.name} `;

//   if (student.score > 6) {
//     studentLog += 'Ela!';
//   } else if (student.score > 5 && student.score <= 6) {
//     studentLog += 'Yaxshi!';
//   } else {
//     studentLog += 'Kafi :(';
//   }

//   console.log(studentLog);
// }

//Verilen array elementlerinden en kicik olanini tapin. (min.)
// const numbers = [-1, 3, '2', 9, 0, 12, true, '-4', 'test', {}];

// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (
//     typeof numbers[i] === 'number' ||
//     typeof numbers[i] === 'string' ||
//     typeof numbers[i] === "boolean"
//   ) {
//     if (!isNaN(numbers[i])) {
//       if (numbers[i] < min) {
//         min = numbers[i];
//       }
//     }
//   }
// }

// console.log(min);

// let number = 0;

// while (number < 10) {
//   number++;
// }

// console.log(number);

const numbers = [{}, 0, '1', '-12', 123, false, 32, 487];
// const i = 0;
// while (i < numbers.length) {
//   if (typeof numbers[i] === 'object') {
//     console.log(i);
//     break;
//   }
// }

// const person = {
//   name: 'John',
//   surname: 'Doe',
//   age: 21,
// }

// for (const key in numbers) {
//   console.log('Iterated key: ', key);
//   console.log(numbers[key]);
// }

// for(let item of numbers){
//     console.log(item);
// }

//Functions.
// function sumNumbers(a, b) { // a=5, b=10
//   a + b; // 5+10
// }

// const concatStrings = function(str1, str2) {
//   return str1 + str2;
// }

// const getUserList = (a, b) => (a + b);

// console.log(sumNumbers(5, 10))
// console.log(concatStrings('Test', 'Example'));
// console.log(getUserList());

// const persons = [{
//     name: 'Example 1',
//     surname: 'Surname Example 1',
//     marriageStatus: function() {
//       return 'Evlidir';
//     }
//   },
//   {
//     name: 'Example 2',
//     surname: 'Surname Example 2',
//     isMarried: false,
//   },
//   {
//     name: 'Example 3',
//     surname: 'Surname Example 3',
//     isMarried: true,
//   },
//   {
//     name: 'Example 4',
//     surname: 'Surname Example 4',
//     isMarried: true,
//   },
//   {
//     name: 'Example 5',
//     surname: 'Surname Example 6',
//     isMarried: false,
//   },
// ];
// persons[0].marriageStatus();

// checkMarriageStatuses(persons);

// function checkMarriageStatuses(persons) {
//   for (let i in persons) {
//     const married = isMarried(persons[i]);
//     console.log(`${persons[i].name} ${persons[i].surname}`);
//     console.log(`Marriage status: ${married}`);
//   }
// }

// function isMarried(person) {
//   return person.isMarried ? 'Evlidir' : 'Subaydir';
// }

// function Student(fullname, university) {
//   this.fullname = fullname;
//   this.university = university;
// }

// const students = ['John', 'Alis', 'Daniel'];

// for (const studentName of students) {
//   console.log(new Student(studentName, 'BDU'));
// }

// function Cat(name, citizenship) {
//   this.name = name;
//   this.citizenship = citizenship;

//   this.trigger = function() {
//     if (this.citizenship === 'US') {
//       console.log(`Meoww! I am ${this.name}`);
//     } else {
//       console.log(`Meoww! Mənim adım ${this.name}-dır`);
//     }
//   }
// }

// const garfield = new Cat('Garfield', 'US');
// const mestan = new Cat('Mestan', 'AZ'); 

// garfield.trigger(400);
// mestan.trigger();

function Car(name, model, color, speed, engine) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.speed = speed;
  this.engine = engine;

  this.getDistanceDuration = function(distance) {
    return distance / this.speed;
  }

  this.gasolineUsage = function(distance) {
    return (distance / 100) * this.gasolineUsagePer100();
  }

  this.gasolineUsagePer100 = function() {
    return 100 / this.engine;
  }
}

const cars = [
  new Car('BMW', 'M5', 'gray', 200, 4),
  new Car('Lexus', 'LX570', 'blue', 240, 5.7),
  new Car('Mercedes', 'AMG', 'red', 320, 5.5),
];

const distance = 750;

for (let car of cars) {
  console.log(`${car.name} ${car.model}`);
  console.log(`Gasoline usage: ${car.gasolineUsage(distance)}`);
  console.log(`Total duration: ${car.getDistanceDuration(distance)}`);
  console.log(' ');
}
