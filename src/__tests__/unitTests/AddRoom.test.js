import { render } from '../../--test--/test-utils'; // Import the custom render function
import AddRoom from '../../components/addRoom/AddRoom';

it('renders correctly', () => {
  const { asFragment } = render(<AddRoom />);
  expect(asFragment()).toMatchSnapshot();
});
