let result = "";

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "";
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        result = eval(result).toString();
        document.getElementById("result").value = result;
    } catch {
        document.getElementById("result").value = "Error";
        result = "";
    }
}