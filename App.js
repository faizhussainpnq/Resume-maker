import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Resumebuilder from './Component/Resumebuilder';
// import Preview1 from './Component/Preview1';
import Aboutus from './Component/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
  <>
  <Router>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/resumebuilder' element={<Resumebuilder/>}/>
    {/* <Route path='/preview' element={<Preview1/>}/> */}
    <Route path='/aboutus' element={<Aboutus/>}/>

  </Routes>
  </Router>
  
  </>
  );
}

export default App;
  