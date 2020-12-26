import React from 'react';
import { render, screen } from '@testing-library/react';
import RemainingLife from './components/RemainingLife';

test('renders learn react link', () => {
  render(<RemainingLife />);
  const linkElement = screen.getByText(/Remaining Life/i);
  expect(linkElement).toBeInTheDocument();
});
