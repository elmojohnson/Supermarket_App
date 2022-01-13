import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
  Image
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import CartContext from "./CartContext";
import cart from '../assets/images/cart.png'

function Navbar({ onOpen }) {
  const items = useContext(CartContext)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(items.length)
    }, 1000);
  }, [])
  return (
    <Box
      w="full"
      bgColor="green.400"
      sx={{
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
      }}
      style={{ zIndex: "1000" }}
    >
      <Container maxW="container.sm" py={3}>
        <Flex alignItems="center">
          <Image src={cart} w={8} />
          <Text color="white" fontWeight="semibold" fontSize="xl" ml={2}>
            Supermarket
          </Text>
          <Spacer />
          <Button colorScheme="green" size="sm" onClick={onOpen} leftIcon={<RiShoppingCartLine />}>
            Cart {count !== 0 && <Badge ml={1} colorScheme='green'>{count}</Badge>}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
