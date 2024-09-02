// src/Shop.js
function Shop() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  ];

  const addToCart = async (product) => {
    try {
      const { id, ...productWithoutId } = product; // Exclude the id field
      await axios.post('http://localhost:5000/api/cart', productWithoutId);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div>
      <NavbarComponent />
      <Container className="mt-5">
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}