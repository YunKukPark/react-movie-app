import React from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';
import './styles/fonts.css';

function Movie({ year, title, summary, poster, genres, rating, runtime }) {
  return (
    <div className="movie">
      <div className="movie-thumnail">
        <div className="movie-poster-wrap">
          <img src={poster} alt={title} />
        </div>

        <div className="movie-rate-wrap">
          <div className="rate-score">
            <i className="ic-star"></i>
            <strong className="rate-score-value">
              {rating}
              <span>/10</span>
            </strong>
          </div>
        </div>
      </div>

      <div className="movie-info-detail">
        <div className="movie-head">
          <h1 className="movie-title">{title}</h1>
          <ul className="movie-basic-info">
            <li className="movie-year">{year}</li>
            <li className="movie-runtime">{runtime}min</li>
          </ul>
          <ul className="genre-list">
            {genres.map(
              (genre, index) =>
                index < 3 && (
                  <li key={index} className="genre-item">
                    {genre}
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="movie-desc-wrap">
          <h4 className="movie-desc-title">Plot Summary</h4>
          <p className="movie-summary">
            {summary.length < 300 ? summary : `${summary.slice(0, 300)}...`}
          </p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number,
};

export default Movie;
