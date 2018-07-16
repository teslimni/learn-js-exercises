// Practising variable declaration

const name = 'Teslim Adeyemo'
let study = 'Javacript'
console.log(`${name} is learning ${study}`)

// ===========================================================

// Practising declaring function
function logger(log) {
    console.log(log)
}
logger('Alhamdullilah, Teslim is a JS student');

function add(x, y) {
    return x + y
}
logger(add(2, 9))

function multiply(x, y) {
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

logging('Zell is my mentor');

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

