import React, { useState, Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import './style/bootstrap.css';
import './style/home.css';
import Star from './Star';
import Movies from './Movies';
import Pagination from './Pagination';

function App() {

  const [value, setValue] = useState({
    movies: [],
    keyword: '',
    genre: '',
    year: '',
    language: '',
    rating: ''
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(12);
  
  const formatData = (movies, index) => {
    return{
      "id" : index,
      "title" : movies.title.value,
      "director" : movies.director.value,
      "genre" : movies.genre.value, 
      "year" : movies.year.value, 
      "language" : movies.language.value,
      "rating" : movies.rating.value,
      "poster"  : movies.poster.value,
      "imdb"  : movies.imdb.value,
      "streaming" : movies.streaming ? movies.streaming.value : "-"
    }
  }

  const getData = async () => {
    setLoading(true);
    // untuk local
    // const BASE_URL ="http://localhost:3030/movind/query";
    // untuk deploy
    const BASE_URL ="https://qrary-fuseki-service.herokuapp.com/movind/query";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    console.log(value);
    const queryData = {
      query:
      `PREFIX mc: <https://movie.com/list/moviecatalog#>
      
      SELECT ?title ?director ?genre ?year ?language ?rating ?poster ?streaming ?imdb
      WHERE
      {
        ?m            mc:title			  ?title;
                      mc:director		  ?director;
                      mc:genre			  ?genre;
                      mc:year       	?year;
                      mc:language			?language;
                      mc:rating			  ?rating;
                      mc:poster			  ?poster;
                      mc:imdb				  ?imdb;
        OPTIONAL{?m   mc:streaming    ?streaming.}
        FILTER contains(lcase(str(?title)), lcase(str("${value.keyword ? value.keyword : ''}")))
        FILTER contains(lcase(str(?genre)), lcase(str("${value.genre ? value.genre : ''}")))
        FILTER contains(?year, "${value.year ? value.year : ''}")
        FILTER contains(lcase(str(?language)), lcase(str("${value.language ? value.language : ''}")))
        FILTER (?rating > ${value.rating ? value.rating-1 : 0})
      }`
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: 'POST',
        headers,
        data: qs.stringify(queryData)
      });
      console.log(data);

      const data_formatted = data.results.bindings.map((movies, index) => formatData(movies, index));
      console.log(data_formatted);
      
      setValue({
        ...value,
        movies : data_formatted
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

  }

  const keywordHandler = event =>{
    setValue({
      ...value,
      'keyword': event.target.value,
    });
    console.log(value.keyword);
  }

  const genreHandler = event =>{
    setValue({
      ...value,
      'genre': event.target.value,
    });
    console.log(value.genre);
  }

  const yearHandler = event =>{
    setValue({
      ...value,
      'year': event.target.value,
    });
    console.log(value.year);
  }

  const languageHandler = event =>{
    setValue({
      ...value,
      'language': event.target.value,
    });
    console.log(value.language);
  }

  const ratingHandler = event =>{
    setValue({
      ...value,
      'rating': event.target.value,
    });
    console.log(value.rating);
  }

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = value.movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="bg-dark txt-lightc">
      <nav className="navbar navbar-dark bg-dark shadow mb-5">
        <div className="container">
          <a
            href="/"
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
        <div className="row">
          <div className="container text-center">
            <p className="mb-4 text-light ">
              Looking for a movie? You can find movies with keywords and specified
              categories
            </p>
          </div>
        </div>
        <form>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <img className="search-icon-size" src="icon/icon-search.svg" alt="search" />
                </div>
                <input
                  value={value.keyword}
                  onChange={keywordHandler}
                  name="search"
                  id="search"
                  className="form-control form-control-lg border-0 rounded-pill"
                  type="text"
                  placeholder="Search Movie Title"
                />
                <input
                  className="btn btn-success ml-3 px-4"
                  style={{ fontWeight: "bold", fontSize: 17 }}
                  type="button"
                  value="Search"
                  onClick={getData}
                />
              </div>
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col-6 col-md-6 col-lg-2 offset-lg-2">
              <label htmlFor="genre">Genre :</label>
              <select value={value.genre} onChange={genreHandler} name="genre" id="genre" className="custom-select">
                <option value="">-All-</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="horror">Horror</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="war">war</option>
                <option value="mystery">Mystery</option>
                <option value="music">Music</option>
                <option value="crime">Crime</option>
                <option value="thriller">Thriller</option>
                <option value="history">History</option>
                <option value="adventure">Adventure</option>                
              </select>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <label htmlFor="year">Year</label>
              <select value={value.year} onChange={yearHandler} name="year" id="year" className="custom-select">
                <option value="">-All-</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
              </select>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <label htmlFor="language">Language</label>
              <select value={value.language} onChange={languageHandler} name="language" id="language" className="custom-select">
                <option value="">-All-</option>
                <option value="english">English</option>
                <option value="indonesian">Indonesian</option>
              </select>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <label htmlFor="rating">Min. Rating</label>
              <select value={value.rating} onChange={ratingHandler} name="rating" id="rating" className="custom-select">
                <option value="">-All-</option>
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
              Movies Found = <strong>{value.movies.length}</strong>
            </h4>
          </div>
          <Pagination moviesPerPage={moviesPerPage} totalMovies={value.movies.length} paginate={paginate} />
            {/* Content Start */}
            <Movies movies={currentMovies} loading={loading} />
            {/* content end */}
          <Pagination moviesPerPage={moviesPerPage} totalMovies={value.movies.length} paginate={paginate} />
        </div>
      </div>
    </div>

  );
}

export default App;
