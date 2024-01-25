import {
  Box,
  Icon,
  Heading,
  Image,
  Input,
  VStack,
  FormControl,
  Pressable,
  Button,
  Text,
  HStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import { MaterialIcons } from "@expo/vector-icons";
// import {  } from "react-native";
import { useForm } from "react-hook-form";
const LoginScreen = ({navigation}) => {
  const [show, setShow] = React.useState(false);

  return (
    <Box flex={1} bg={Colors.red}>
      <Image
        flex={1}
        alt="Logo"
        size="lg"
        w="full"
        resizeMode="cover"
        source={require("../../assets/cover.png")}
      />
      <Box
        position="absolute"
        w="full"
        h="full"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading px={4}>LOGIN</Heading>
        <VStack space={5} pt={6}>
          <Input
            variant="rounded"
            w={{
              base: "85%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Email"
          />
          <Input
            variant="rounded"
            w={{
              base: "85%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
          />
          
        </VStack>
            <HStack pt={6} space={5}>
            <Button  w="40%"   rounded={50} bg={Colors.main} onPress={()=>navigation.navigate("Bottom")}>Login</Button>
            </HStack>
            <Text mt={5} mx={2} color={Colors.deepGray} onPress={()=>navigation.navigate("Register")}>SignUp</Text>
      </Box>
    </Box>
  );
};

export default LoginScreen;
