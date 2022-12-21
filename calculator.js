//obtiene un arreglo de los botones operator y otro de los botones number
const keysNumbers = document.getElementsByName('keyNumber');
const keysOperators = document.getElementsByName('keyOperator');

//obtiene los botones "C" e "=" para manejar sus eventos
const keyClear = document.getElementById('keyClear');
const keyEqual = document.getElementsByName('keyEqual')[0];
const keySqrt = document.getElementsByName('keySqrt')[0];

//coloco como variable el div para usarlo como pantalla
let actualInput = document.getElementById('actualInput');

let actualOperation = '';
let history = '';
let operation = undefined;


//captura los numeros
keysNumbers.forEach(key => {
    key.addEventListener('click', () => {
        addNumber(key.value);
    });
});

//captura los operadores basicos
keysOperators.forEach(key => {
    key.addEventListener('click', () => {
        console.log(key.value);
        selectOperation(key.value)
    });


});

keyEqual.addEventListener('click', () => {
    calculate();
    refreshDisplay();
    console.log('press=');
});

keyClear.addEventListener('click', () => {
    clear();
    refreshDisplay();
});

keySqrt.addEventListener('click', () => {
    let calculation = Math.sqrt(parseFloat(actualOperation)); 
    actualOperation = calculation;
    operation = undefined;
    history = '';
    calculate();
    refreshDisplay();
})




function selectOperation(op){
    if(actualOperation === '') return;
    if(history !== ''){
        calculate()
    };
    operator = op.toString();
    history = actualOperation;
    actualOperation = '';
};

function calculate(){
    let calculation;
    const preview = parseFloat(history);
    const actual = parseFloat(actualOperation);
    if(isNaN(preview) || isNaN(actual)) return;
    switch(operator){
        case '+':
            calculation = preview + actual;
            break;
        case '-':
            calculation = preview - actual;
            break;
        case '*':
            calculation = preview * actual;
            break;
        case '/':
            calculation = preview / actual;
            break;
        case '%':
            calculation = preview % actual;
            break
        case 'pow':
            calculation = Math.pow (preview, actual);
            break;
        default:
            console.log('no valido');
            return;
    };
    actualOperation = calculation;
    operation = undefined;
    history = '';
};

function addNumber(num){
    actualOperation = actualOperation.toString() + num.toString();
    refreshDisplay();
    console.log(actualOperation);
};

function refreshDisplay(){
    actualInput.innerHTML = actualOperation;
};

function clear(){
    actualOperation = '';
    history = '';
    operation = undefined;
}