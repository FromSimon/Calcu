let numberOne
let numberTwo
let step = 0
let operation
let result = 0

let arrayOne = []
let arrayTwo = []

let display = document.getElementById('inputBox')

function getNumber(num){
if(step === 0 || step === 1){
    numArray.push(num)
    step = 1
    numberOne = numArray.join('')
    display.value = numberOne
} else if (step ===2) {
    arrayTwo.push(num)
    numberTwo = Number(arrayTwo.join(''))
    display.value = numberTwo
}
}

function getOp(operate){
step = 2
operation = operate
}

function clear(erase){
    display.value = 0
    numberOne = null
    numberTwo = null
    step = 0
    operation = null
    result = 0
    arrayOne = []
    arrayTwo = []
}

const calculateEquals = () =>{
    if(operation === '+'){
        result = numberOne + numberTwo
        display.value = result
    }
    if(operation === '-'){
        result = numberOne - numberTwo
        display.value = result
    }
    if(operation === 'x'){
        result = numberOne * numberTwo
        display.value = result
    }
    if(operation === '/'){
        result = numberOne / numberTwo
        display.value = result
    }
    
}

