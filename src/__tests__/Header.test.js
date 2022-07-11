import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import Header from '../components/Header';

describe('Header', () => {
  it('renders `Palm NFT Dashboard`', () => {
    const mockFn = jest.fn();

    render(
      <Header
        profileImg="https://bit.ly/ryan-florence"
        handleLogout={mockFn}
        handleClickDeposit={mockFn}
        handleClickTransfer={mockFn}
      />
    );

    const logoTitle = screen.getByTestId('logo-title');

    expect(logoTitle).toHaveTextContent('Palm NFT Dashboard');
  });
});
