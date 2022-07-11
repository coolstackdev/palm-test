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

import { deposit } from '../store/transactionSlice';

const DepositModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [fromAddress, setFromAddress] = useState('');

  const handleSubmit = () => {
    dispatch(
      deposit({
        amount,
        fromAddress,
      })
    );

    // reset values
    setAmount(0);
    setFromAddress('');

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deposit</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <Input type="number" onInput={e => setAmount(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>From</FormLabel>
            <Input type="text" onInput={e => setFromAddress(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            disabled={!amount || !fromAddress}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DepositModal;
