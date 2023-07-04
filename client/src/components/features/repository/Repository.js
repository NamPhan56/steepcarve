import { Link } from 'react-router-dom';

import './repository.css';

const Repository = () => {
    const content = (
        <div className="page">
            <header className="header">Welcome to the Repository</header>

            <Link className="Link" to ="/repository/webdevelopment">
                <button>Web Development</button>
            </Link>
        </div >
    )
    return content
}

export default Repository