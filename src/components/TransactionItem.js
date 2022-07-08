import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const TransactionItem = ({
  date,
  amount,
  toAddress,
  fromAddress,
  fee,
  status
}) => {

  return (
    <Box bg={useColorModeValue('teal.100', 'teal.800')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text>
          { date }
        </Text>
        <Text>
          { amount }
        </Text>
        <Text>
          { toAddress }
        </Text>
        <Text>
          { fromAddress }
        </Text>
        <Text>
          { fee }
        </Text>
        <Text>
          { status }
        </Text>
      </Flex>
    </Box>
  );
}

export default TransactionItem;