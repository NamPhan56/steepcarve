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

function buttonOnClickHandler(event){
    let value = event.target.label;

    let evt = new CustomEvent('sendbuttonvalue',{"detail": value});
    this.dispatchEvent(evt);
    //console.log(value);
}

const Keys = () => {
    
    const [displayValue, setDisplayValue] = useState('');
    const [calculation, setCalculation] = useState('');
    const [error, setError] = useState('');

    const content = (
        <>
            <div class="row">
                {/* Row 1 */}
                <button class="keypadbuttons" label="("  onclick={buttonOnClickHandler}>(</button>
                <button class="keypadbuttons" label=")"  onclick={buttonOnClickHandler}>)</button>
                <button class="keypadbuttons" label="C"  onclick={clearHandler}>C</button>
                <button class="keypadbuttons" label="/"  onclick={buttonOnClickHandler}>/</button>
            </div>
            <div class="row">
                {/* Row 2 */}
                <button class="keypadbuttons" label="7"  onclick={buttonOnClickHandler}>7</button>
                <button class="keypadbuttons" label="8"  onclick={buttonOnClickHandler}>8</button>
                <button class="keypadbuttons" label="9"  onclick={buttonOnClickHandler}>9</button>
                <button class="keypadbuttons" label="*"  onclick={buttonOnClickHandler}>*</button>
            </div>
            <div class="row">
                {/* Row 3 */}    
                <button class="keypadbuttons" label="4"  onclick={buttonOnClickHandler}>4</button>
                <button class="keypadbuttons" label="5"  onclick={buttonOnClickHandler}>5</button>
                <button class="keypadbuttons" label="6"  onclick={buttonOnClickHandler}>6</button>
                <button class="keypadbuttons" label="-"  onclick={buttonOnClickHandler}>-</button>
            </div>
            <div class="row">
                {/* row 4 */}
                <button class="keypadbuttons" label="1"  onclick={buttonOnClickHandler}>1</button>
                <button class="keypadbuttons" label="2"  onclick={buttonOnClickHandler}>2</button>
                <button class="keypadbuttons" label="3"  onclick={buttonOnClickHandler}>3</button>
                <button class="keypadbuttons" label="+"  onclick={buttonOnClickHandler}>+</button>
            </div>
            <div class="row">
                {/* row 5 */}
                <button class="keypadbuttons" label="blank"  onclick={buttonOnClickHandler}>    </button>
                <button class="keypadbuttons" label="0"  onclick={buttonOnClickHandler}>0</button>
                <button class="keypadbuttons" label="."  onclick={buttonOnClickHandler}>.</button>
                <button class="keypadbuttons" label="="  onclick={equalHandler}>=</button>
            </div>
        </>
    )
    return content
   
}

export default Keys;