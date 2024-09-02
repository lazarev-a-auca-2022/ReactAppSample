import React from 'react';
import Button from 'react-bootstrap/Button';
import NavbarComponent from './components/NavbarComponent';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <NavbarComponent />
      <div className='text-center mt-5'>
        <h1>Shop</h1>
        <p>Sample text</p>
      </div>
    </div>
  );
}

export default About;