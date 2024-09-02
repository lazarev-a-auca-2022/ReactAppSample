import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the web app.</p>
      <Link to="/">
      <Button variant="primary">Home</Button>
      </Link>
    </div>
  );
}

export default About;