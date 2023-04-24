import { Link } from 'react-router-dom';

const ProjectHome = () => {
    const content = (
        <>
            <header><h1>Welcome to the Projects</h1></header>

            <br></br>

            <Link to ="/projects/snowboardResortsApp">
                <button>Snowboard Resorts App</button>
            </Link>
        </>

    )
    return content
}

export default ProjectHome