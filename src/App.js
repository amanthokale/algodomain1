import React, { useState } from 'react';
import './style.css';
import clothes from '../clothes.json';

export default function App() {
  const [cat, setcat] = useState('all');

  const set = (a) => {
    console.log(a);
    setcat(a);
  };
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
          <li onClick={(e) => set('all')}>All</li>
          <li onClick={(e) => set('top')}>Topwear</li>
          <li onClick={(e) => set('bottom')}>Bottomwear</li>
          <li onClick={(e) => set('acc')}>Accessories</li>
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
          <div className="json">
            {clothes
              .filter((val) => {
                if (cat == 'all') {
                  return val;
                  s;
                } else if (val.category == cat) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div class="item">
                    <img src={val.img} width="100" height="100" />
                    <p class="cent bold">{val.name}</p>
                    <h6 class="cent bold">${val.price}</h6>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
