import './projects.css';
import { Link } from 'react-router-dom';

const ProjectHome = () => {
    const content = (
        <>
            <header>Welcome to the Projects</header>

            <br></br>
            <body>

                <Link to ="/projects/snowboardResortsApp">
                    <button>Snowboard Resorts App</button>
                </Link>
                <br/>
                <Link to ="/projects/calculatorApp">
                    <button>Calculator App</button>
                </Link>
            </body>
        </>

    )
    return content
}

export default ProjectHome