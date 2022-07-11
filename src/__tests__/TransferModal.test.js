import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../test-utils';
import TransferModal from '../components/TransferModal';

describe('TransferModal', () => {
  it('renders modal title', () => {
    const mockFn = jest.fn();

    render(<TransferModal isOpen={true} onClose={mockFn} />);

    const modalTitle = screen.getByTestId('modal-title');

    expect(modalTitle).toHaveTextContent('Transfer');
  });
});
