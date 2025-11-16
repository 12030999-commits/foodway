
import React from 'react';
import MenuCard from '../components/MenuCard';
import { Row, Col } from 'react-bootstrap';


import burger from '../assets/burger.jpg';
import pizza from '../assets/pizza.jpg';
import pasta from '../assets/pasta.jpg';
import salad from '../assets/salad.jpg';

const items = [
  { name: 'Double Beef Burger', description: '2 Beef,Cheddar cheese , onion rings,grilled vegtables,lettuce', price: 8, Image: burger},
  { name: 'Pizza', description: 'cheesy pizza with grilled vegtables', price: 8,Image:pizza },
  { name: 'Pasta', description: 'Creamy pasta with chicken with signature sauce', price: 7, Image: pasta },
  { name: 'Salad', description: 'Fresh vegetable salad', price: 4,Image: salad},
];

function Menu({ addToCart }) {
  return (
    <Row className="mt-4">
      {items.map((item, idx) => (
        <Col md={6} lg={4} key={idx}>
          <MenuCard item={item} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  );
}

export default Menu;