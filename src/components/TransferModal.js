import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { transfer } from '../store/transactionSlice';

const TransferModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [toAddress, setToAddress] = useState('');

  const handleSubmit = () => {
    dispatch(
      transfer({
        amount,
        toAddress,
      })
    );

    // reset values
    setAmount(0);
    setToAddress('');

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Transfer</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <Input type="number" onInput={e => setAmount(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>To</FormLabel>
            <Input type="text" onInput={e => setToAddress(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            disabled={!amount || !toAddress}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TransferModal;
