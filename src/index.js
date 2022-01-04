import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Products from './page/Products';
import Item from './page/Item';
import Cart from './page/Cart';
import Setup from './page/Setup';
import Dashboard from './page/Dashboard';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/item" element={<Item />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/setup" element={<Setup />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
