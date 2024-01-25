import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'
import Colors from '../../color'

const Order = () => {
  return (
    <Box  bg={Colors.white} pt={5} h="full">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PRESSABLE BUTTONS */}
        <Pressable>
        <HStack
        space={4}
        justifyContent="space-between"
        alignItems="center"
        bg={Colors.deepGray}
        px={3}
        py={5}
        w="full"
        >
            <Text color={Colors.blue}>42748***</Text>
            <Text fontSize={12} bold >PAID</Text>
            <Text fontSize={11} italic >June 1 2023</Text>
            <Button rounded={50} bg={Colors.main} px={7} py={1.5} _text={{color:Colors.white}}>
                $456
            </Button>
        </HStack>
        </Pressable>
       
        {/* NOt PAID */}
        <Pressable>
        <HStack
        space={4}
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={5}
        w="full"
        >
            <Text color={Colors.blue}>42748***</Text>
            <Text fontSize={12} bold >NOT PAID</Text>
            <Text fontSize={11} italic >March 18 2023</Text>
            <Button rounded={50} bg={Colors.red} px={7} py={1.5} _text={{color:Colors.white}}>
                $22
            </Button>
        </HStack>
        </Pressable>
    </ScrollView>
    </Box>
  )
}

export default Order
