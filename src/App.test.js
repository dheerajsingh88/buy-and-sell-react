import { render, screen } from '@testing-library/react';
import Ads from './routes/Ads';

test('renders learn react link', () => {
  render(<Ads />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
