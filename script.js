// script.js
let scientificMode = false;

function appendDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value.replace(/sin|cos|tan/g, 'Math.$&'));
    } catch (e) {
        alert("Input tidak valid");
        clearDisplay();
    }
}

function toggleScientific() {
    scientificMode = !scientificMode;
    const sciButtons = document.getElementById('scientific-buttons');
    sciButtons.style.display = scientificMode ? 'grid' : 'none';
}
