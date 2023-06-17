import { render } from './test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/detailspage/Details';

it('renders correctly', () => {
  const { asFragment } = render(
    <Router>
      <Details />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
