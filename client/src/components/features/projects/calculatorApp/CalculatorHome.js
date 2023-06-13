import '../projects.css';
import './calculator.css';

import CalculatorHarness from './CalculatorHarness';

const CalculatorHome = () => {
    
    const content = (
        <>
            <header><h1>Calculator App</h1></header>
            <p>This is the calculator app.</p>
            <hr/>

            <CalculatorHarness/>




        </>
    )
    return content
   
}

export default CalculatorHome