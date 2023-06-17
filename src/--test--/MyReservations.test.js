import { BrowserRouter as Router } from 'react-router-dom';
import { render } from './test-utils';
import MyReservations from '../components/myReservationsPage/MyReservations';

it('renders correctly', () => {
  const { asFragment } = render(
    <Router>
      <MyReservations />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
