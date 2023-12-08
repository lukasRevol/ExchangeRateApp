//VARIABLES - html elements
const convertBtn = document.querySelector('.btn')
const outputText = document.querySelector('.exchange-text')

const firstInput = document.querySelector('.first-currency .number')
const secondInput = document.querySelector('.second-currency .number')

const firstSelect = document.querySelector('.first-currency .currency')
const secondSelect = document.querySelector('.second-currency .currency')

//VARIABLES - converted courency and money amount
let firstCourency
let secondCourency 
let amount

//VARIABLES - API URL
const API = 'http://api.exchangerate.host/convert'
const API_KEY = '?access_key=d95bbece4ca7dc0b2498dc9a3370a3e3'
let convertURL

//VARIABLES - final API URL to fetch
let URL

//VARIABLES - storage for fetch output
let converted = 0

//===========================================================

//FUNCTION - clear inputs
const clearInputs = () => {
    firstInput.value = 0
    secondInput.value = 0
}

const readInputs = () => {
    amount = parseFloat(firstInput.value)
    firstCourency = firstSelect.value
    secondCourency = secondSelect.value
}

const showResult = () => {
    outputText.textContent = converted
}

//FUNCTION - fetching api url
const fetchURL = () => {
    convertURL = `&from=${firstCourency}&to=${secondCourency}&amount=${amount}`
    URL = API + API_KEY + convertURL;
    fetch(URL)
    .then(res => res.json())
        .then(data => {
            converted = data.result
        })
}

//MAIN FUNCTION
const main = () => {
    readInputs();
    fetchURL();
    showResult();
    // clearInputs();
}

//===========================================================

//EVENT LISTENER
convertBtn.addEventListener('click', main)