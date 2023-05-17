import { Link } from 'react-router-dom';

import './repository.css';

const Repository = () => {
    const content = (
        <>
            <header><h1>Welcome to the Repository</h1></header>

            <Link to ="/repository/webdevelopment">
                <button>Web Development</button>
            </Link>
        </>
    )
    return content
}

export default Repository