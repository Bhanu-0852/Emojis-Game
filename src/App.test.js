import { render, screen } from '@testing-library/react';
import App from './App';

test('renders emoji game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Emoji Game/i);
  expect(titleElement).toBeInTheDocument();
});
