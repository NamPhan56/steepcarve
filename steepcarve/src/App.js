import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import Public from './components/Public'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index elmeent={<Public /> } />
      </Route>
    </Routes>
  );
}

export default App;
