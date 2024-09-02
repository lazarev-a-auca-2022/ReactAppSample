// src/App.js
import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import './App.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className='text-center mt-5'>
        <h1>Home</h1>
        <p>Sample text</p>
      </div>
    </div>
  );
}

export default App;