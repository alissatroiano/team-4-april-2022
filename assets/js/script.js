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
// Global Variables
var carSizeInput = null;
var budgetInput = null;

// functions to set local variables on click
function setOptionVariable(value) {
    if (value.substring(0,2) == "Q1") {
        carSizeInput = value;
    } else if (value.substring(0,2) == "Q2") {
        budgetInput = value;
    }
    console.log(carSizeInput)
    console.log(budgetInput)
    selectedCardCSS(value);
}

function selectMileageSize(value) {
    let mileageSize = value;
    console.log(mileageSize);
    selectedCardCSS(value);
}

function displaySearchResults(resultsList) {
    display = document.getElementById("searchResultsDisplay")
    display.innerHTML = ""
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
}

function searchButtonClick() {
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
        console.log("options selected")
        console.log(carSizeInput)
        console.log(budgetInput)
        var searchResults = [];
        fetch("../../cars/fixtures/Electric.json")
        .then(
            response => response.json()
        )
        .then(
            carData => {
                for (let i = 0; i < carData.length; i++) {
                    if (carData[i]["VEHICLE CLASS"].toLowerCase() == carSizeInput.slice(3)) {
                        searchResults.push(carData[i])
                    }
                }
                displaySearchResults(searchResults)
                // let suggestions = carData.map(suggestions => [
                //     suggestions.img,
                //     suggestions.MODEL,
                //     suggestions.MANUFACTURER,
                //     suggestions.VEHICLE_CLASS,
                //     suggestions.ENGINE_POWER,
                //     suggestions.BATTERY_CAPACITY,
                //     suggestions.PRICE
                // ]);
                // suggestions.forEach((suggestions => {
                //     console.log(suggestions[3],[7])
                // }));
                // console.log(suggestions);
            }
        );
        }
    }