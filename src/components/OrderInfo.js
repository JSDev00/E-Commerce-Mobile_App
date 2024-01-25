import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, Heading } from "native-base";
import Colors from "../color";

const OrderInfo = ({icon,title,text,subTitlte,sucess,danger}) => {
  return (
    <Center
      px={4}
      mb={2}
      mr={1}
      ml={5}
      w={200}
      py={2}
      bg={Colors.white}
      rounded={10}
      shadow={4}
    
    >
    
    <Center w={60} h={60} rounded="full" bg={Colors.main}>
        {icon}
    </Center>
    <Heading bold fontSize={12} isTruncated mt={3} mb={2} color={Colors.black}>
        {title}
    </Heading>
    <Text  fontSize={13} color={Colors.black}>{subTitlte}</Text>
    <Text italic fontSize={2} color={Colors.main}>{text}</Text>
    {/* Status */}
    {sucess&&(
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
                <Text fontSize={13} color={Colors.white}>
                    Paid Today
                </Text>
        </Center>
    )}
    {danger&&(
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
                <Text fontSize={13} color={Colors.white}>
                    Not Paid
                </Text>
        </Center>
    )}
    </Center>
  );
};

export default OrderInfo;

const styles = StyleSheet.create({});
