import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {
  Box,
  Link,
  Stack,
  Heading
} from '@chakra-ui/react';
import { logout } from '../store/authSlice';

function Home() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(
      logout()
    );
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate])

  return (
      <Box textAlign="center" fontSize="xl">
        <Link color="teal.500" onClick={handleLogout}>
          Logout
        </Link>
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="teal.400">Home</Heading>
        </Stack>
      </Box>
  );
}

export default Home;
