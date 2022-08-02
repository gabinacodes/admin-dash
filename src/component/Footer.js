import React from 'react';
import Image from "../image/image"

function Footer() {
  return (
    <div>
        <div>
            <img src={Image.tractor} alt="tractor"/>
            <h5>New to AgroMech?</h5>
            <p>Then join our mailing list to get weekly updates of new stocks and offers</p>
          <div>
          <input type="text" placeholder="Enter your email address"/>
            <button>Submit</button>
          </div>
        </div>
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
       <img  src={Image.twitter}alt='logo'/>
       <img src={Image.facebook} alt='logo'/>
       <img src={Image.instagram} alt='logo'/>
      </div>
      </div>
      <div>
        <p>We have built a place where our customers can rely on to deliver geninue and excellent products to care for their farming and business needs. We are able to supply a wide range of machinery from reputable manufactures such as, New Holland, John Deere, JCB, Case and Massey Ferguson, to name a few.</p>
      </div>
      <div>
        <p>Copyright @2022. All rights reserved. AgroMech - RC 203884</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
