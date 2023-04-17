import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout'
import Home from './components/Home'

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/repoisitory" element={Repository />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
