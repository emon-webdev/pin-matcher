function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin
    } else {
        console.log('pin not 4 digit found', pin)

        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', () => {
    const pin = getPin();
    console.log(pin)
    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin

})


document.getElementById('calculator').addEventListener('click', (event) => {

    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typedNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        } else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop()
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    } else {
        const newTypeNumber = previousTypeNumber + number;
        typedNumberField.value = newTypeNumber;
    }
})



document.getElementById("verify-pin").addEventListener('click', () => {
    console.log('verify-pin')
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (currentPin === typedNumber) {
        pinSuccessMessage.style.display = 'block'
        pinFailureMessage.style.display = 'none'
    } else {
        pinFailureMessage.style.display = 'block'
        pinSuccessMessage.style.display = 'none'
    }

})












