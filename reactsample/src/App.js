// src/App.js
import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import './App.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className='text-center mt-5'>
        <div className='d-flex justify-content-center align-items-center mx-auto' style={{ width: '800px', height: '400px' }}>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default App;