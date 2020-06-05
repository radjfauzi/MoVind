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
        <div className="row justify-content-center">
          <h3>Find Your Movies Here !!!</h3>
        </div>
        <div className="row justify-content-center">
          <p className="mb-4 text-light">
            Looking for a movie? You can find movies with keywords and specified
            categories
          </p>
        </div>
        <form action>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <img className="search-icon-size" src="icon/icon-search.svg" alt="search" />
                </div>
                <input
                  name="search"
                  id="search"
                  className="form-control form-control-lg border-0 rounded-pill"
                  type="text"
                  placeholder="Search Movie Title"
                />
                <button
                  className="btn btn-success ml-3 px-4"
                  style={{ fontWeight: "bold", fontSize: 17 }}
                >
                  Search
                </button>
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
                <option value={2018}>2018</option>
                <option value={2017}>2017</option>
                <option value={2016}>2016</option>
                <option value={2015}>2015</option>
              </select>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <label htmlFor="language">Language</label>
              <select name="language" id="language" className="custom-select">
                <option value="all">-All-</option>
                <option value="english">English</option>
                <option value="indonesian">Indonesian</option>
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
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-darkc">
        <div className="container mt-5">
          <div className="row justify-content-center mb-4">
            <h4 className="mt-4">
              Movies Found = <strong>1</strong>
            </h4>
          </div>
          {/* Content Start */}
          <div className="row">
            <div className="col-lg-3">
              <div className="card bg-dark border border-light mb-3 shadow-lg">
                <img
                  className="card-img-top border-bottom border-light rounded-bottom"
                  src="poster/central_intelligence.jpg"
                  alt="midnight_sun_poster"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Avengers : Age Of Ultron
                  </h5>
                  <div className="text-center">
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <img
                      src="icon/icon-star.svg"
                      alt="star"
                      className="star-icon-size align-middle"
                    />
                    <span className="text-muted">(10)</span>
                  </div>
                </div>
                <div
                  className="container pb-2"
                  style={{ fontSize: "15px !important" }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <th scope="row" className="align-text-top">
                          Director
                        </th>
                        <td className="align-text-top">&nbsp;:&nbsp;</td>
                        <td>Fahmiau</td>
                      </tr>
                      <tr>
                        <th scope="row" className="align-text-top">
                          Genre
                        </th>
                        <td className="align-text-top">&nbsp;:&nbsp;</td>
                        <td>Drama, Romance</td>
                      </tr>
                      <tr>
                        <th scope="row">Year</th>
                        <td>&nbsp;:&nbsp;</td>
                        <td>2018</td>
                      </tr>
                      <tr>
                        <th scope="row">Language</th>
                        <td>&nbsp;:&nbsp;</td>
                        <td>Indonesian</td>
                      </tr>
                      <tr>
                        <th scope="row" className="align-text-top">
                          Streaming
                        </th>
                        <td className="align-text-top">&nbsp;:&nbsp;</td>
                        <td>Netflix, Google Play</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="https://www.imdb.com/" target="_blank">
                    <img src="icon/imdb.png" alt="imdb" className="mx-auto d-block w-25" />
                  </a>
                </div>
              </div>
            </div>
            {/* content end */}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
