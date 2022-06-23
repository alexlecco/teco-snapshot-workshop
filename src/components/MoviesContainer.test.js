import React from 'react';
import renderer from 'react-test-renderer';

import MoviesContainer from './MoviesContainer';

it ('renderizar mensaje cuando no hay peliculas', () => {
  const tree = renderer.create(<MoviesContainer />);
  expect(tree).toMatchSnapshot();
});
