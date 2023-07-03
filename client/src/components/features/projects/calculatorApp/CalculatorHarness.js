import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';
import MyCalculator from  './MyCalculator.js';

const CalculatorHarness = () => {


  const [displayValue, setDisplayValue] = useState('');
  const [calculation, setCalculation] = useState('');
  const [error, setError] = useState('');

  const handleDigitClick = (digit) => {
    setDisplayValue((prevDisplay) => prevDisplay + digit);
    setError('');
  };

  const handleOperatorClick = (operatorValue) => {
    if (displayValue !== '') {
      setCalculation((prevCalculation) => prevCalculation + displayValue + operatorValue);
      setDisplayValue('');
      setError('');
    }
  };

  const calculateResult = () => {
    try {
        const result = eval(calculation + displayValue);
        setDisplayValue(result.toString());
        setCalculation('');
      } catch (error) {
        setError('Invalid calculation');
      }
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setCalculation('');
    setError('');
  };

 const content = (
    <> 
    {/* <div classNameName="calculator">
      <input type="text" value={displayValue} readOnly classNameName="display" />
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
      {error && <div classNameName="error">{error}</div>}
    </div> */}

    <div id="mycalc">
      <MyCalculator/>
    </div>
      

    </>

    )

    return content
   
}

export default CalculatorHarness;