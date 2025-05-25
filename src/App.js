import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home  from './pages/Home';
import  Register  from './pages/Register';
import  Login  from './pages/Login';
import Profiles from './pages/Profiles';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/profiles' element={<Profiles/>}/>
    </Routes>
    </BrowserRouter>
    </>
      

  )
}
export default App;
