import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Logs files', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Logs file/i);
    expect(linkElement).toBeInTheDocument();
  });
});