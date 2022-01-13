import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { numberFormat } from "../hooks/numberFormat";
import CartContext from "./CartContext";
import CartItem from "./CartItem";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const items = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setInterval(() => {
      var itemTotal = 0;
      items.map((item, index) => {
        itemTotal += item.price * item.qty;
      });
      setTotal(itemTotal);
    }, 1000);
  }, []);

  const resetCart = () => {
    localStorage.removeItem("my_cart");
    window.location.reload();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Flex alignItems="center" color="green.500">
            <RiShoppingCartLine />
            <Text px={2}>Cart</Text>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          {items.length === 0 ? (
            <Text textAlign="center">Your cart is empty</Text>
          ) : (
            <Heading size="md" mb={4} color="gray">
              {items.length} {items.length === 1 ? "Item" : "Items"}
            </Heading>
          )}
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            {items.map((item, index) => {
              return (
                <CartItem
                  index={index}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  qty={item.qty}
                />
              );
            })}
          </VStack>
        </DrawerBody>

        <DrawerFooter alignItems="flex-end">
          <Box>
            <Text color="gray" fontSize="sm">
              Total:
            </Text>
            <Text fontWeight="bold" fontSize="xl">
              {numberFormat(total)}
            </Text>
          </Box>
          <Spacer />
          <Button size="sm" colorScheme="green" mx={2} onClick={() => navigate('/receipt')}>
            Done
          </Button>
          <Button
            size="sm"
            colorScheme="green"
            variant="outline"
            onClick={resetCart}
          >
            Reset
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CartDrawer;
