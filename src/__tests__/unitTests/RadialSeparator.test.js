import { render } from '../../--test--/test-utils'; // Import the custom render function
import RadialSeparator from '../../components/detailspage/RadialSeparator';

it('renders correctly', () => {
  const { asFragment } = render(<RadialSeparator />);
  expect(asFragment()).toMatchSnapshot();
});
