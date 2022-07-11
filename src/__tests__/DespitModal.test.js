import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import DepositModal from '../components/DepositModal';

describe('DepositModal', () => {
  it('renders modal title', () => {
    const mockFn = jest.fn();

    render(<DepositModal isOpen={true} onClose={mockFn} />);

    const modalTitle = screen.getByTestId('modal-title');

    expect(modalTitle).toHaveTextContent('Deposit');
  });
});
