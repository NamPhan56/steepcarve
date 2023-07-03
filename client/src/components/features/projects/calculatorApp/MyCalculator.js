import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';
import Keys from './Keys';

const MyCalculator = () => {
    
    const [displayValue, setDisplayValue] = useState('');
    const [calculation, setCalculation] = useState('');
    const [error, setError] = useState('');

    const content = (
        <>
            <div class="calculatorApp">
                <h1>My Calculator</h1>

                <input type="text" name="dispalyField" value={displayValue}></input>
                <br/>
                <input type="text" name="inputField" value={displayValue}></input>
                <hr/>
                <Keys/>

            </div>
        </>
    )
    return content
   
}

export default MyCalculator