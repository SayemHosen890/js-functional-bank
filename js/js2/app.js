const basePrice = document.getElementById('base-price')
const basePriceText = parseFloat(basePrice.innerText);
console.log(basePriceText);


document.getElementById('8gb-memory').addEventListener('click', function () {
    const firstMemory = document.getElementById('memory-cost');
    firstMemory.innerText = '0';
    const firstValue = parseFloat(firstMemory.innerText);
    console.log(firstValue);
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    const secondMemory = document.getElementById('memory-cost');
    secondMemory.innerText = '180';
    const secondValue = parseFloat(secondMemory.innerText);
    console.log(secondValue);
})
document.getElementById('256-storage').addEventListener('click', function () {
    const firstStorage = document.getElementById('extra-storage');
    firstStorage.innerText = '0';
    const thirdValue = parseFloat(firstStorage.innerText);
    console.log(thirdValue);
})
document.getElementById('512gb-storage').addEventListener('click', function () {
    const secondStorage = document.getElementById('extra-storage');
    secondStorage.innerText = '100';
    const fourtValue = parseFloat(secondStorage.innerText);
    console.log(fourtValue);
})
document.getElementById('1TB-storage').addEventListener('click', function () {
    const thirdStorage = document.getElementById('extra-storage');
    thirdStorage.innerText = '180';
    const fifthValue = parseFloat(thirdStorage.innerText);
    console.log(fifthValue);
})
document.getElementById('prime-delivery').addEventListener('click', function () {
    const primeCost = document.getElementById('delivery-charge');
    primeCost.innerText = '0';
    const sixthValue = parseFloat(primeCost.innerText);
    console.log(sixthValue);
})
document.getElementById('charge-delivery').addEventListener('click', function () {
    const chargeCost = document.getElementById('delivery-charge');
    chargeCost.innerText = '20';
    const seventhValue = parseFloat(chargeCost.innerText);
    console.log(seventhValue);
    // const totalValue = document.getElementById('total-price');
    // const value = parseFloat(totalValue.innerText);
})
function checkPromo() {
    const totalPrice = document.getElementById('total-price');
    const total = document.getElementById('total-amount');
    const inputText = document.getElementById('input-text').value;
    if (inputText == 'stevekaku') {
        total.innerText = totalPrice.innerText - (totalPrice.innerText * 0.20)
    }
    else {
        alert('provide right code');
    }
}
document.getElementById('apply-promo').addEventListener('click', function () {
    checkPromo();
})
// function updatePrice() {
//     const totalValue = document.getElementById('total-price');
//     const value = parseFloat(totalValue.innerText);
// }
// const totalValue = document.getElementById('total-price');
// const value = parseFloat(totalValue.innerText);
// const mainValue = seventhValue + value;
// console.log(mainValue);
// console.log(value);

// function addTotal() {
//     const totalPrice = value + seventhValue + sixthValue + fifthValue + fourtValue + thirdValue + secondValue + firstValue;
//     console.log(totalPrice);
// }
// console.log(theValue);
// const totalValue = document.getElementById('total-price');
// const value = parseFloat(totalValue.innerText);
