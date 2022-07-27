let queue = [];
let input = 0;
function solve(value) {
    if (input !== 0) {
        input = parseFloat(input);

        addToQueue(input);
    }
    let result = value[0];
    let dividedByZero = 0;
    for (let i = 2; i < value.length; i = i + 2) {

        switch (queue[i - 1]) {
            case '+':
                result += value[i];
                break;
            case '-':
                result -= value[i];
                break;
            case '/': if (value[i] === 0) dividedByZero = 1;
            else result = result / value[i];

                break;
            case '*': result = result * value[i];
                break;
        }

    }

    result = result.toFixed(6);
    result = parseFloat(result);
    if (dividedByZero === 1) {
        clearScreen();
        document.getElementById("result").value = "Cannot divide by zero";
    }
    else {
        document.getElementById("result").value = result;
        input = result;
        queue = [];
    }
}
function addToQueue(input) {
    queue.push(input);
}
function backSpace() {
    let x = document.getElementById('result').value
    let y = x.toString().slice(0, -1)
    document.getElementById('result').value = y
    return y
}
function clearScreen() {
    queue = [];
    input = 0;
    document.getElementById("result").value = "0";
}
function display(item) {
    if (
        document.getElementById("result").value === "Cannot divide by zero" ||
        (document.getElementById("result").value == "0" && item != ".")
    ) {
        document.getElementById("result").value = "";
    }
    if (!(item === ".") || !input.match(/[.]/)) {
        input += item;
        document.getElementById("result").value += item;
    }
}
function operator(item) {
    if (input !== 0 && input !== "-") {
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(item);
        document.getElementById("result").value += item;
        input = 0;
    }
    if (item == "-" && isNaN(queue[0]) && input !== "-") {
        input = "-";
        document.getElementById("result").value = "-";
    }
}