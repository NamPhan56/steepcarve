import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';


const CalculatorHarness = () => {

    // const [inputValue, setInputValue] = useState('');

    // const handleChange = (event) => {
    //     setInputValue(event.target.value);
    // };
      
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(inputValue);
    //     // Perform other operations with the input value
    // };

    // //var input = '';
    // var result = '';
    // const content = (
    //     <> 
    //     <form>
    //         <input
    //             id="input1" 
    //             type="text" 
    //             name="input"
    //             value={inputValue}
    //             onChange={handleChange}
    //             placeholder="enter formula" 
    //             maxLength="140" 
    //             />

                
    //         {/* <input
    //             id="input1" 
    //             type="text" 
    //             name="input"
    //             value={input} 
    //             placeholder="enter formula" 
    //             // label="Maximum length of 140 characters, only operation and digits" 
    //             maxlength="140" 
    //             //message-when-pattern-mismatch="Please enter a valid formula"
    //             // message-when-too-long="Max length is 140 characters" 
    //             // onchange={handleInputChange}
    //             // onkeydown={handleEnterPress}
    //             /> */}

    //         <br/>
    //         <br/>
    //         <textarea 
    //             id="result1" 
    //             name="result" 
    //             disabled value={result} 
    //             label="Result"
    //             >
    //         </textarea>

    //         <br/>
    //         <button type="submit">Get Value</button>
    //     </form>

    //         <hr/>


    //     </>
    // )

    // function getValue(){
    //     var inputField = document.getElementById("input1");
    //     var inputValue = inputField.value;
    //     console.log(inputValue);

const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (displayValue === '0' || waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + digit);
    }
  };

  const handleOperatorClick = (operatorValue) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(displayValue));
      setOperator(operatorValue);
      setWaitingForSecondOperand(true);
    } else {
      calculateResult();
      setOperator(operatorValue);
      setWaitingForSecondOperand(true);
    }
  };

  const calculateResult = () => {
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setFirstOperand(result);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

 const content = (
    <> 
        <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="keypad">
                <button onClick={() => handleDigitClick('7')}>7</button>
                <button onClick={() => handleDigitClick('8')}>8</button>
                <button onClick={() => handleDigitClick('9')}>9</button>
                <button onClick={() => handleOperatorClick('+')}>+</button>
                <br/>
                <button onClick={() => handleDigitClick('4')}>4</button>
                <button onClick={() => handleDigitClick('5')}>5</button>
                <button onClick={() => handleDigitClick('6')}>6</button>
                <button onClick={() => handleOperatorClick('-')}>-</button>
                <br/>
                <button onClick={() => handleDigitClick('1')}>1</button>
                <button onClick={() => handleDigitClick('2')}>2</button>
                <button onClick={() => handleDigitClick('3')}>3</button>
                <button onClick={() => handleOperatorClick('*')}>*</button>
                <br/>
                <button onClick={() => handleDigitClick('0')}>0</button>
                <button onClick={() => handleOperatorClick('.')}>.</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={() => handleOperatorClick('/')}>/</button>
                <button onClick={handleClearClick}>C</button>
            </div>
        </div>
    </>
    )
    return content
   
}

export default CalculatorHarness;