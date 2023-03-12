


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