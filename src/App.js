import React from 'react';
import './style.css';
import Topwear from './Topwear';

export default function App() {
  return (
    <>
      <div className="head">
        <h1 id="leftnav">
          <img src="https://uilogos.co/img/logotype/treva.png" alt="" />
        </h1>
      </div>
      <div className="search">
        <div>
          <input type="search" placeholder="Search for products" />
          <input id="btn" type="button" value="search" />
        </div>
      </div>

      <div class="categories">
        <ul>
          <li>Popular</li>
          <li>Best sellers</li>
          <li>Topwear</li>
          <li>Bottomwear</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="bodysec">
        <div id="filter">
          <h2>Filter</h2>
          <div className="price">
            <h5>Price Range</h5>
            <input type="text" />
            <h6>TO</h6>
            <input type="text" />
            <button>Add Filter</button>
          </div>
        </div>
        <div id="products">
          <Topwear />
        </div>
      </div>
    </>
  );
}
