import  {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes.jsx';
import Favorites from './pages/Favorites';
import Navbar from './components/NavBar.jsx';


import './styles/App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Quotes" element={<Quotes />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </>
  );
}

export default App;