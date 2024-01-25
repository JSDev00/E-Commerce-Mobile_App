 
import React, { useState } from 'react'
import { Box, Heading, HStack,Text, Image, ScrollView, Spacer } from 'native-base'
import Colors from '../color'
import Rating from '../components/Rating'
import NumericInput from 'react-native-numeric-input'
import Buttons from '../components/Button'
import Review from '../components/Review'
import { useNavigation } from '@react-navigation/native'
const SingleProduct = ({route}) => {
  const [value,setValue] = useState(0)
  const navigation = useNavigation()
const product = route.params
  return (
    <Box flex={1} safeAreaTop bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image 
        resizeMode='contain' 
        alt="Image" 
        w="100%" 
        h={300} 
        source={{ uri:product.image }}
        />
      <Heading bold fontSize="15" mb={2} lineHeight={22}>
        {product.name}
      </Heading>
      <Rating value={product.rating} text={`${product.numReview} Review`}/>
      <HStack space={2} alignItems="center" my={5}> 
        <NumericInput
        onChange={value=>setValue(value)}
        value={value}
        maxValue={product.countStroke}
        minValue={1}
        borderColor={Colors.deepGray}
        rounded
        totalHeight={30}
        totalWidth={140}
        textColor={Colors.black}
        iconStyle={{ color:Colors.white }}
        rightButtonBackgroundColor={Colors.main}
        leftButtonBackgroundColor={Colors.main}
      />
       <Spacer/>
       <Heading fontSize={19} >${product.price}</Heading>
      </HStack>
      <Text lineHeight={24} fontSize={12}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus enim porro, qui quod consectetur neque vero maiores ipsum dolores aut beatae a ea est quasi voluptatibus sequi magnam harum?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus enim porro, qui quod consectetur neque vero maiores ipsum dolores aut beatae a ea est quasi voluptatibus sequi magnam harum?

      </Text>
      <Buttons onPress={()=>navigation.navigate("Cart")} bg={Colors.main} color={Colors.white} mt={10}>ADD TO CART</Buttons>
      {/* Review */}
      <Review/>
      </ScrollView>
    </Box>
  )
}

export default SingleProduct
