import React from 'react'
import { Box, Center, Text } from 'native-base'
import Colors from '../color'
import { FontAwesome } from '@expo/vector-icons';
import Buttons from '../components/Button'
const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded={"full"}>
                <FontAwesome name="shopping-basket" size={64} color={Colors.main}/>
        </Center>
        <Text bold color={Colors.main} mt={5}>CART IS EMPTY</Text>
      </Center>
    <Buttons bg={Colors.black} color={Colors.white}>START SHOPPING</Buttons>
    </Box>
  )
}

export default CartEmpty
