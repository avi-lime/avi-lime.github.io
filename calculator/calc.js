const display = document.getElementById("display")
const history = document.getElementById("history")

let historyArray = []
let currentString = ""

function displayValue(str) {
    switch(str) {
        case ".":
            if (currentString.search(/\./)) {
                console.log([currentString, currentString.search("\.")]);
                currentString += str;
                break;
            } else {
                return false;
            }
        case "+/-":
            currentString *= -1;
            break;
        default:
            currentString += str;
    }
    
    display.innerText = currentString
}

function calculate() {
    try {
        let result = eval(currentString);
        if (isNaN(result)) throw new Error('Invalid calculation')
        historyArray.push(`${currentString} = ${result}\n`)
        if(historyArray.length > 3)
            historyArray.shift()
        history.innerText = historyArray.join("");
        currentString = ``
        display.innerText = result
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
            
}

function clearDisplay() {
    currentString = ""
    historyArray = []
    display.innerText = currentString
    history.innerText = ""
}

function clearEntry() {
    currentString = ""
    display.innerText = currentString
}

function backspace() {
    currentString = currentString.slice(0, -1)
    display.innerText = currentString
}