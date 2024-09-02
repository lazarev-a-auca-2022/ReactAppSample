import React, { useEffect, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

// src/Cart.js

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cart');
                console.log('Fetched cart items:', response.data); // Add this line
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
                <h2>Cart:</h2>
                <ListGroup>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>

            
        </div>
    );
}

export default Cart;
