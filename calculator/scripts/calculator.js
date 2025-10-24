const buttons = document.querySelector("#buttons");
const result = document.querySelector("#result");

function handleOperation(operation) {
    switch (operation) {
        case "+":
        case "-":
        case "x":
        case "÷":
            let last = result.innerHTML.substring(result.innerHTML.length - 1);
            if (isNaN(last)) {
                result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length - 1) + operation;
            } else {
                result.innerHTML = result.innerHTML + operation;
            }
            
            break;
        default:
            break;
    }
}
function handleClick(target) {
    let operation = target.innerHTML;
    if (isNaN(operation)) {
        handleOperation(operation);
    } else {
        if (result.innerHTML + 1 == 1) {
            result.innerHTML = operation;
        } else {
            result.innerHTML = document.querySelector("#result").innerHTML + operation;
        }
    }
}
buttons.addEventListener("click", function (event) {
    handleClick(event.target);
});