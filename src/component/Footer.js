import React from 'react';
import Image from "../image/image"

function Footer() {
  return (
    <div>
      <div>
      <div> <img src={Image.logo} alt="logo"/> </div>
      <div>
        <p>Quick Links </p>
        <p>About Us</p>
        <p>Services</p>
        <p>Faqs</p>
      </div>
      <div>
        <p>Useful  Links </p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions </p>
        <p>Support</p>
      </div>
      <div>
      <p>Contact Us</p>
      <div>
        <img src={Image.phone} alt="tel"/>
        <p>+1 575 567 5673</p>
      </div>
      <div>
      <img src={Image.mail} alt="tel"/>
        <p>agromech@gmail.com</p>
      </div>
      </div>
      <div>
      
      </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
