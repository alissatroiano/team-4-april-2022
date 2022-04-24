// Add border to selected option
function selectedCardCSS (value) {
    // find the selected element
    let selection = document.getElementById(value);
    // find the parent element containing all the options
    let container = selection.parentElement.parentElement;
    // select the cards of the options
    options = container.getElementsByClassName("card");
    // update css
    for (let i = 0; i < options.length; i++){
        if (options[i].id == value) {
            selection.classList.add("card-selected");
        } else {
            options[i].classList.remove("card-selected");
        }
    }
}

// Car questions
var carSizeInput = null;
var budgetInput = null;

// functions to set local variables on click
function setOptionVariable(value) {
    if (value.substring(0,2) == "Q1") {
        carSizeInput = value;
    } else if (value.substring(0,2) == "Q2") {
        budgetInput = value;
    }
    selectedCardCSS(value);
}

function selectMileageSize(value) {
    let mileageSize = value;
    console.log(mileageSize);
    selectedCardCSS(value);
}

function searchButtonClick () {

}