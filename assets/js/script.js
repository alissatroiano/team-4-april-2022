// Add border to selected option
function selectedCardCSS (value) {
    // find the selected element
    selection = document.getElementById(value)
    // find the parent element containing all the options
    let container = selection.parentElement.parentElement
    // select the cards of the options
    options = container.getElementsByClassName("card")
    // update css
    for (let i = 0; i < options.length; i++){
        if (options[i].id == value) {
            selection.classList.add("card-selected")
        } else {
            options[i].classList.remove("card-selected")
        }
    }
}

// Car size question
let carSize = ""  // define variables to store data

function selectCarSize(value) {
    let carSize = value
    console.log(carSize)
    selectedCardCSS(value)
} 

// Budget question
let budgetSize = ""  // define variables to store data

function selectBudgetSize(value) {
    let budgetSize = value
    console.log(budgetSize)
    selectedCardCSS(value)
} 

// Mileage question
let mileageSize = ""  // define variables to store data

function selectMileageSize(value) {
    let mileageSize = value
    console.log(mileageSize)
    selectedCardCSS(value)
} 

// Search Button Click Function

function searchButtonClick () {
    // add car search function here
    calculateFuelSavings();
}