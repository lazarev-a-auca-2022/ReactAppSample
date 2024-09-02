import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React initialized successfully</h1>
        <Link to="/about">
          <button className="green-button">Go to About Page</button>
        </Link>
      </header>
    </div>
  );
}

export default App;