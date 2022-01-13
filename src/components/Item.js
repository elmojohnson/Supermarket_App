import { Box, Flex, Text, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useContext, useState } from "react/cjs/react.development";
import CartContext from "./CartContext";
import { v4 as uid } from "uuid";

function Item(props) {
  const items = useContext(CartContext);
  const [cartItems, setCartItems] = useState(items);
  const toast = useToast();

  const addToCart = () => {
    // Check if in MAX items - 15
    if (cartItems.length === 15) {
      toast({
        title: "You have reached the max number of items",
        isClosable: true,
        duration: 2000,
        status: "error",
      });
    } else {
      // If has duplicate
      if (cartItems.some((item) => item.title === props.title)) {
        toast({
          title: "Item is already in cart",
          isClosable: true,
          duration: 2000,
          status: "error",
        });
      } else {
        cartItems.push({
          id: uid(),
          title: props.title,
          price: props.price,
          qty: 1,
        });
        setCartItems(cartItems);
        localStorage.setItem("my_cart", JSON.stringify(cartItems));
      }
    }
  };

  return (
    <Box bgColor="white" shadow borderRadius="md">
      <Box
        bgImage={
          "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/" +
          props.filename
        }
        bgPosition="center"
        bgRepeat="no-repeat"
        h={120}
        borderTopRadius="md"
        bgSize='cover'
      />
      <Flex p={4} flexDirection="column" justifyContent="space-between" h={180}>
        <Box>
          <Text
            size="sm"
            marginBottom="auto"
            fontWeight="semibold"
            noOfLines={2}
          >
            {props.title}
          </Text>
          <Text fontWeight="bold" color="teal.500">
            $ {props.price}
          </Text>
        </Box>
        <Button
          colorScheme="green"
          w="full"
          size='sm'
          leftIcon={<RiShoppingCartLine />}
          mt={4}
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </Flex>
    </Box>
  );
}

export default Item;
