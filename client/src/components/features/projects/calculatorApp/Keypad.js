import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';

function equalHandler(){
    let evt = new CustomEvent('sendequal', {});
    this.dispatchEvent(evt);
}

function clearHandler(){
    let evt = new CustomEvent('sendclear', {});
    this.dispatchEvent(evt);
}

function buttononClickHandler(event){
    let value = event.target.label;

    let evt = new CustomEvent('sendbuttonvalue',{"detail": value});
    this.dispatchEvent(evt);
    //console.log(value);
}

const Keypad = (props) => {
    
    const [displayValue, setDisplayValue] = useState('');
    const [calculation, setCalculation] = useState('');
    const [error, setError] = useState('');

    function buttononClickHandler(event){
        const attr = event.target.getAttribute('label');
        props.sendDataToParent(attr);
    }

    const content = (
        <>
            <div className="row">
                {/* Row 1 */}
                <button className="keypadbutton" label="("  onClick={buttononClickHandler}>(</button>
                <button className="keypadbutton" label=")"  onClick={buttononClickHandler}>)</button>
                <button className="keypadbutton" label="C"  onClick={clearHandler}>C</button>
                <button className="keypadbutton" label="/"  onClick={buttononClickHandler}>/</button>
            </div>
            <div className="row">
                {/* Row 2 */}
                <button className="keypadbutton" label="7"  onClick={buttononClickHandler}>7</button>
                <button className="keypadbutton" label="8"  onClick={buttononClickHandler}>8</button>
                <button className="keypadbutton" label="9"  onClick={buttononClickHandler}>9</button>
                <button className="keypadbutton" label="*"  onClick={buttononClickHandler}>*</button>
            </div>
            <div className="row">
                {/* Row 3 */}    
                <button className="keypadbutton" label="4"  onClick={buttononClickHandler}>4</button>
                <button className="keypadbutton" label="5"  onClick={buttononClickHandler}>5</button>
                <button className="keypadbutton" label="6"  onClick={buttononClickHandler}>6</button>
                <button className="keypadbutton" label="-"  onClick={buttononClickHandler}>-</button>
            </div>
            <div className="row">
                {/* row 4 */}
                <button className="keypadbutton" label="1"  onClick={buttononClickHandler}>1</button>
                <button className="keypadbutton" label="2"  onClick={buttononClickHandler}>2</button>
                <button className="keypadbutton" label="3"  onClick={buttononClickHandler}>3</button>
                <button className="keypadbutton" label="+"  onClick={buttononClickHandler}>+</button>
            </div>
            <div className="row">
                {/* row 5 */}
                <button className="keypadbutton" label="blank"  onClick={buttononClickHandler}>    </button>
                <button className="keypadbutton" label="0"  onClick={buttononClickHandler}>0</button>
                <button className="keypadbutton" label="."  onClick={buttononClickHandler}>.</button>
                <button className="keypadbutton" label="="  onClick={equalHandler}>=</button>
            </div>
        </>
    )
    return content
   
}

export default Keypad;