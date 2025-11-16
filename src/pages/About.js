import React from 'react';

function About() {
  return (
    <div className="mt-5 text-center" >
      <img
      src={require ('../assets/team.jpg')}
      alt="About us"
      className='img-fluid rounded mb-3'
      />
      <h1>About Us</h1>
      <p className="mx-auto" style={{maxWidth:'700px'}}>
        With the taste and experience of our team , We provide delicious meals delivered straight to your door.
        Enjoy a seamless online ordering experience with our restaurant.
      </p>
      <footer>Location : Beirut Lebanon 
        <p>We Open 24/7 </p>
      </footer>
    </div>
    
  );
}

export default About;