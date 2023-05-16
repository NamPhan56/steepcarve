import { Link } from 'react-router-dom';
import '../Features.css';
import './PortfolioHome.css';

const PortfolioHome = () => {
    
    const content = (
        <>
            <header>My Portfolio</header>
            {/* Header */}
            <p>
                Nam Phan<br/>
                Full Stack Developer<br/>
                Phone Number Placeholder <br/>
            </p>
            {/* Introduction */}
            <p>
                PhotoPlaceholder<br/>
                I am interested in APIs, Web Systems Design, and Microservices.<br/>
                I love how using and serving APIs bring together resources from so many difference places to provide a faster and richer experience for everyone.<br/>
            </p>

            {/* Skills */}
            <header>Skills</header>
            <p>
                I am a Full Stack Developer with skills in:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li> 
                    <li>JavaScript</li> 
                    <li>ReactJS</li> 
                    <li>MongoDB</li>
                    <li>AWS</li>
                </ul>
                I also have skills in:
                <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Salesforce's LWC</li>
                    <li>Salesforce's Apex</li>
                    <li>Salesforce's SOQL</li>
                </ul>
            </p>

            {/* Projects */}
            <header>Projects</header>
            <p>
                Feel free to check out my <Link to="/projects">projects!</Link>
            </p>

            {/* Experience */}
            <header>Experience</header>
            <p>
                Software Engineer for Revature
            </p>

            {/* Education */}
            <header>Education</header>
            <p>
                BS in Computer Science<br/>
                Universtiy of Massachusetts Amherst
            </p>

            {/* Contact */}
            <header>Contact</header>
            <p>
                Contact Email
            </p>

        </>
    )
    return content
   
}

export default PortfolioHome