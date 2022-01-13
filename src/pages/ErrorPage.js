import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate()
  return (
    <Flex h="100vh" bg="green.400" alignItems='center' justifyContent='center'>
      <Box color='white' textAlign='center' h='fit-content'>
        <Heading fontSize='4xl'>404</Heading>
        <Text fontSize='2xl'>Page Not Found</Text>
        <Button mt={4} size='sm' colorScheme='white' variant='outline' onClick={() => navigate('/')} >Go back</Button>
      </Box>
    </Flex>
  );
}

export default ErrorPage;
