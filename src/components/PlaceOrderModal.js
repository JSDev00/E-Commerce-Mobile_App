import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, Modal, Text, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import Buttons from "./Button";

const OrderInfo = [
  {
    title: "Products",
    price: 100.0,
    color: "black",
  },
  {
    title: "Shipping",
    price: 20,
    color: "black",
  },
  {
    title: "Tax",
    price: 10,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 130,
    color: "main",
  },
];

const PlaceOrderModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const navigation = useNavigation()
  return (
    <Center>
      <Buttons
        onPress={() => setShowModal(true)}
        mt={5}
        bg={Colors.main}
        color={Colors.white}
      >
        SHOW TOTAL
      </Buttons>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfo.map((i, index) => {
                return (
                    
                <React.Fragment key={index}>
                      <HStack alignItems={"center"} justifyContent="space-between">
                    <Text fontWeight={"medium"}>{i.title}</Text>
                    <Text
                      bold
                      color={i.color === "main" ? Colors.red : Colors.black}
                    >
                      ${i.price}
                    </Text>
                  </HStack>
                </React.Fragment>
                );
              })}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Buttons
              onPress={() => {navigation.navigate("Home"),setShowModal(false)}}
              bg={Colors.main}
              color={Colors.white}
            >
              Place An Order
            </Buttons>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>



  );
};

export default PlaceOrderModal;
