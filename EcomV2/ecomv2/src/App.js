import React from 'react';
import './App.css';
import Home from './Components/Home/home';
import { Route, Routes } from "react-router-dom";
import Contact from './Components/Contact/contact';
import NavBar from './Components/NavBar/navBar';
import Footer from './Components/Footer/footer';
import Product from './Components/Product/product';

function App() {
  return (
       
      <div className="App">
        <ul>
          <li><a href="home.js">Home</a></li>
          <li><a href="product.js">Pieces</a></li>
          <li><a href="contact.js">Contact</a></li>
        </ul>
      </div>
       
  );
}

export default App;


{/* <div className="App">
        <Routes>
            <NavBar />
          <Route exact path='/' component={Home}/>
          <Route exact path='/Product' element={Product}/>
          <Route exact path='/Contact' element={Contact}/>
          <Footer />
        </Routes>
      </div> */}