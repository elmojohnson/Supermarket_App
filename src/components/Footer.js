import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  const goToGH = () => {
    window.location.href = "https://github.com/elmojohnson";
  };
  return (
    <Box bg="teal">
      <Container maxW="container.sm" py={8} color="white">
        <Text textAlign="center" fontSize="sm">
          Made by <b className="hover" onClick={goToGH}>John Elmo Johnson</b>
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
