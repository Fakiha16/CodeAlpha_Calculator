function addToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (e) {
        display.value = 'Error';
    }
}
