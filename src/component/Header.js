import React from 'react';
import Image from '../image/image'
import { Link, Outlet } from 'react-router-dom';
import Styles from   "../styles/modules/header.module.scss"
function Header() {
  return (
    <div className={Styles.nav1}>
      <div>
        <img src={Image.logo}/>
       <div>
       <input type="text" placeholder='search'/>
        <input type="submit" value="Search"/>
       </div>
       <div>
       <img src={Image.account}/>
       <p>Account</p>
       </div>
       <div>
       <img src={Image.wishlist}/>
       <p>Wishlist</p>
       </div>
       <div>
       <img src={Image.cart}/>
       <p>Cart</p>
       </div>
      </div>
      <div>
      <Link to="/">Home</Link>
        <a> About Us</a>
        <a>Services </a>
        <a>Stock</a>
        <a>Hire </a>
        <a>Gallery</a>
        <a>Consultation</a>
        <a>Parts & Maintenance </a>
        <a>FAQs</a>
        <a>Contact Us</a>
      </div>
      <Outlet/>
    </div>
  );
}

export default Header;
