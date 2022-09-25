const myName = document.querySelector('#name');
const myNumber = document.querySelector('#number');
const expMonth = document.querySelector('#exp-month');
const expYear = document.querySelector('#exp-year');
const cvc = document.querySelector('#cvc');

const form = document.querySelector('.form');
const confirm = document.querySelector('.confirm');
const btn = document.querySelector('.btn');
const btnClosure = document.querySelector('.btn-closure');
const header = document.querySelector('.confirm h1');

const cardName = document.querySelector('.card-name');
const cardNumber = document.querySelector('.card-number');
const cardExpMonth = document.querySelector('.card-expiry-month');
const cardExpYear = document.querySelector('.card-expiry-year');
const cvc1 = document.querySelector('.cvc-1');

const errorName = document.querySelector('.error-name')
const errorNumber = document.querySelector('.error-number')
const errorExpMonth = document.querySelector('.error-exp-month')
const errorExpYear = document.querySelector('.error-exp-year')
const errorCvc = document.querySelector('.error-cvc')


myName.addEventListener('keyup', nameClick);
function nameClick (e) {
    
    let formatNmae = myName.value;
    formatNmae = formatNmae.substring(0, 22);
    myName.value = formatNmae;
    cardName.innerHTML = myName.value;
    header.innerHTML = `Thank you ${myName.value}`;
    
    let nameChip = /^[A-Z a-z]+$/;
    if (myName.value.match(nameChip)){
        errorName.textContent = ' '
        myName.style.border = 'solid 1px #999'
        btn.style.backgroundColor = 'hsl(278, 68%, 11%)'
    } else if (myName.value === ''){
        errorName.innerHTML = "Cant be empty"
    } else {
        errorName.innerHTML = "Please enter a valid cardname"
        btn.style.backgroundColor = 'red'
    } 
    if (myName.value === ''){
        btn.style.backgroundColor = 'hsla(278, 94%, 14%, 0.44)'
    }
}

myNumber.addEventListener('keyup', numberClick);
function numberClick () {
    let cardInput = myNumber.value;
    let formatedCardNumber = cardInput.replace(/[^\d]/g, "");
    formatedCardNumber = formatedCardNumber.substring(0, 16);
    let cardDivider = formatedCardNumber.match(/\d{1,4}/g);
    if (cardDivider !== null){
        formatedCardNumber = cardDivider.join(" ");
    }

    if (cardInput !== formatedCardNumber) {
        myNumber.value = formatedCardNumber;
        myNumber.style.border = 'solid 1px #999'
        btn.style.backgroundColor = 'hsl(278, 68%, 11%)'
    }
    cardNumber.innerHTML = myNumber.value;
    cardNumber.style.fontSize = '19px'
   
    if (myNumber.value === '') {
        errorNumber.textContent = "Can't be empty"
    } else {
        errorNumber.textContent = '';
    }
    if (myNumber.value === ''){
        btn.style.backgroundColor = 'hsla(278, 94%, 14%, 0.44)'
    }
}

cvc.addEventListener('keyup', cvcClick);
function cvcClick () {
        let formatedCvc = cvc.value;
        formatedCvc = formatedCvc.substring(0, 3);
        cvc.value = formatedCvc;
        cvc1.innerHTML = cvc.value


        let cvcChip = /^[0-9]+$/;
        if (cvc.value.match(cvcChip)){
            errorCvc.textContent = ' '
            cvc.style.border = 'solid 1px #999'
            btn.style.backgroundColor = 'hsl(278, 68%, 11%)'
        } else if (cvc.value === ''){
            cvc.style.border = "solid 1px red";
            btn.style.backgroundColor = 'hsla(278, 94%, 14%, 0.44)'
            errorCvc.textContent = "Can't be empty"
        } else {
            cvc.style.border = "solid 1px red";
            btn.style.backgroundColor = 'red'
            errorCvc.innerHTML = "invalid"
        } 

}
expMonth.addEventListener('keyup', expMClick);
function expMClick (e) {
        let formatedExpM = expMonth.value;
        formatedExpM = formatedExpM.substring(0, 2);
        expMonth.value = formatedExpM;
        cardExpMonth.innerHTML = expMonth.value

        let expMChip = /^[0-9]+$/;
        if (expMonth.value.match(expMChip)){
            errorExpMonth.textContent = ' '
            expMonth.style.border = 'solid 1px #999'
            btn.style.backgroundColor = 'hsl(278, 68%, 11%)'
        }else {
            expMonth.style.border = "solid 1px red";
            btn.style.backgroundColor = 'red'
            errorExpMonth.innerHTML = "invalid"
        } 
        if (expMonth.value === ''){
            btn.style.backgroundColor = 'hsla(278, 94%, 14%, 0.44)'
        }
        if ( expMonth.value > '12') {
            e.preventDefault;
        }
   

}
expYear.addEventListener('keyup', expYClick);
function expYClick (e) {
        let formatedExpY = expYear.value;
        formatedExpY = formatedExpY.substring(0, 2);
        expYear.value = formatedExpY;
        cardExpYear.innerHTML = expYear.value


        let expYChip = /^[0-9]+$/;
        if (expYear.value.match(expYChip)){
            errorExpYear.textContent = ' '
            expYear.style.border = 'solid 1px #999'
            btn.style.backgroundColor = 'hsl(278, 68%, 11%)'
        } else {
            expYear.style.border = "solid 1px red";
            btn.style.backgroundColor = 'red'
            errorExpYear.innerHTML = "invalid"
        } 
        if (expYear.value === ''){
            btn.style.backgroundColor = 'hsla(278, 94%, 14%, 0.44)'
        } 

}
function allInput () {
        
    if (myName.value === '' || 
    myNumber.value === '' || 
    btn.style.backgroundColor === 'red'||
    errorName.innerHTML === "Please enter a valid cardname" ||
    cvc.style.border === '1px solid red' ||
    expMonth.style.border === '1px solid red' ||
    expYear.style.border === '1px solid red' ||
    myNumber.value.length < 19 ||
    myName.value.length < 6 ||
    cvc.value.length < 3 ||
    expMonth.value.length < 2 ||
    expYear.value.length < 2 ||
    expMonth.value === '' || 
    expYear.value === '' || 
    cvc.value === '') {
        return false;
    } else {
        return true;
    }    
}


btn.addEventListener('click', btnClick) 
function btnClick(e) {
    allInput() 
    if(allInput() === false) {
        e.preventDefault();
    } else {
        e.preventDefault();
        form.classList.add('hidden');
        confirm.classList.remove('hidden');
    }
    if (myName.value === '' ) {
        myName.style.border = '1px solid red'
    }
    if (myNumber.value === '' ) {
        myNumber.style.border = '1px solid red'
        errorNumber.textContent = "Can't be empty"
    }
    if (expMonth.value === '' ) {
        expMonth.style.border = '1px solid red'
        errorExpMonth.textContent = "Can't be empty"
    }
    if (expYear.value === '' ) {
        expYear.style.border = '1px solid red'
        errorExpYear.textContent = "Can't be empty"
    }
    if (cvc.value === '' ) {
        cvc.style.border = '1px solid red'
        errorCvc.textContent = "Can't be empty"
    }
    if (myNumber.value.length > 1 && myNumber.value.length < 19) {
        errorNumber.textContent = "Number is too short"
    }
    if (myName.value.length > 1 && myName.value.length < 8) {
        errorName.textContent = "Name is too short"
    }
    if (cvc.value.length > 0 && cvc.value.length < 3) {
        errorCvc.textContent = "cvc too short"
    }
    if (expMonth.value.length > 0 && expMonth.value.length < 2) {
        errorExpMonth.textContent = "Too short"
    }
    if (expYear.value.length > 0 && expYear.value.length < 2) {
        errorExpYear.textContent = "Too short"
    }
  

      e.preventDefault();
}


btnClosure.addEventListener('click', btnCClick)
function btnCClick(e) {
    form.classList.remove('hidden');
    confirm.classList.add('hidden');
    myName.value = '';
    myNumber.value = '';
    expMonth.value = '';
    expYear.value = '';
    cvc.value = '';
    cardName.innerHTML = 'Peter Bit';
    cardNumber.innerHTML = '0000 0000 0000 0000';
    cardExpMonth.innerHTML = '00';
    cardExpYear.innerHTML = '00';
    cvc1.innerHTML = '000';
    if (myName.value === '' ) {
        myName.style.border = ''
        btn.style.backgroundColor = 'hsla(278, 94%, 14%, 0.44)'
        errorName.textContent = ""
    }
    if (myNumber.value === '' ) {
        myNumber.style.border = ''
    }
    if (expMonth.value === '' ) {
        expMonth.style.border = ''
    }
    if (expYear.value == '' ) {
        expYear.style.border = ''
    }
    if (cvc.value === '' ) {
        cvc.style.border = ''
    }
    // e.preventDefault();
}