import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './Main';
import Projectdetail from './Detail/Projectdetail';
import './common.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Detail/Projectdetail' element={<Projectdetail/>}/>
        </Routes>
      </Router>
  );
}

export default App;