import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
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
        <Header handleLogout={handleLogout} />
      </Box>
  );
}

export default Home;
