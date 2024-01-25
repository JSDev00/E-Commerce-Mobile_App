import { Box, Button, Center, HStack, Image, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import Colors from '../color'
import products from '../data/Products'
import {FontAwesome} from '@expo/vector-icons'



const Swiper = () =>(
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    renderItem={renderItems}
    renderHiddenItem={renderHiddenItems}
    data={products.slice(2,4)}
    showsVerticalScrollIndicator={false}
    />
    )

const renderItems = (data)=>(
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
                <Center w="25%" bg={Colors.deepGray}>
                    <Image  resizeMode='contain' alt={data.item.name} h={24} w="full" source={{uri:data.item.image}}/>
                </Center>
            <VStack w="60%" space={2} px={2}>
            <Text isTruncated bold fontSize={10} >{data.item.name}</Text>
            <Text  bold fontSize={10} color={Colors.lightBlack}>${data.item.price}</Text>
            </VStack>
            <Center>
                <Button bg={Colors.main}>5</Button>
            </Center>
            </HStack>
        </Box>
    </Pressable>
)
// renderHiddenItems
const renderHiddenItems = () => (
    <Pressable
        w={50}
        roundedTopRight={10}
        roundedBottomRight={10}
        h="88%"
        ml="auto"
        justifyContent="center"
        bg={Colors.red}
    >
        <Center  alignItems="center" space={2}>
            <FontAwesome name="trash" size={24} color={Colors.white} />
        </Center>

    </Pressable>
)
const CartItems = () => {
  return (
    <Box mr={6}>
        <Swiper/>
    </Box>
  )
}

export default CartItems
