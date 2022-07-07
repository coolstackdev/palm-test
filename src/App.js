import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import Login from './views/Login'
import Register from './views/Register'
import Home from './views/Home'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh">
            <ColorModeSwitcher justifySelf="flex-end" position="absolute" />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </BrowserRouter>
          </Grid>
        </Box>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
