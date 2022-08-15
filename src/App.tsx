import React, { Component } from 'react';
import 'reset-css'
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './pages/about/About';
import Yasmin from './pages/yasmin/Yasmin';
import Contact from './pages/contact/Contact';


const navigation = {
  brand: { name: "Bubblegumgemz", to: "" },
  links: [
    { name: "Shop", to: '/'},
    { name: "Yasmin", to: "/yasmin" },
    { name: "About Us", to: "/about" },
    { name: "Contact Information", to: "/contact" },
    
  ]
}

export default class App extends Component {
  // the 'public' is a typescript feature. 
  public render() {

	// Descructured object for cleaner code :-)
    const { brand, links } = navigation;

    return (
      <div className="App">
        <Navbar brand={brand} links={links} />
        <Router>
        <Routes>
          {/* Go to main page by accessing http://localhost:3000/main */}
        <Route 
            path="/about" 
            element={<About/>}
        />

        <Route 
            path="/yasmin"
            element={<Yasmin />}
        />
        <Route 
            path="/contact"
            element={<Contact />}
        />
        </Routes>
      </Router>
      </div>
    );
  }
}
