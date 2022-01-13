import {
  Box,
  Button,
  Flex,
  Text
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useState } from "react";
import { numberFormat } from "../hooks/numberFormat";
import CartContext from "./CartContext";
import { TiDelete } from "react-icons/ti";

function CartItem(props) {
  const items = useContext(CartContext);
  const [quantity, setQuantity] = useState(props.qty);

  const increase = () => {
    setQuantity(quantity + 1);
    updateQty(items[props.index].qty + 1);
  };

  const decrease = () => {
    setQuantity(quantity - 1);
    updateQty(items[props.index].qty - 1);
  };

  const updateQty = (value) => {
    if (value < 1) {
      console.log("error");
    } else {
      items[props.index] = {
        ...items[props.index],
        qty: value,
      };
      localStorage.setItem("my_cart", JSON.stringify(items));
    }
  };

  const deleteItem = () => {
    items.splice(props.index, 1);
    localStorage.setItem("my_cart", JSON.stringify(items));
  };

  return (
    <Box>
      <Flex flexDir="row" justifyContent="space-between" alignItems="center">
        <Text fontWeight="semibold">{props.title}</Text>
        <Button
          colorScheme="gray"
          variant='outline'
          size="xs"
          onClick={deleteItem}
          rightIcon={<TiDelete />}
        >
          Remove
        </Button>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" mt={2}>
        <Flex>
          <Text mr={2}>Qty: {quantity}</Text>
          <Button colorScheme="teal" size="xs" onClick={decrease} mx={1}>
            -
          </Button>
          <Button colorScheme="teal" size="xs" onClick={increase}>
            +
          </Button>
        </Flex>
        <Text fontWeight="semibold" color="green.500">
          {numberFormat(props.price * props.qty)}
        </Text>
      </Flex>
    </Box>
  );
}

export default CartItem;
