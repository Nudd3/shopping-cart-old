import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('render navbar items', () => {
  it('renders shop link', () => {
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Shop')).toBeInTheDocument();
  });

  it('renders about link', () => {
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});

