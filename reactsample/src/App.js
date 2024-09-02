import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React initialized successfully</h1>
          
          <Link to="/about">
            <Button variant="light">Light</Button>{' '}
          </Link>
          
        </header>
      </div>
    </>
    
  );
}

export default App;

