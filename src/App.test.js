import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/vamo' a aprender snapshot testing/i);
  expect(linkElement).toBeInTheDocument();
});
