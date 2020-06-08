import React from 'react';
import Star from './Star';

const Movies = ({movies, loading}) => {
  if (loading) {
    return <h5 className="text-center">Loading...</h5>
  }

  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.id}
          className="col-5 offset-1 col-sm-4 offset-sm-0 col-md-3 col-lg-3 offset-lg-0 justify-content-center">
          <div className="card bg-dark border border-light mb-3 shadow-lg">
            <img
              className="card-img-top border-bottom border-light rounded-bottom poster-size"
              src={movie.poster}
              alt="poster_img"
            />
            <div className="card-body">
              <h5 className="card-title text-center title-height">
                {movie.title}
              </h5>
                <Star rates={movie.rating}/>
            </div>
            <div className="container pb-2 card-font-size">
              <table>
                <tbody>
                  {/* Show Director */}
                  <tr className="dir-height">
                    <th scope="row" className="align-text-top">
                      Director
                    </th>
                    <td className="align-text-top">&nbsp;:&nbsp;</td>
                    <td className="align-text-top">{movie.director}</td>
                  </tr>
                  {/* Show Genre */}
                  <tr className="gnr-height">
                    <th scope="row" className="align-text-top">
                      Genre
                    </th>
                    <td className="align-text-top">&nbsp;:&nbsp;</td>
                    <td className="align-text-top">{movie.genre}</td>
                  </tr>
                  {/* Show Year */}
                  <tr>
                    <th scope="row">Year</th>
                    <td>&nbsp;:&nbsp;</td>
                    <td>{movie.year}</td>
                  </tr>
                  {/* Show Language */}
                  <tr>
                    <th scope="row">Language</th>
                    <td>&nbsp;:&nbsp;</td>
                    <td>{movie.language}</td>
                  </tr>
                  {/* Show Streaming */}
                  <tr>
                    <th scope="row" className="align-text-top stream-height">
                      Streaming
                    </th>
                    <td className="align-text-top">&nbsp;:&nbsp;</td>
                    <td className="align-text-top">{movie.streaming}</td>
                  </tr>
                </tbody>
              </table>
              <a href={movie.imdb} target="_blank" className="imdb">
                <img src="icon/imdb.png" alt="imdb" className="mx-auto d-block w-25" />
              </a>
            </div>
          </div>
        </div>
        ))}
      </div>
  );
};

export default Movies;