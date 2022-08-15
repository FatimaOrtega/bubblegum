import React, { Component } from 'react';
import 'reset-css'
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';

const navigation = {
  brand: { name: "Bubblegumgemz", to: "/" },
  links: [
    { name: "Shop", to: '/about'},
    { name: "Yasmin", to: "/blog" },
    { name: "About Us", to: "/dev" },
    
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
      </div>
    );
  }
}
