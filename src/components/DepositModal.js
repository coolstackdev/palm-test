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
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex align={'center'} justify={'center'}>
          <Box bg={useColorModeValue('white', 'gray.700')} p={8}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Deposit</Heading>
            </Stack>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input type="number" onInput={e => setAmount(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>From</FormLabel>
                <Input
                  type="text"
                  onInput={e => setFromAddress(e.target.value)}
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

export default DepositModal;
