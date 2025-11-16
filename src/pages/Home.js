import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Home() {
  return (
    <div className="text-center mt-5">
      <img 
      src={require ('../assets/restaurantInterior.jpg')}
      alt="Restuarant Interior"
      className="img-fluid rounded mb-4"
      style={{maxHeight:'300px', objectFit:'cover'}}
      />
      <h1 className="display-4">Welcome to FoodWay Restuarant,Online Ordering Restaurant</h1>
      <p className="lead">Order your favorite meals online quickly and easily!
      </p>
    </div>
  );
}

export default Home;