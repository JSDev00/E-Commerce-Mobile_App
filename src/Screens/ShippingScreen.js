import { useNavigation } from '@react-navigation/native'
import { Box, Center,FormControl,Input, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import Colors from '../color'
import Buttons from '../components/Button'
const ShippingScreen = () => {
    const navigation = useNavigation()
    const InputsLabels = [
        {
            label:"ENTER CITY",
            type:"text"
        },
        {
            label:"ENTER COUNTRY",
            type:"text"
        },
        {
            label:"ENTER POSTAL CODE",
            type:"number"
        },
        {
            label:"ENTER ADDRESS",
            type:"text"
        },
]
  return (
    <Box flex={1} py={5} safeAreaTop  bg={Colors.main}>
        {/* HEADING */}
        <Center pb={15}>
            <Text bold color={Colors.white} fontSize={14}>DELIVERY APP</Text>
        </Center>
        <Box h="full" px={5} bg={Colors.white}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={18} mt={5} pb={10}>
                   {InputsLabels.map((i,index)=>(
                <FormControl key={index}>
                       
                       <FormControl.Label
                       _text={{fontSize:"12px",fontWeight:"bold"}}
                       >
                        {i.label}
                    </FormControl.Label>
                   
                    <Input
                    type={i.type}
                    borderWidth={0}
                    bg={Colors.subGreen}
                    py={3}
                    color={Colors.main}
                    fontSize={15}
                    _focus={{
                        bg:Colors.subGreen,
                        borderColor:Colors.main,
                        borderWidth:1
                    }} />
                </FormControl>
                    ))}
                    <Buttons onPress={()=>navigation.navigate("Checkout")} bg={Colors.main} color={Colors.white}>CONTINUE</Buttons>
        </VStack>
      </ScrollView>
        </Box>
    </Box>
  )
}

export default ShippingScreen
