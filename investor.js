// Just to test if JS is loading
console.log("Investor JS Loaded");

// Function triggered when Start Assessment is clicked
function startAssessment() {
    console.log("Assessment Started!");

    // Very basic DOM update
    const msgBox = document.getElementById("assessment-msg");
    
    msgBox.textContent = "Your assessment has started! (Demo Only)";
    msgBox.style.display = "block";
}
