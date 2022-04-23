// Additional Data Input Controls 

// template taken from https://www.w3schools.com/howto/howto_js_rangeslider.asp
var mpgSlider = document.getElementById("mpgRange");
var mpgSliderValue = document.getElementById("mpgValue");
mpgSliderValue.innerHTML = "Unselected"; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
mpgSlider.oninput = function() {
    mpgSliderValue.innerHTML = this.value;
}

var mileageSlider = document.getElementById("mileageRange");
var mileageSliderValue = document.getElementById("mileageValue");
mileageSliderValue.innerHTML = "Unselected"; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
mileageSlider.oninput = function() {
    mileageSliderValue.innerHTML = this.value;
}

function clearMPGSelection() {
    mpgSliderValue.innerHTML = "Unselected"; // Reset MPG selection
    mpgSlider.value = 50
}

function clearMileageSelection() {
    mileageSliderValue.innerHTML = "Unselected"; // Reset Mileage selection
    mileageSlider.value = 45000
}

function validateMPGInput(value) {
    return /^\d{0,3}(\.\d{0,2})?$/.test(value);
}

// MPG Validation
document.getElementById("customFuelPrice").oninput = function()  {
    // To be used when data is submitted
    value = this.value
    errorDisplay = document.getElementById("mpgValidatorErrorMessage")
    if (validateMPGInput(value) == false){
        this.style.color = "red"
        errorDisplay.innerHTML = "Please enter a a price with a max of 4 numbers and 2 decimal places"
    } else {
        this.style.color = "initial"
        errorDisplay.innerHTML = "&nbsp"
    }
}

// Fuel Savings Display Message

function displayCalculationResults(savingAmount) {
    document.getElementById("result-display").innerHTML = `
    <div class="row">
        <div class="col-12">
            <p class="mb-0">By Choosing an Electric Vehicle you could save up to</p>
            <p class="display-3">$${savingAmount} a year</p>
            <p class="mb-0">Over the Life Cycle of a battery*, the savings could reach</p>
            <p class="display-3">$${savingAmount*8}</p>
            <p class="small text-muted">*Life cycle of a battery is approx. 8 years</p>
        </div>
    </div>
    `;
}

// Fuel Savings Calculator

function calculateFuelSavings(fuelPrice=4.23) {
    // Per Gallon in dollars
    // Check if custom fuel price is supplied
    if (customFuelPrice.value) {
        if (customFuelPrice.value > 0 && validateMPGInput(value) == true) {
            console.log(customFuelPrice.value)
            fuelPrice = customFuelPrice.value
        } else {
            alert("Please enter a valid input for Fuel Price");
        }
    }
    // Check if custom vehicle MPG is supplied
    let vehicleMPG = document.getElementById("mpgValue").innerHTML;
    console.log(vehicleMPG)
    if (vehicleMPG == "Unselected") {
        vehicleMPG = 36
    } 

    // Per kWh in cents
    const electricityPrice = 13.72;
    // mile per kWh, Changes dependant on the car displayed?
    const electricKwhUsage = 4;
    
    // Store variables from page
    let mileage = document.getElementById("mileageValue").innerHTML;
    if (mileage == "Unselected") {
        mileage = 30000
    } 

    const vehicleType =  document.getElementById("vehicle-type");
    
    // Calculate the difference in yearly cost
    let electricYearCost = ((mileage / electricKwhUsage) * electricityPrice)/100;
    let fuelYearCost = (mileage / vehicleMPG) * fuelPrice;
    let yearCostSaving = Math.round((fuelYearCost - electricYearCost) * 100) / 100;
    
    if (yearCostSaving > 0) {
        displayCalculationResults(yearCostSaving)
    }
}

