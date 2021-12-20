

function addFunc(v1, v2) {
    return v1 + v2;
}

let subFunc = function (v1, v2) {
    return v1 - v2;
}

const mulFunc = (v1, v2) => v1 * v2;

const divFunc = (v1, v2) => v1 / v2;

const operation = (v1, v2, operand) => {
    switch (operand) {
        case "+":
            return addFunc(v1, v2);
        case "-":
            return subFunc(v1, v2);
        case "*":
            return mulFunc(v1, v2);
        case "/":
            return divFunc(v1, v2);
    }
}

const $id = (element) => document.getElementById(element)