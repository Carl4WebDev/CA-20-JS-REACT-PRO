
let greenBtn = document.querySelector('.btn-green');
let redBtn = document.querySelector('.btn-red');
let blueBtn = document.querySelector('.btn-blue');


function increment() {
    let numVal = Number(document.getElementById('number').innerHTML)

    document.getElementById('number').innerHTML = numVal + 1;
}
function decrement() {
    let numVal = Number(document.getElementById('number').innerHTML)

    document.getElementById('number').innerHTML = numVal - 1;
}
function neutral() {
    let numVal = Number(document.getElementById('number').innerHTML)

    document.getElementById('number').innerHTML = numVal - numVal;
}