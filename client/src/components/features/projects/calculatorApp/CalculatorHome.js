import '../projects.css';
import './calculator.css';

import CalculatorHarness from './CalculatorHarness';

const CalculatorHome = () => {
    const content = (
        <div className="page">
            <header className="header">Calculator App</header>
            <p>This is the calculator app.</p>
            <hr/>

            <CalculatorHarness/>
        </div>
    )
    return content
}

export default CalculatorHome