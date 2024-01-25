import {
  Box,
  Center,
  Image,
  ScrollView,
  Spacer,
  Text,
  VStack,
  HStack
} from "native-base";
import React from "react";
import Colors from "../color";
import Buttons from "../components/Button";
import {FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const PaymentScreen = () => {
  const navigation = useNavigation()
    // PAYMENTS METHODS
  const PaymentMethods = [
    {
      image: require("../../assets/images/paypal.png"),
      alt: "paypal",
      icon: "Ionicons",
    },
    
    {
      image:require( "../../assets/images/payoneer.png"),
      alt: "discover",
      icon: "fontAwesome",
    },
    
    {
      image:require( "../../assets/images/Mastercard-logo.svg.png"),
      alt: "Mastercard",
      icon: "fontAwesome",
    },
    
  ];
  return (
    <Box flex={1} py={5} safeAreaTop bg={Colors.main}>
      {/* HEADING */}
      <Center pb={15}>
        <Text bold color={Colors.white} fontSize={14}>
          Payment Screen
        </Text>
      </Center>
      <Box h="full" px={5} bg={Colors.subGrey}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
           {PaymentMethods.map((i,index)=>(
             <HStack key={index}
             bg={Colors.white}
             px={3}
             py={1}
             alignItems="center"
             rounded={50}
             justifyContent="space-between"
           >
             <Box>
               <Image
               resizeMode="contain"
                 w={24}
                 h={12}
                 source={(i.image)}
                 alt={i.alt}
               />
             </Box>
               {i.icon==="Ionicons"?<Ionicons color={Colors.main} name="checkmark-circle" size={30}/>:<FontAwesome color={Colors.main} name="circle-thin" size={30}/>}
           </HStack>
           ))}
            <Buttons onPress={()=>navigation.navigate("Place")} bg={Colors.main} color={Colors.white}>
              CONTINUE
            </Buttons>
            <Text textAlign={"center"} italic>Payment Method is <Text bold>PayPal</Text> by default</Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
