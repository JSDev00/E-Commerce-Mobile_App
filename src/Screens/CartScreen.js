import React from 'react'
import { Box, Button, Center, HStack, ScrollView, Text } from 'native-base'
import Colors from '../color'
import CartEmpty from '../components/CartEmpty'
import CartItems from '../components/CartItems'
import Buttons from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGrey}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text bold fontSize={20}>Cart</Text>
      </Center>
      {/*=============== IF CART IS Empty ===============*/}
    
      {/* <CartEmpty/> */}
    {/* CART ITEMS */}
    <CartItems/>
    {/* Buttons */}
    <Center mt={6}>
      <HStack w="90%" rounded="50" justifyContent={'space-between'} bg={Colors.white} shadow="2" pl="5" h={45} alignItems="center">
      <Text>Total</Text>
      <Button px={10} h={45} rounded={50} bg={Colors.main}>$ 112</Button>
      </HStack>
      </Center>
      {/* CHECKOUT */}
      <Center mt={6} mx={5} mb={2}>
        <Buttons onPress={()=>navigation.navigate("Shiping")} bg={Colors.black} color={Colors.white}>CHECKOUT</Buttons>
      </Center>
      </ScrollView>
    </Box>
  )
}

export default CartScreen
