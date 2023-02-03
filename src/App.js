import { Routes, Route } from 'react-router-dom'
import { ContactUs } from './pages/ContactUs';
import Home from './pages/Home';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/contact' element={<ContactUs />}/>


  </Routes>
  );
}

export default App;
