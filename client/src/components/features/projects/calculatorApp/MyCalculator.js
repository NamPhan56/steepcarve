import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';
import Keys from './Keypad';

const MyCalculator = () => {
    
    const [displayValue, setDisplayValue] = useState('');
    const [resultsValue, setResultsValue] = useState('');
    const [error, setError] = useState('');
    
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
            console.log("Pressed: " + data);
            setDisplayValue(displayValue + data);
            console.log("displayValue: " + displayValue);
            // appends to the current input string
        }
    }

    // handles the clear button
    const clearHandler = () => {
        setDisplayValue("");
        console.log("cleared, displayValue: " + displayValue);
    }

    //handles the equals button
    const equalHandler = () => {
        try{
            setResultsValue(eval(displayValue));

        }
        catch(SyntaxError){
            this.result = "There are errors in your formula.";
        }
    }

    const handleInputChange = (e) => {
        setDisplayValue(e.target.value)
        //console.log("displayValue: " + displayValue);
    }

    const content = (
        <>
            <div className="calculatorApp">
                <h1>My Calculator</h1>
                <div id="displayfields">
                    <input type="text" name="displayField" placeholder="result" readOnly value={resultsValue}></input>
                    <br/>
                    <input type="text" name="inputField" onChange={handleInputChange} autoComplete="off" placeholder="input"></input>
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