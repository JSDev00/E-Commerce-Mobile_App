import { Box, FormControl, Input, ScrollView,VStack } from 'native-base'
import React from 'react'
import Colors from '../../color'
import Buttons from '../Button'
const Profile = () => {
    const InputsLabels = [
        {
            label:"USERNAME",
            type:"text"
        },
        {
            label:"EMAIL",
            type:"email"
        },
        {
            label:"PASSWORD",
            type:"password"
        },
        {
            label:"CONFIRM PASSWORD",
            type:"password"
        },
]
  return (
    <Box w="full" bg={Colors.white} px={5} >
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
                    <Buttons bg={Colors.main} color={Colors.white}>UPDATE PROFILE</Buttons>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export default Profile
