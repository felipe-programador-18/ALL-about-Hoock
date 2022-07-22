
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutAdding from './pages/about';
import Home from './pages/home';
import Sobre from './pages/sobre';



function App() {
    
  
  return (<div className='App'>
  <AboutAdding/>
 <Routes>
    <Route path='/' element={<Home/>}  />
    <Route  path='/sobre' element={<Sobre/>} />
 
 </Routes>
 </div>
  );
}

export default App;
