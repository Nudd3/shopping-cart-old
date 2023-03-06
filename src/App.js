import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';


function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
