import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders question component', () => {
  render(<App />);
  const titleElement = screen.getByText(/question 1/i);
  expect(titleElement).toBeInTheDocument();
});
