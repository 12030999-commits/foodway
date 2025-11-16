import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import contactus from '../assets/contactus.jpg';



function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent: ' + message);
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
    
      <h1>Contact Us</h1>
      <p>We are here and ready to take your orders and answer your questions</p>
    
       <button
       className="call-button"
       onClick={()=> alert("calling +96171037706...")} >Call FoodWay +96171037706 </button>
       
        <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button className="mt-3" type="submit" variant="dark">
          Send
        </Button>
        
      </Form>
      <div className="contact-info">
        <p>Location: Beirut , Lebanon</p>

        </div>
      </div>

      <div className="contact-right">
        <img src={contactus} alt="Contact"/>
      </div>

      
    </div>
  );
}
    <div className="contactus-image">
      <img src={contactus} alt="Contact"/>
      </div>
  


export default Contact;