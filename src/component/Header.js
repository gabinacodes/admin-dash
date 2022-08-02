import React from 'react';
import Image from '../image/image'
import { Link, Outlet } from 'react-router-dom';
import Styles from   "../styles/modules/header.module.scss"
function Header() {
  return (
    <div>
      <div  className={Styles.nav1}>
        <img src={Image.logo} alt="logo"/>
       <div className={Styles.input} >
       <input type="text" placeholder='search'/>
        <button>Search</button>
       </div>
       <div  className={Styles.nav}>
       <img src={Image.account} alt="img"/>
       <p>Account</p>
       </div>
       <div  className={Styles.nav}>
       <img src={Image.wishlist} alt="img"/>
       <p>Wishlist</p>
       </div>
       <div  className={Styles.nav}>
       <img src={Image.cart} alt="img"/>
       <p>Cart</p>
       </div>
      </div>
      <div className={Styles.nav2}>
      <Link to="/">Home</Link>
        <Link> About Us</Link>
        <Link>Services </Link>
        <Link>Stock</Link>
        <Link>Hire </Link>
        <Link>Gallery</Link>
        <Link>Consultation</Link>
        <Link>Parts & Maintenance </Link>
        <Link>FAQs</Link>
        <Link>Contact Us</Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default Header;
