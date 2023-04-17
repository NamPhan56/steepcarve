import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout'
import Home from './components/Home'
import ProjectHome from './components/features/projects/ProjectHome'
import RepositoryHome from './components/features/repository/RepositoryHome'
import SnowboardResortsHome from './components/features/projects/snowboardResortsApp/SnowboardResortsHome'


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
        <Route path="/repository" element={<RepositoryHome />} />
        <Route path="/projects/snowboardResortsApp" element={<SnowboardResortsHome />} />
      </Routes>
    </Router>
  );
}

export default App;
