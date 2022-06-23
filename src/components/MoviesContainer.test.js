import React from 'react';
import renderer from 'react-test-renderer';

import MoviesContainer from './MoviesContainer';

it ('renderizar mensaje cuando no hay peliculas', () => {
  const tree = renderer.create(<MoviesContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it ('renderizar cuando hay solo 1 película', () => {
  const tree = renderer.create(<MoviesContainer movies={['Shrek']} />).toJSON();
  expect(tree).toMatchSnapshot();
});
