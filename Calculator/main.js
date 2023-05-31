let runningTotal = 0;
let buffer = '0';
let prevOperator ='';

const screen = document.querySelector('.screen');

const buttonClick = (value) =>
{
    if(isNaN(value))
    {
        operatorAction(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

const handleNumber = (value) =>{
    if(buffer === '0')
    {
        buffer = value;
    }else{
        buffer += value;
    }
    
}

const operatorAction = (operator) => {
    switch(operator)
    {
        case'+':
        handleMath(operator);
            break;
        case'/':
            handleMath(operator);
            break;
        case'*':
            handleMath(operator);
            break;
        case'-':
            handleMath(operator);
            break;
        case'CE':
            buffer = '0';
            runningTotal =0;
            prevOperator = null;

        case'C':
            buffer = '0';
            break;
        case'=':
            if(prevOperator === null){
                return;
            }
            handleMath(operator);
            prevOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case'←':
            if(buffer.length === 1){
                buffer ='0';
            }else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;

        default:
            return;

    }
}

const handleMath = (operator) =>{
    if(buffer === '0')
    {
        prevOperator = operator;
        return;
    }

    let intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer;
    }
    else{
        mathOperation(intBuffer);
    }
    prevOperator = operator;
    buffer = '0';
}

const mathOperation = (intBuffer) =>
{
    switch(prevOperator){
        case'+':
            runningTotal += intBuffer;
            break;
        case'-':
            runningTotal -= intBuffer;
            break;
        case'*':
            runningTotal *= intBuffer;
            break;
        case'/':
            runningTotal /= intBuffer;
            break;
    }
}

const startUp = () =>{
    const calcButtons =  document.querySelector('.calc-buttons');
    calcButtons.addEventListener('click', (event) => {
        buttonClick(event.target.innerText);
    })
}

startUp();