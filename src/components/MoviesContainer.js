import React from 'react';

const MoviesContainer = ({ movies = [] }) => {
  if (movies.length <= 0) {
    return <>No se encontraron películas</>
  } else {
    return <>
      {movies.map((item, index) => {
        return <h4 key={index}>{item}</h4>
      })}
    </>
  }
};

export default MoviesContainer;
