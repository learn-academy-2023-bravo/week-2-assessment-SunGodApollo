// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
console.log(cohort.split(""))

// a) Your answer: the .split method takes a string and turns it into an array. It will take all the letters inside of the string and put them into their own index each. 
// b) Verify and explain: I was correct. Since we said .split(""), it took each character and put it into its own index inside an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: The code will not return anything because the function provided the cardinal rule of functions; which is to always include a return. In this case, since we are not telling the function to return the string, it will not output anything
// b) Verify and explain: This was correct. The console logged undefined. This is because since we did not tell it to return anything, it recognizes it as undefined.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: it will not return anything because it's missing a return
// b) Verify and explain: it returned a new array with the numbers inside of the array multiplied by 2. I see it does not need a return because it is not a function.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: It will return a new array with only the odd numbers that the array contains
// b) Verify and explain: I was correct. It returned a new array with only the odd numbers of the array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: It will log JavaScript
// b) Verify and explain: I was correct. It logged JavaScript because the console.log statement told it to access the languages key by using . notation. Then it accessed the first value because we told it to access the 0th index of the array value, which is JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It will log George Bravo 2023
// b) Verify and explain: I was sort of right, however, it did not log a string because there is no method telling the class to construct a string. The word new simply creates a new object, because classes are blueprints for objects. We told it to input "George" for name, and the default values for the other keys. Therefore, it constructed a new object Learn { student: 'George', cohort: 'Bravo', year: 2023 }