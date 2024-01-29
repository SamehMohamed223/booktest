import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Author from './pages/Author';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Book from './pages/Book';

function App() {
  return (
    <HashRouter>
      <Header/>

      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/author' element={<Author/>} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/register' element={<Register/>} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/book/:id' element={<Book />} /> 
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
