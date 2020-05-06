import React from 'react';
import { render } from '@testing-library/react';
import Visualizer from '../components/Visualizer';

test('renders notes and velocities sections', () => {
  const { getByText } = render(<Visualizer />);
  const notes = getByText(/Notes/i);
  const velocities = getByText(/Velocities/i);
  expect(notes).toBeInTheDocument();
  expect(velocities).toBeInTheDocument();
});