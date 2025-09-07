
function calculateImpact() {
    // Get saved footprint
    let carbonFootprint = localStorage.getItem("carbonFootprint");

    // If nothing stored
    if (!carbonFootprint) {
        document.getElementById('trees').textContent = "--";
        document.getElementById('miles').textContent = "--";
        document.getElementById('flights').textContent = "--";

        // Show message dynamically
        let msgBox = document.querySelector(".impact-message");
        if (!msgBox) {
            msgBox = document.createElement("div");
            msgBox.className = "impact-message";
            msgBox.textContent = "⚠️ Please calculate your carbon footprint first in the calculator.";
            document.querySelector(".impact-container").appendChild(msgBox);
        }
        return; // exit here if no footprint stored
    }

    carbonFootprint = parseFloat(carbonFootprint);

    // Conversions (real-world equivalents)
    let trees = Math.round(carbonFootprint / 22) / 12;
    let miles = Math.round((carbonFootprint * 1000) / 404) / 12;
    let flights = (carbonFootprint / 1100) / 12 .toFixed(1);

    // Update page
    document.getElementById('trees').textContent = trees + " trees";
    document.getElementById('miles').textContent = miles + " miles";
    document.getElementById('flights').textContent = flights + " flights";
}
