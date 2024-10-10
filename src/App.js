
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Login />} />
<Route path='/main' element={
   <Home />} />
   </Routes>
   </>
  );
}

export default App;
