import React from 'react'
import { Image,Box, Center , Text, Heading } from 'native-base'
import Colors from '../color'
import Tabs from '../components/Profile/Tabs'
const ProfileScreen = () => {
  return (
    <>
      <Center pt={6} py={6} bg={Colors.main} >
        <Image width={125} h={125} resizeMode="cover" alt="Profile" source={{uri:'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png'}}/>
        <Heading pt={5} color={Colors.white} italic bold>Abdelnasser</Heading>
        <Text color={Colors.white} >20-10-2023</Text>
      </Center>
    <Tabs/>
    </>
  )
}

export default ProfileScreen
