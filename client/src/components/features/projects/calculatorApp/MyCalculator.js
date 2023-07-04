import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';
import Keys from './Keypad';

const MyCalculator = () => {
    
    const [displayValue, setDisplayValue] = useState('');
    const [resultsValue, setResultsValue] = useState('');
    

    /*
        child(Keypad component) to parent(MyCalculator component) callback function
    */
    const handleDataFromChild = (data) => {
        if(data === "C"){
            clearHandler();
        }
        else if (data === "="){
            equalHandler();
        }
        else{
            // appends to the current input string
            setDisplayValue(displayValue + data);
        }
    }

    // handles the clear button
    const clearHandler = () => {
        setDisplayValue('');
        setResultsValue('');
    }

    //handles the equals button
    const equalHandler = () => {
        try{
            setResultsValue(eval(displayValue));
        }
        catch(SyntaxError){
            setResultsValue("There are errors in your formula.");
        }
    }

    const handleInputChange = (e) => {
        setDisplayValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            equalHandler();
        }
    }
    const content = (
        <>
            <div className="calculatorApp">
                <h1>My Calculator</h1>
                <div id="displayfields">
                    <input type="text" name="displayField" placeholder="result" readOnly value={resultsValue}></input>
                    <br/>
                    <input type="text" name="inputField" onKeyDown={handleKeyPress} onInput={handleInputChange} autoComplete="off" placeholder="input" value={displayValue ?? ''}></input>
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