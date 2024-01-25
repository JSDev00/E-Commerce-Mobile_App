 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Center, HStack, Image, VStack } from 'native-base'
import Colors from '../color'
import Buttons from '../components/Button'
const NotVerifiedScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h="250">
        <Image 
        source={require('../../assets/favicon.png')}
        size="lg"
        alt="Logo"
        />
      </Center>
        <VStack space={6} px={5} alignItems="center">

        <Buttons bg={Colors.black} color={Colors.white}>REGISTER</Buttons>
        <Buttons bg={Colors.white} color={Colors.black}>LOGIN</Buttons>
        </VStack>
    </Box>
  )
}

export default NotVerifiedScreen

const styles = StyleSheet.create({})