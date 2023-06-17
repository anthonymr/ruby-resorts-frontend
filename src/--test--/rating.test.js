import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Rating from '../components/detailspage/Rating';

it('renders correctly', () => {
  const rating = renderer
    .create(
      <Router>
        <Rating />
      </Router>,
    )
    .toJSON();
  expect(rating).toMatchSnapshot();
});
