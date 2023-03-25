import React from 'react';
import { render, screen } from "@testing-library/react"
import { About } from '../pages/About';

describe('render heading', () => {
  it('renders correctly', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  })
})