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

// Car Search  ---------------------------------------------------- //

// Global Variables
var carSizeInput = null;
var budgetInput = null;

// function to set local variables on click
function setOptionVariable(value) {
    if (value.substring(0,2) == "Q1") {
        carSizeInput = value;
    } else if (value.substring(0,2) == "Q2") {
        budgetInput = value;
    }
    selectedCardCSS(value);
}

// function to display the car search results
function displaySearchResults(resultsList) {
    // find the display element and clear it
    display = document.getElementById("searchResultsDisplay")
    display.innerHTML = ""
    // check if list contains any cars
    if (resultsList.length > 0) {
        if (resultsList.length >= 2) {
            // more than 2 results in the list, shuffle the list and take the first 2 results
            if (resultsList.length > 2){
                resultsList = resultsList.sort(() => Math.random() - 0.5)
                var resultsList = resultsList.slice(0,2)
            }
        }
        // for all the items in the results, display thier info on screen
        for (const car of resultsList) {
            display.innerHTML += `
            <div class="card car-display-card">
                <div class="card-header">
                    <h5 class="card-title">${car['MANUFACTURER']} - ${car['MODEL']}</h5>
                </div>
                <div class="card-body py-5">
                    <img src="${car['img']}" alt="Image of a ${car['MANUFACTURER']} ${car['MODEL']}">
                    <h5>Specification</h5>
                    <p class="mb-0">Engine Power - ${car['ENGINE POWER']}</p>
                    <p class="mb-0">Battery Capacity - ${car['BATTERY CAPACITY']}</p>
                    <p class="mb-0">Miles Per Kilo Watt Hour - ${car['m/kWh']}</p>
                    <p class="mb-0">Price - $${car['PRICE']}</p>
                </div>
            </div>
            `
        }
    } else {  // error message display
        display.innerHTML = `
            <div class="row">
                <div class="col-12 text-center">
                    <h3>Ooops! There aren't any results to display!</h3>
                    <p>Please make a different selection and try again</p>
                </div>
            </div>
        `
    }
}

function searchButtonClick() {
    // validate user input with an alert if options are not clicked
    if (budgetInput == null && carSizeInput == null) {
        alert("please select your car budget above and prefered car size above")
        return false;
    } else if (carSizeInput == null) {
        alert("please select a car size above")
        return false;
    } else if (budgetInput == null) {
        alert("please select your car budget above")
        return false;
    } else {
        // collect data from the local database
        fetch("../../cars/fixtures/Electric.json")
        .then(
            response => response.json()
        )
        .then(
            carData => {
                // set empty storage lists
                var resultsStorage = [];
                var searchResults = [];
                // filer all vehicles by vehicle class/size
                for (let i = 0; i < carData.length; i++) {
                    if (carData[i]["VEHICLE CLASS"].toLowerCase() == carSizeInput.slice(3)) {
                        resultsStorage.push(carData[i])
                    }
                }
                // filer all vehicles by price in brackets
                switch (budgetInput.slice(3)) {
                    case "Under30":
                        for (let i = 0; i < resultsStorage.length; i++) {
                            if (resultsStorage[i]["data_price"] < 30000) {
                                searchResults.push(resultsStorage[i])
                            }
                        }
                        break;
                    case "30To50":
                        for (let i = 0; i < resultsStorage.length; i++) {
                            if (resultsStorage[i]["data_price"] >= 30000 && resultsStorage[i]["data_price"] <= 50000) {
                                searchResults.push(resultsStorage[i])
                            }
                        }
                        break;
                    case "Over50":
                        for (let i = 0; i < resultsStorage.length; i++) {
                            if (resultsStorage[i]["data_price"] > 50000) {
                                searchResults.push(resultsStorage[i])
                            }
                        }
                        break;
                    }
                // call the display search results function
                displaySearchResults(searchResults)
            }
        )}
    }