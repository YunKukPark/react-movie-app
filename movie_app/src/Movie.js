import React from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <div className="movie-thumnail">
        <img src={poster} alt={title} />

        <h3 className="movie__title">{title}</h3>
        <div className="movie-info">
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map(
              (genre, index) =>
                index <= 3 && (
                  <li key={index} className="movie__genres__genre">
                    {genre}
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      <div className="movie__data">
        <p className="movie__summary">{summary}</p>
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
};

export default Movie;
