import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../../components/Counter';

test('Counter increments when button clicked', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
  await userEvent.click(button);
  expect(count).toHaveTextContent('1');
});
