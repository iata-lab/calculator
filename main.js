//First, we collect the transaction data, both the two values ​​and the symbol of the transaction that the user wants to perform via prompt.

function calculator() {
    let sign = prompt(
        "Introduce the math sign:\n'+' --> Sum\n'-' --> Rest\n'*' --> Multiplication\n'/' --> Divide\n'^' --> Pow\n'%' --> Module"
    );

    let value1 = prompt("Introduce the 1st number:");
    let value2 = prompt("Introduce the 2nd number:");

    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    let result;


    //We create a switch and depending on the sign entered by the user, one operation or another will be executed.

    switch (sign) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 === 0) {
                alert("Error: Division by zero.");
                return;
            }
            result = value1 / value2;
            break;
        case '^':
            result = Math.pow(value1, value2);
            break;
        case '%':
            result = value1 % value2;
            break;
        default:
            alert("Invalid operator.");
            return;
    }

    alert(`The result is: ${value1} ${sign} ${value2} = ${result}`);
}

// Execute the calculator
calculator();



