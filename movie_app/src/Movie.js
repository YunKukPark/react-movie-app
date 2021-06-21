import React from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';
import './styles/fonts.css';

function Movie({ year, title, summary, poster, genres, rating }) {
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
          <div className="rate-participate">
            <i className="ic-star"></i>
            <strong>Rate this</strong>
          </div>
          <div className="rate-participate">
            <i className="ic-star"></i>
            <strong>Rate this</strong>
          </div>
        </div>
      </div>

      <h3 className="movie-title">{title}</h3>
      <div className="movie-info">
        <h5 className="movie-year">{year}</h5>
        <ul className="genre-list">
          {genres.map((genre, index) => (
            <li key={index} className="genre-item">
              {genre}
            </li>
            // TODO: overflow-x scroll 처리 할 것.
          ))}
        </ul>
      </div>
      <div className="movie-data">
        <p className="movie-summary">{summary}</p>
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
};

export default Movie;
