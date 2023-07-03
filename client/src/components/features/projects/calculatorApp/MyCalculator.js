import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';
import Keys from './Keypad';

const MyCalculator = () => {
    
    //const [displayValue, setDisplayValue] = useState('');
    const [calculation, setCalculation] = useState('');
    const [error, setError] = useState('');
    
    /*
        child to parent callback function

    */
    const handleDataFromChild = (data) => {
        console.log(data);
    }

    const content = (
        <>
            <div className="calculatorApp">
                <h1>My Calculator</h1>
                <div id="displayfields">
                    <input type="text" name="dispalyField"></input>
                    <br/>
                    <input type="text" name="inputField"></input>
                </div>
                <hr/>

                <div id="keypad">
                    <Keys sendDataToParent={handleDataFromChild}/>
                </div>

            </div>
        </>
    )
    return content
   
}

export default MyCalculator