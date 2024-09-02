// src/Cart.js
import React, { useEffect, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <Container className="mt-5">
        <Row>
          {cartItems.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;