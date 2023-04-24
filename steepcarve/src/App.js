import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout'
import Home from './components/Home'
import ProjectHome from './components/features/projects/ProjectHome'
import SnowboardResortsHome from './components/features/projects/snowboardResortsApp/SnowboardResortsHome'

import Repository from './components/features/repository/Repository'
import WebDevelopment from './components/features/repository/webdevelopment/WebDevelopment'
import MERNStack from './components/features/repository/webdevelopment/mernstack/MERNStack'
import MENStack from './components/features/repository/webdevelopment/menstack/MENStack'
import ReactMarkdown from '/repository/webdevelopment/reactmarkdown/ReactMarkdown'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/repository">Repository</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectHome />} />
          <Route path="/projects/snowboardResortsApp" element={<SnowboardResortsHome />} />
        <Route path="/repository" element={<Repository />} />
          <Route path="/repository/webdevelopment" element={<WebDevelopment />} />
            <Route path="/repository/webdevelopment/mernstack" element={<MERNStack />} />
            <Route path="/repository/webdevelopment/menstack" element={<MENStack />} />   
            <Route path="/repository/webdevelopment/reactmarkdown" element={<ReactMarkdown />} />   
      </Routes>
    </Router>
  );
}

export default App;
