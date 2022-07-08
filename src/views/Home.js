import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, useDisclosure } from '@chakra-ui/react';

import { logout } from '../store/authSlice';
import { getBalance, getTransactions } from '../store/transactionSlice';
import Header from '../components/Header';
import TransactionItem from '../components/TransactionItem';
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
    <Box textAlign="center" fontSize="xl">
      <Header
        handleLogout={handleLogout}
        handleClickDeposit={onDepositOpen}
        handleClickTransfer={onTransferOpen}
      />
      <Heading>Balance</Heading>
      <Text>{balance}</Text>
      <Heading>Transaction History</Heading>
      {transactions &&
        transactions.map((t, index) => {
          return (
            <TransactionItem
              key={index}
              date={t.date}
              amount={t.amount}
              fromAddress={t.fromAddress}
              toAddress={t.toAddress}
              fee={t.fee}
              status={t.status}
            />
          );
        })}
      <DepositModal isOpen={isDepositOpen} onClose={onDepositClose} />
      <TransferModal isOpen={isTransferOpen} onClose={onTransferClose} />
    </Box>
  );
}

export default Home;
