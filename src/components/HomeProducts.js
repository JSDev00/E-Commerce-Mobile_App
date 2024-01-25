import React from "react";
import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from "native-base";
import products from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
const HomeProducts = () => {
  const navigation = useNavigation()

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
          onPress={()=>navigation.navigate("Single",product)}
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            pt={0.3}
            shadow={2}
            pb={2}
            my={3}
            overflow="hidden"
          >
            <Image
              resizeMode="contain"
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
            />
            <Box px={4} pt={1}>
                <Heading size="sm" bold>
                        ${product.price}
                </Heading>
                        <Text fontSize="10" isTruncated w="full" mt={1}>{product.name}</Text>
            {/* Rating */}
            <Rating value={product.rating}/>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
