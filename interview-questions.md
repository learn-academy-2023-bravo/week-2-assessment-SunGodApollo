# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: a parameter is something that we give a function so that it takes that parameter, and inputs it into the function with the user's input. An argument is whatever the user decides to input into said function, the argument is then passed into the function in place of the parameter. for example, a function that has an array parameter, can take a variable as an argument. The variable the user makes is can be an array that they decide to make. The argument is then passed as the parameter.

Researched answer: parameters are named variables passed into functions. Parameters are used to import arguments into the functions. Function parameters are names that are listed in the definition of a function. Function arguments are then the actual values passed into the function. 
Source: https://developer.mozilla.org/en-US/docs/Glossary/Parameter





2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: Javascript built in method is a function. It can be used inside of other functions. Since the .map method is a function, it can take parameters. The parameters it can take are, value, index, and array. The only parameter that is required is value, because we must pass in a value argument in order for the function .map to do its thing. The optional parameters are index and array. 

Researched answer: the .map method is a callback function. It is a copying method that can also mutate arrays. It requires a return since it is a function.
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map





3. What is the difference between map and filter?

Your answer: .map takes an array and outputs a new array of the same length with the actions performed on what the user specified. For example, if someone uses a .map filter on an array listing out random numbers, a user can use .map method to output a new array with the original array values, multiplied by three. The .map method will then output a new array that multiplies every number in the original array by three. Filter, on the other hand, puts out an array of based on the requirements provided by the user. It iterates over the original array, and checks for a certain condition; if the condidion is met, it returns said value and puts it into a new array. .map does things to the original array that the user wants, .filter filters out the original array based on the requirements the user inputs.

Researched answer: .map returns an array with pieces of information from the original array that the users wishes to pass in. This array will be the same as the original array. .filter returns a subset of the original array based on the criteria that the user specifies. It then decides if the array meets the criteria, and outputs the indexes which do in a new subset array.
Source: https://thinkster.io/tutorials/100-front-end-interview-questions-challenge/map-vs-filter-vs-reduce




1. What is iteration?

Your answer: Iteration is the act of iterating over something. That is, looping over something, until the certain condition is met. If the condition is not met, the function or method will continue to iterate over the thing until the condition is met. Iteration can be used with different methods; the most common method is a for loop. If one wishes to use higher order functions, one can use .map or .filter. However, .map and .filter can only iterate over arrays. A for loop can iterate over strings.

Researched answer: An iterator is an object which defines a sequence; something that is specified by the user. It then returns a value based off what the user specified.
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators




1. What is the difference between a function and a method?

Your answer: A function is a machine. That is, a function can perform a certain action, and can be used as many times as the user wishes to. A function is dynamic; this means it can take different inputs from a user, and then put these methods into use and perform the actions that the function specifies. A method can be a function, such as .map or .filter. However, methods can only be applied to certain data. a .slice() method can only be used with strings, whereas a .filter method can only be used on arrays. 

Researched answer: Fucntions can execute a set of instructions on specific data or variables, and then return a result based on those instructions. Functions can be used repeatedly and eliminate the need for a developer to have to type the same code over and over again. A method is very similar to a function, however, a method must be used with another piece of data or a variable, and a function does not.
Source: https://www.codecademy.com/article/fwd-js-methods-functions




6. STRETCH: What is hoisting in JavaScript?

Your answer: I read about hoisting in JavaScript when I was doing the Codecademy tutorials before the beginning of our cohort, however, I cannot recall exactly what it was. I remember that hoisting something is bad practice, because it is basically hard coding data.

Researched answer: Hoisting is doing something before it is defined. For example, one can call for a function, and then under the function invocation, one then types out said function. This is not recommended because it is unusual and can throw errors. If one decides to console.log a variable, and then declares said variable, it will log undefined into the console.
Source: https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: A component is used with React. Components are independent and reusable bits of code. They are similar to functions, however, components will return HTML, whereas functions can only be used with JavaScript. Components are also used with Pascal Case, as opposed to javascript's usual camelCasing. When one is creating a component, one will declare it with a capital letter. The component can then be used to return HTML for an application that the user is creating.
Source: https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.

2. Spread operator: A spread operator is also used with React. It is used to copy all of an existing array or object into another array or object.

3. React state: state is a built in react object. It is used to contain data or information about a component. If the user wishes, a state can be changed over time.

4. React props: prop is short for property or properties. It is a type of object where the attributes of a tag are stored. In react, data can be passed through from one component to another using props. This is similar to arguments with functions.

5. DOM events: DOM stand for Document Object Model. It is the thing that allows thing to perform certain actions. For example, a user can make an html file perform certain JavaScript when a user clicks on a button. This is a DOM event.
