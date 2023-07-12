import './projects.css';
import { Link } from 'react-router-dom';

const ProjectHome = () => {
    const content = (
        <div className="page">
            <header className="header">Welcome to the Projects</header>

            <Link to ="/projects/snowboardResortsApp" className="Link">
                <button>Snowboard Resorts App</button>
            </Link>
            <Link to ="/projects/calculatorApp" className="Link">
                <button>Calculator App</button>
            </Link>
            <Link to ="/projects/blogapp" className="Link">
                <button>Blog App</button>
            </Link>


        </div>

    )
    return content
}

export default ProjectHome