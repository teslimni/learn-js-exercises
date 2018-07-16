const dump = log => console.log(log)

const emptyObj = {}
dump(emptyObj)
const objWithProp = {
  prop1: 'First',
  prop2: 'Second',
  prop3: 'Third',
  'No Dot': 'Does not support the dot notation',
  sing: function () {
    dump('I am singing')
  },
  argue: function (log) {
    dump(log)
  }
}
dump(objWithProp.prop1)
dump(objWithProp['No Dot'])
objWithProp.newProp = 'The new Property'
objWithProp.sing()
objWithProp.argue('I have an argument')

// if/else statements exercise
const James = 22
const valerie = 25
const kenneth = 27
const myAge = 34

if (myAge < James) {
  dump(' I am younger than James')
} else if (myAge > valerie) {
  dump('I am older than Valerie')
} else if (myAge === kenneth) {
  dump('I am as old as Kenneth')
} else {
  dump('I am older than James, Valerie and Kenneth')
}

const someValue = []
if (someValue) {
  dump('someValue is true, so if statement runs')
} else {
  dump('someValue is false, so else statement runs')
}

/**
 * Questions is: Would if statement above run if:
 * someValue is false? No
 * someValue is true? Yes
 * someValue is null? No
 * someValue is undefined? No
 * someValue is 0? No
 * someValue is -1? Yes
 * someValue is ''? No
 * someValue is {}? Yes
 * someValue is {isHavingFun: true}? Yes
 * someValue is []? Yes
 * someValue is ['one', 'two', 'three']? Yes
 */

// NOT Operator exercise
// What values would you get from these expressions?
/**
 * 1. !2550284 // False
 * 2. !true //false
 * 3. !NaN // true
 * 4. !{} // false
 * 5. !!'Pandas are adorable' // true
 * 6. !!'' // false
 */

dump(!!'')

// Selecting elements
const items = document.querySelector('#star-wars-characters')
dump(items)

// Practising variable declaration

const name = 'Teslim Adeyemo'
let study = 'Javacript'
console.log(`${name} is learning ${study}`)

// ===========================================================

// Practising declaring function
function logger (log) {
  console.log(log)
}
logger('Alhamdullilah, Teslim is a JS student')

function add (x, y) {
  return x + y
}
logger(add(2, 9))

function multiply (x, y) {
  return x * y
}
logger(multiply(25, 25))

// Arrow function Practice

const ten = () => {
  return 10
}
const tenWithUnderscores = _ => {
  return 10
}
logger(ten())
logger(tenWithUnderscores())

const logging = log => console.log(log)

logging('Zell is my mentor')

const loggingbracket = (log) => console.log(log)
loggingbracket('Zell is really good')

const adding = (x, y) => {
  return x + y
}

logging(adding(7, 9))

const addingNum = (x, y) => x + y
loggingbracket(addingNum(10, 5))

const multiplied = (x, y) => x * y
logging(multiplied(2, 3))

const multiplier = (x, y) => {
  return x * y
}
loggingbracket(multiplier(3, 4))

// Practising element selection
const ul = document.querySelector('ul')
const starWarsCharacters = document.querySelector('#star-wars-characters')
const hero = ul.querySelector('[data-type="hero"]')
const master = ul.querySelector('[data-type="master"]')
const villain = ul.querySelector('[data-type="villain"]')
const firstCharacter = ul.querySelector('li')

logger(ul)
logger(starWarsCharacters)
logger(firstCharacter)
logger(hero)
logger(master)
logger(villain)
