import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MenuCard({ item, addToCart }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
      variant="top"
      src={item.Image}
      alt={item.name}
      style={{maxHeight:'200px',objectFit:'cover'}}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text className="fw-bold">${item.price}</Card.Text>
        <Button variant="success" onClick={() => addToCart(item)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;