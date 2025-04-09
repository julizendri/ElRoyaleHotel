import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Facilities } from './pages/Facilities';
import { Around } from './pages/Around';
import { OurHotel } from './pages/OurHotel';
import { RoomsRates } from './pages/RoomsRates';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Blog' element={<Blog />}>Blog</Route>
          <Route path='Contact' element={<Contact />}></Route>
          <Route path='Facilities' element={<Facilities />}></Route>
          <Route path='Around' element={<Around />}></Route>
          <Route path='OurHotel' element={<OurHotel />}></Route>
          <Route path='RoomsRates' element={<RoomsRates />}></Route>
          <Route path='Error' element={<Error />}></Route>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
