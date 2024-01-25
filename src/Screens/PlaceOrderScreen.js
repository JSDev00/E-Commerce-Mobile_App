import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Heading, ScrollView } from "native-base";
import Colors from "../color";
import OrderInfo from "../components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import PlaceOrderModal from "../components/PlaceOrderModal";
import OrderItems from "../components/OrderItems";
const PlaceOrderScreen = () => {
  const Orders = [
    {
      icon: <FontAwesome name={"user"} size={24} color="white" />,
      title: "CUSTOMER",
      text: "naser@gmail.com",
      subTitlte: "ABDELNASER",
    },

    {
      icon: <FontAwesome5 name={"shipping-fast"} size={24} color="white" />,
      title: "DELIVER TO",
      text: "CAIRO P . H",
      subTitlte: "Address",
    },
    {
      icon: <Ionicons name={"location-sharp"} size={24} color="white" />,
      title: "SHIPPING INFO",
      text: "payMethod:paypal",
      subTitlte: "EGYPT",
    },
  ];
  return (
    <Box bg={Colors.subGrey} safeArea flex={1} pt={6}>
      <Box>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {Orders.map((item, index) => (
            <React.Fragment key={index}>
              <OrderInfo
                title={item.title}
                subTitlte={item.subTitlte}
                text={item.text}
                icon={item.icon}
              />
            </React.Fragment>
          ))}
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
      <Heading pt={6} isTruncated my={4}>PRODUCTS</Heading>
      <OrderItems/>
      <PlaceOrderModal/>
    </Box>
    </Box>
  );
};

export default PlaceOrderScreen;

const styles = StyleSheet.create({});
