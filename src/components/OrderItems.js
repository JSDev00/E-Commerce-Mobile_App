import {Box, Button, Center, FlatList, HStack, Image, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import Colors from '../color';
import products from '../data/Products'
const OrderItems = () => {
  return (
    <FlatList
        showsVerticalScrollIndicator={false}
        data={products.slice(0,4)}
        keyExtractor={item => item._id}
        renderItem={({item})=><Pressable>
            
            <Box mt={3}>
                <HStack
                alignItems={'center'}
                bg={Colors.white}
                shadow={1}
                rounded={10}
                overflow="hidden"
                >
                     <Center w="25%">
                    <Image h={24} w="full" resizeMode='contain' source={{uri:item.image}} alt={item.name}/>
                        
                        </Center>   
                        <VStack w="60%" px={2}>
                            <Text isTruncated bold>{item.name}</Text>
                        </VStack>
                        <Center><Button bg={Colors.main}>5</Button></Center>
                </HStack>
            </Box>
        </Pressable>}
    />
    );
}

export default OrderItems
