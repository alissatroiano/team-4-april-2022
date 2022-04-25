// Additional Data Input Controls 

// template taken from https://www.w3schools.com/howto/howto_js_rangeslider.asp
var mpgSlider = document.getElementById("mpgRange");
var mpgSliderValue = document.getElementById("mpgValue");
mpgSliderValue.innerHTML = "Unselected"; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
mpgSlider.oninput = function() {
    mpgSliderValue.innerHTML = this.value;
};

var mileageSlider = document.getElementById("mileageRange");
var mileageSliderValue = document.getElementById("mileageValue");
mileageSliderValue.innerHTML = "Unselected"; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
mileageSlider.oninput = function() {
    mileageSliderValue.innerHTML = this.value;
};

function clearMPGSelection() {
    mpgSliderValue.innerHTML = "Unselected"; // Reset MPG selection
    mpgSlider.value = 50;
}

function clearMileageSelection() {
    mileageSliderValue.innerHTML = "Unselected"; // Reset Mileage selection
    mileageSlider.value = 45000;
}

function validateMPGInput(value) {
    return /^\d{0,3}(\.\d{0,2})?$/.test(value);
}

// MPG Validation
document.getElementById("customFuelPrice").oninput = function()  {
    // To be used when data is submitted
    value = this.value;
    errorDisplay = document.getElementById("mpgValidatorErrorMessage");
    if (validateMPGInput(value) == false){
        this.style.color = "red";
        errorDisplay.innerHTML = "Please enter a price with a maximum of 3 numbers before the decimal point and up to 2 decimal places";
    } else {
        this.style.color = "initial";
        errorDisplay.innerHTML = "&nbsp";
    }
};

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

function calculateFuelSavings(individualDisplay=false, customElectricKwhUsage) {
    // Per Gallon in dollars
    // Check if custom fuel price is supplied
    var fuelPrice=4.23
    if (customFuelPrice.value) {
        if (customFuelPrice.value > 0 && validateMPGInput(value) == true) {
            fuelPrice = customFuelPrice.value;
        } else if (customFuelPrice.value > 0 && validateMPGInput(value) == false) {
            alert("Please enter a valid input for Fuel Price. The calculator will use the default average fuel price for this calculation");
        }
    }
    // Check if custom vehicle MPG is supplied
    let vehicleMPG = document.getElementById("mpgValue").innerHTML;
    if (vehicleMPG == "Unselected") {
        vehicleMPG = 36;
    } 

    // Per kWh in cents
    const electricityPrice = 13.72;
    // mile per kWh, Changes dependant on the car displayed?
    if (individualDisplay == true) {
        var electricKwhUsage = customElectricKwhUsage
    } else {
        var electricKwhUsage = 4;
    }
    
    // Store variables from page
    let mileage = document.getElementById("mileageValue").innerHTML;
    if (mileage == "Unselected") {
        mileage = 30000;
    }
    
    // Calculate the difference in yearly cost
    let electricYearCost = ((mileage / electricKwhUsage) * electricityPrice)/100;
    let fuelYearCost = (mileage / vehicleMPG) * fuelPrice;
    let yearCostSaving = Math.round((fuelYearCost - electricYearCost) * 100) / 100;
    
    if (individualDisplay == false) {
        if (yearCostSaving > 0) {
            displayCalculationResults(yearCostSaving)
        }
    } else {
        return yearCostSaving
    }
}