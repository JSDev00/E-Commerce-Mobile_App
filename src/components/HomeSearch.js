import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../color";
import { Box, HStack, Input, Pressable } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeSearch = () => {
  const navigation = useNavigation()
  return (
    <HStack
      w="full"
      px={6}
      py={4}
      bg={Colors.main}
      space={3}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike , Puma , Adidas , ...."
        w="85%"
        bg={Colors.white}
        variant="filled"
        h={12}
        borderWidth={0}
        _focus={
            {bg:Colors.white}
        }
      />
      <Pressable ml={3}   onPress={()=>navigation.navigate("Cart")}>
        <Entypo name="shop" size={24} color="white" />
        <Box
      
          position={"absolute"}
          rounded="full"
          left={1}
          px={1}
          top={-13}
          bg={Colors.red}
          _text={{ color: Colors.white, fontSize: "12px" }}
        >
          2
        </Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({});
