import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Cart from "./pages/Cart";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}>
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />
        </Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
