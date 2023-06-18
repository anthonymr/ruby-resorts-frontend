import { render } from '../../testutils/test-utils'; // Import the custom render function
import PriceTable from '../../components/detailspage/PriceTable';

it('renders correctly', () => {
  const { asFragment } = render(<PriceTable />);
  expect(asFragment()).toMatchSnapshot();
});
