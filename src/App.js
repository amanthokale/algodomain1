import React, { useState } from 'react';
import './style.css';
import clothes from '../clothes.json';

export default function App() {
  const [cat, setcat] = useState('all');
  const [search, setsearch] = useState('');
  const [l, setl] = useState(0);
  const [r, setr] = useState(100);
  const setf = (a) => {
    console.log(a);
    setcat(a);
  };

  const searchf = (a) => {
    setcat('none');
    setsearch(a);
  };
  const addfilter = (a) => {
    setcat('none');
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
          <input
            onChange={(e) => {
              searchf(e.target.value);
            }}
            type="search"
            placeholder="Search for products"
          />
          <input id="btn" type="button" value="search" />
        </div>
      </div>

      <div class="categories">
        <ul>
          <li onClick={(e) => setf('all')}>All</li>
          <li onClick={(e) => setf('top')}>Topwear</li>
          <li onClick={(e) => setf('bottom')}>Bottomwear</li>
          <li onClick={(e) => setf('acc')}>Accessories</li>
        </ul>
      </div>
      <div className="bodysec">
        <div id="filter">
          <h2>Filter</h2>
          <div className="price">
            <h5>Price Range</h5>
            <input
              onChange={(e) => {
                setl(e.target.value);
                setcat('none');
              }}
              placeholder={l}
              type="text"
            />
            <h6>TO</h6>
            <input
              onChange={(e) => {
                setr(e.target.value);
                setcat('none');
              }}
              placeholder={r}
              type="text"
            />
            <button
              onClick={(e) => {
                addfilter();
              }}
            >
              Add Filter
            </button>
          </div>
        </div>
        <div id="products">
          <div className="json">
            {clothes
              .filter((val) => {
                if (cat == 'all') {
                  return val;
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

          <div className="json">
            {clothes
              .filter((val) => {
                if (search === '') {
                  return;
                }
                if (val.name.toLowerCase().includes(search.toLowerCase())) {
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
          <div className="json">
            {clothes
              .filter((val) => {
                if (val.price > l && val.price < r) {
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
