import '../repository.css';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
    const content = (
        <div className="page">
            <header className="header">Web Develpoment Repository</header>

            <div className="categorybuttons">
                <Link className="Link" to ="/repository/webdevelopment/menstack">
                    <button>JavaScript</button>
                </Link>
                <Link className="Link" to ="/repository/webdevelopment/menstack">
                    <button>MEN Stack</button>
                </Link>
                <Link className="Link" to ="/repository/webdevelopment/mernstack">
                    <button>MERN Stack</button>
                </Link>
                <Link className="Link" to ="/repository/webdevelopment/reactmarkdown">
                    <button>React Markdown</button>
                </Link>
            </div>
        </div>
    )

    return content
}

export default WebDevelopment;