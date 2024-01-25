import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Notifcations/Message";
import Buttons from "./Button";

const Review = () => {
  const [rating, setRating] = useState("");

  return (
    <Box my={9}>
      <Heading fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* If There Is No Review */}
      <Message
        color={Colors.white}
        bg={Colors.main}
        bold={"bold"}
        size={15}
        children={"NO Review"}
      />
      {/* REVIEW */}
      <Box rounded={5} p={3} bg={Colors.deepGray} mt={5}>
        <Heading fontSize={15} color={Colors.black}>
          AbdelNasser
        </Heading>
        <Rating value={3} />
        <Text mb={3}>20-10-2022</Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={12}
          children={"abdelNasser : is the best developer in the world :)😉"}
        />
      </Box>
      {/* Write Review */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THE PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={5} />,
              }}
              selectedValue={rating}
              onValueChange={(e) => setRating(e)}
            >
              <Select.Item label="1 -Poor" value="1" />
              <Select.Item label="2 -Fair" value="2" />
              <Select.Item label="3 -Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={20}
              borderWidth={0}
              w="full"
              placeholder="This Product is good ..."
              bg={Colors.subGreen}
            />
          </FormControl>
          <Buttons color={Colors.white} bg={Colors.main}>
            SUBMIT
          </Buttons>
          {/* <Message
            color={Colors.white}
            bg={Colors.black}
            size={12}
            children={"Please Login To Write a Review"}
          /> */}
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
