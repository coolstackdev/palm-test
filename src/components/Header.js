import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from '@chakra-ui/react';

const Header = ({
  profileImg,
  handleLogout,
  handleClickDeposit,
  handleClickTransfer,
}) => {
  return (
    <Box bg={useColorModeValue('teal.400', 'teal.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box data-testid="logo-title">Palm NFT Dashboard</Box>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              mr={12}
            >
              <Avatar size={'sm'} src={profileImg} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleClickDeposit}>Deposit</MenuItem>
              <MenuItem onClick={handleClickTransfer}>Transfer</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
