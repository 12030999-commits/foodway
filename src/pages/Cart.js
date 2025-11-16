import React from 'react';
import { ListGroup } from 'react-bootstrap';
import shoppingcarticon from'../assets/cart-bg.jpg';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-5 p-4 rounded text-white"
    style={{
      backgroundImage: 'url(${cart-bg.jpg})',
      backgroundSize :'cover',
      backgroundPosition : 'center',
      minHeight:'500px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      padding:'40px',
      
    }}
    >
      <div 
      style={{
        backgroundColor:'rgba(0,0,0,0.7)',
        padding:'30px',
        borderRadius:'10px',
        width :'100%',
        maxWidth:'600px',
        color:'white',
        boxShadow:'0 8px 20px rgba(0,0,0,0.3)'
      }}
      >
      
      <h1 className="mb-4 text-center" >Your cart </h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <ListGroup className="mb-3">
          {cart.map((item, idx) => (
            <ListGroup.Item key={idx} className="d-flex justify-content-between"
            style={{backgroundColor:'rgba(255,255,255,0.1)',color: 'white'}}
              >
              {item.name} <span>${item.price}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <h4 className="text-center"> Total: ${cart.reduce((sum, item)=> sum + item.price, 0)}</h4>
    <button 
    className="btn btn-success mt-3 w-100"
    onClick={() => { 
      if(cart.length ===0 ){
        alert("Your cart is Empty :(");
}else{ 
  alert("Order placed successfuly :) ");
}
}}
    >Order Now </button>

    </div>
    </div>
  );
}

export default Cart;