function calculate(operation) {
    const num1Str = document.getElementById("firstNumber").value.trim();
    const num2Str = document.getElementById("secondNumber").value.trim();
    const resultElement = document.getElementById("result");

    if (num1Str === "" || num2Str === "") {
        resultElement.innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    if (operation === "multiply") {
        resultElement.innerText = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            resultElement.innerText = "Không thể chia cho số 0";
        } else {
            resultElement.innerText = num1 / num2;
        }
    }
}