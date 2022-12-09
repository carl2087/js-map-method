  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums =[1, 2, 3, 4, 5];
let results = [];
  for (let num of nums) {
    results.push(num * 2);
  }
console.log(results)

// Using map()
const multByTwo = function (num) {
  return num * 2
};

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const mapResults2 = nums.map(function (num) {return num * 2});
console.log(mapResults2)


// Simplfied w/ map() + arrow function
const mapResults3 = nums.map(num => num *2);
console.log(mapResults3)


// With objects:
const students1 = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students1.map(student => [student.name, student.id]);
console.log(studentsWithIds)

// Map challenge

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

// single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = students.map(itm => [itm.name, itm.results]);
console.log(John);
console.log(Rest);

console.log('\n');
// Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john, ...rest] = students.map(mapper);
console.log(john);
console.log(rest);
