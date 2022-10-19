import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import { ShortenContextProvider } from './Context/ShortenContext';

function App() {
  return (
    <ShortenContextProvider>
      <div className="app-container">
        <Navbar />
        <Homepage />
      </div>
        <Footer />
    </ShortenContextProvider>
  );
}

export default App;
