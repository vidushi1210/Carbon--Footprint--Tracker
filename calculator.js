
// Select the form and inputs
const form = document.querySelector("form");
const electricityInput = document.querySelector("#Electricity");
const fuelInput = document.querySelector("#Fuel");
const transportInput = document.querySelector("#Transport");

// Select buttons
const calculateBtn = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset");
const returnBtn = document.querySelector(".return");
const impactBtn = document.querySelector(".impact"); // Navigate to impact page

//  Select result text container
const resultText = document.querySelector("#result-text");

// Load saved values on page load (keeps data persistent)
window.addEventListener("DOMContentLoaded", () => {
    electricityInput.value = localStorage.getItem("electricity") || "";
    fuelInput.value = localStorage.getItem("fuel") || "";
    transportInput.value = localStorage.getItem("transport") || "";

    // Show saved total if available
    const savedTotal = localStorage.getItem("carbonFootprint");
    if (savedTotal) {
        resultText.textContent = `Your estimated carbon footprint is ${parseFloat(savedTotal).toFixed(2)} kg CO₂`;
    }
});

//  Calculate button
calculateBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Read values
    const electricity = parseFloat(electricityInput.value) || 0;
    const fuel = parseFloat(fuelInput.value) || 0;
    const transport = parseFloat(transportInput.value) || 0;

    // Save in localStorage (so Dashboard doughnut chart can use them)
    localStorage.setItem("electricity", electricity);
    localStorage.setItem("fuel", fuel);
    localStorage.setItem("transport", transport);

    // Calculate footprint
    const total = (electricity * 0.5) + (fuel * 2.3) + (transport * 0.8);

    // Save total carbon footprint (for Impact visualization)
    localStorage.setItem("carbonFootprint", total);

    //  Update result text
    resultText.textContent = `Your estimated carbon footprint is ${total.toFixed(2)} kg CO₂`;
});

// Reset button
resetBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Clear input fields
    electricityInput.value = "";
    fuelInput.value = "";
    transportInput.value = "";

    // Clear localStorage
    localStorage.removeItem("electricity");
    localStorage.removeItem("fuel");
    localStorage.removeItem("transport");
    localStorage.removeItem("carbonFootprint");

    // Reset result text 
    resultText.textContent = "Your result will appear here...";
});

// Return button (go back to homepage)
returnBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
});

// Impact button (navigate to IMPACT.html)
if (impactBtn) {
    impactBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "IMPACT.html";
    });
}

