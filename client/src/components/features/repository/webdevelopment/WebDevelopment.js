import { Link } from 'react-router-dom';


const WebDevelopment = () => {
    const content = (
        <>
            <header><h1>Web Develpoment Repository</h1></header>

            <Link to ="/repository/webdevelopment/menstack">
                <button>MEN Stack</button>
            </Link>
            <br/>
            <Link to ="/repository/webdevelopment/mernstack">
                <button>MERN Stack</button>
            </Link>
            <br/>
            <Link to ="/repository/webdevelopment/reactmarkdown">
                <button>React Markdown</button>
            </Link>
        </>
    )

    return content
}

export default WebDevelopment;