import React, { useState } from 'react';

import '../projects.css';
import './calculator.css';
import MyCalculator from  './MyCalculator.js';

const CalculatorHarness = () => {
 const content = (
    <> 
      <div id="mycalc">
        <MyCalculator/>
      </div>
    </>
    )
    return content
}

export default CalculatorHarness;