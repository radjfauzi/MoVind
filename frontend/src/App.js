import React, { useState } from 'react';
import logo from './logo.svg';
import './style/bootstrap.css';
import './style/home.css';
// import './materialize/materialize.js';

function App() {

  const [value, setValue] = useState({

  });

  return (
    <div className="bg-dark txt-lightc">
      <nav className="navbar navbar-dark bg-dark shadow mb-5">
        <div className="container">
          <a
            className="navbar-brand mx-auto"
            style={{ fontSize: "30px !important" }}
          >
            MoVind
          </a>
        </div>
      </nav>
      <div className="container">
        <form action>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <img className="search-icon-size" src="icon/icon-search.svg" alt />
                </div>
                <input
                  name="search"
                  id="search"
                  className="form-control form-control-lg border-0 rounded-pill"
                  type="text"
                  placeholder="Search Movie Title"
                />
                <button className="btn btn-success ml-3 px-4">Search</button>
              </div>
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col-6 offset col-md-6 col-lg-2 offset-lg-2">
              <label htmlFor="genre">Genre :</label>
              <select name="genre" id="genre" className="custom-select">
                <option value="all" selected>
                  -All-
                </option>
                <option value="sci-fi">Sci-fi</option>
                <option value="horror">Horror</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
              </select>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <label htmlFor="year">Year</label>
              <select name="year" id="year" className="custom-select">
                <option value="all">-All-</option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option value={2018}>2019</option>
                <option value={2017}>2017</option>
                <option value={2016}>2016</option>
              </select>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <label htmlFor="language">Language</label>
              <select name="language" id="language" className="custom-select">
                <option value="all">-All-</option>
                <option value="english">English</option>
                <option value="indonesian">indonesian</option>
              </select>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <label htmlFor="rating">Min. Rating</label>
              <select name="rating" id="rating" className="custom-select">
                <option value="all" selected>
                  -All-
                </option>
                <option value={9}>9</option>
                <option value={8}>8</option>
                <option value={7}>7</option>
                <option value={6}>6</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}

export default App;
