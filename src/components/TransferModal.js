import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Flex,
  Stack,
  Box,
  FormControl,
  Input,
  FormLabel,
  Heading,
  useColorModeValue,
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
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex align={'center'} justify={'center'}>
          <Box bg={useColorModeValue('white', 'gray.700')} p={8}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Transfer</Heading>
            </Stack>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input type="number" onInput={e => setAmount(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>To</FormLabel>
                <Input
                  type="text"
                  onInput={e => setToAddress(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default TransferModal;
