import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders page title', () => {
  const { getByText } = render(<App />);
  const pageTitle = getByText(/Web MIDI Api Visualizer/i);
  expect(pageTitle).toBeInTheDocument();
});
