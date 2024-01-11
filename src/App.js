
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import Navbar from './components/navBar';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
