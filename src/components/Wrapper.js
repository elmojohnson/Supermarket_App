import { Box, Flex, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";
import Footer from "./Footer";

function Wrapper({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Navbar onOpen={onOpen} />
      <main>{children}</main>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
      <Footer />
    </Box>
  );
}

export default Wrapper;
