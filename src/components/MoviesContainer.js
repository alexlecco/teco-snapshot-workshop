import React from 'react';
import './MoviesContainer.css';

const MoviesContainer = ({ movies = [] }) => {
  if (movies.length <= 0) {
    return <>No se encontraron películas</>
  } else {
    return <>
      <ol>
        {movies.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ol>
    </>
  }
};

export default MoviesContainer;
