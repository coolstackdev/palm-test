import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

import { logout } from '../store/authSlice';
import { getBalance, getTransactions } from '../store/transactionSlice';
import Header from '../components/Header';
import DepositModal from '../components/DepositModal';
import TransferModal from '../components/TransferModal';

function Home() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const balance = useSelector(state => state.transaction.balance);
  const transactions = useSelector(state => state.transaction.transactions);

  const {
    isOpen: isDepositOpen,
    onOpen: onDepositOpen,
    onClose: onDepositClose,
  } = useDisclosure();
  const {
    isOpen: isTransferOpen,
    onOpen: onTransferOpen,
    onClose: onTransferClose,
  } = useDisclosure();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const getData = () => {
    if (!transactions.length) {
      dispatch(getBalance());
      dispatch(getTransactions());
    }
  };

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Box textAlign={'center'} fontSize={'xl'}>
      <Header
        profileImg="https://bit.ly/ryan-florence"
        handleLogout={handleLogout}
        handleClickDeposit={onDepositOpen}
        handleClickTransfer={onTransferOpen}
      />
      <Text fontSize={'2xl'} mt={8}>
        Balance: ${balance}
      </Text>
      <Stack
        bg={useColorModeValue('gray.50', 'gray.700')}
        rounded={'xl'}
        m={'8'}
      >
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Transaction History</TableCaption>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th isNumeric>Amount</Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions &&
                transactions.map((t, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{new Date(t.date).toLocaleString()}</Td>
                      <Td isNumeric>{t.amount}</Td>
                      <Td>{t.fromAddress}</Td>
                      <Td>{t.toAddress}</Td>
                      <Td>{t.status}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
      <DepositModal isOpen={isDepositOpen} onClose={onDepositClose} />
      <TransferModal isOpen={isTransferOpen} onClose={onTransferClose} />
    </Box>
  );
}

export default Home;
