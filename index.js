function add(){
    return 2+3;
}
function subtract(){
    return 2-1;
}
function multiply(){
    return 2*1;
}
function divide(){
    return 10/5;
}
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function increment(n){
    return n+1; 
}

function decrement(n){
    return n-1;
}

function makeInt(n) {
    const parsedValue = parseInt(n, 10);

   
    if (isNaN(parsedValue)) {
        return "Input is not a valid integer";
    }

    return parsedValue;
}

function preserveDecimal(n) {
    const parsedValue = parseFloat(n, 10);

   
    if (isNaN(parsedValue)) {
        return "Input is not a valid integer";
    }

    return parsedValue;
}