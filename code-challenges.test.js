// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree", () => {
    it("decides if the number inside the object is divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divisibleByThree(object1.number)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2.number)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3.number)).toEqual("-7 is not divisible by three")
     
    })
})

// FAIL  ./code-challenges.test.js
// divisibleByThree
// ✕ decides if the number inside the object is divisible by three or not (1 ms)

// ● divisibleByThree › decides if the number inside the object is divisible by three or not

// ReferenceError: divisibleByThree is not defined


// b) Create the function that makes the test pass.
// PSEUDOCODE
    /* 
        -input: an object
        -output: a string with interpolated object stating whether the object content is divisible by 3 or not
        -process: will need conditional to check if object is divisible by 3 or not
                    return string with interpolated object.
    */

const divisibleByThree = (object) => {
    if(object % 3 === 0) {
        return `${object} is divisible by three`
    } else {
        return `${object} is not divisible by three`
    }
}

// PASS  ./code-challenges.test.js
// divisibleByThree
//   ✓ decides if the number inside the object is divisible by three or not (2 ms)








// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayOfWordsCapitalized", () => {
    it("takes in an array of words and returns an array with words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(arrayOfWordsCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrayOfWordsCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// FAIL  ./code-challenges.test.js
// divisibleByThree
//   ✓ decides if the number inside the object is divisible by three or not (4 ms)
// arrayOfWordsCapitalized
//   ✕ takes in an array of words and returns an array with words capitalized (1 ms)

// ● arrayOfWordsCapitalized › takes in an array of words and returns an array with words capitalized

//   ReferenceError: arrayOfWordsCapitalized is not defined

// b) Create the function that makes the test pass.
// PSEUDOCODE:
/* 
    -create function called arrayOfWordsCapitalized
    -input: array
    -process: need to use map method to return a new array with words capitalized.
                use charAt to access first value of array, then use toUpperCase to capitalize the first character.
                use .slice method to only access the rest of the word, starting at index 1, which is the second letter.
                use .toLowerCase to de-capitalize the rest of the word
                return capitalized first letter and concat it with the rest of the word.
    -output: new array with the same length and words capitalized

*/
const arrayOfWordsCapitalized = (array) => {
    return array.map((value) => {
        let capitalizedFirstLetter = value.charAt(0).toUpperCase()
        let restOfWord = value.slice(1).toLowerCase()
        return capitalizedFirstLetter + restOfWord
    })
}

// PASS  ./code-challenges.test.js
// divisibleByThree
//   ✓ decides if the number inside the object is divisible by three or not (4 ms)
// arrayOfWordsCapitalized
//   ✓ takes in an array of words and returns an array with words capitalized (1 ms)





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)

    })
})

// FAIL  ./code-challenges.test.js
// divisibleByThree
//   ✓ decides if the number inside the object is divisible by three or not (2 ms)
// arrayOfWordsCapitalized
//   ✓ takes in an array of words and returns an array with words capitalized (1 ms)
// firstVowel
//   ✕ takes in a string and logs the index of the first vowel (1 ms)

// ● firstVowel › takes in a string and logs the index of the first vowel

//   ReferenceError: firstVowel is not defined


// b) Create the function that makes the test pass.
// PSEUDOCODE
/* 
    -create a function called firstVowel
    -input: a string
    -process: create a conditional statement that will check for vowels and will return index of the first vowel 
                use equality operator to determine if the index is equal to a vowel
             We also have to create a for loop since we will be using it over string. .map or .filter cannot be used since we are not dealing with an array.
    output: index of the first vowel
*/
const firstVowel = (string) => {
    for(let index = 0; index < string.length; index++) {
        if(string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u") {
            return index
        } 
    }
}

// PASS  ./code-challenges.test.js
// divisibleByThree
//   ✓ decides if the number inside the object is divisible by three or not (65 ms)
// arrayOfWordsCapitalized
//   ✓ takes in an array of words and returns an array with words capitalized
// firstVowel
//   ✓ takes in a string and logs the index of the first vowel (14 ms)
