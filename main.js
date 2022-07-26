// do while loop that console.logs 1-100
let result = '';
let i = 0;

do {
  i++;
  console.log(i);

} while (i < 100);
console.log(result);

// create an object called person

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// create a function that logs out the keys of the object using Object.keys()
// Object.keys(person);
// console.log(person);
const userObj = (person) => {
  keys = Object.keys(person);
  console.log(keys);
  keys.forEach((person) => {
  // console.log(person);
  });
};
userObj(person);

// create a function that logs out the keys and values of the object using Object.entries().
const entryObj = (person) => {
  entry = Object.entries(person);
  // console.log(entry);
  entry.forEach((person) => {
    console.log(person);
  });
};
entryObj(person);


// Create an arrayOfPersons that contains multiple "people" objects.
const arrayOfPersons = [
  {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
  },
  {
  firstName: "Steve",
  lastName: "Zahn",
  birthDate: "Oct 27, 1854",
  gender: "male"
  },
  {
  firstName: "Monkey",
  lastName: "Luffy",
  birthDate: "Nov 29, 2001",
  gender: "male"
  }
];
console.log(arrayOfPersons);

// Create for...of function that uses and an if statement to console.log the value associated 
// with the key birthDate of each object if the birth year is an odd number.
for (const birth of arrayOfPersons) {
  let birthDate = birth.birthDate.slice(-4);
    if (birthDate % 2 === 1){
    console.log(birthDate)
      // console.log(person.firstName);
  }
}

// .map() array
const names = arrayOfPersons.map((person) => person.firstName);
console.log(names);
const last = arrayOfPersons.map((person) => person.lastName);
console.log(last);
const birth = arrayOfPersons.map((person) => person.birthDate);
console.log(birth);
const gender = arrayOfPersons.map((person) => person.gender);
console.log(gender);
// .map() array with multiple results in new array
const minifiedRecords = arrayOfPersons.map((person) => ({firstName: person.firstName, birthDate: person.birthDate}));
console.log(minifiedRecords);

// .filter() persons array and console.log only males
const malePerson = arrayOfPersons.filter(
  (person) => person.gender === 'male'
);
console.log(malePerson);

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
const bDayBefore1990 = arrayOfPersons.filter(person => {
  return person.birthDate.slice(-4) < 199;
});
console.log(bDayBefore1990 < 1990);
// ^^^this is returning true but I know I did it wrong^^^


// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const bDayBeforeJan = arrayOfPersons.filter(person => {
  return person.birthDate.slice(-4) < 1990;
});
console.log(bDayBeforeJan);