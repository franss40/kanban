import { Box, Container, Flex, Button, HStack } from "@chakra-ui/react";

const ChakraPrueba = () => {
    return (
      <Container centerContent bg="green">
        <Box fontSize={32} w="150px" h="50px" bg="gray.200" textAlign="center">
          <h1>1</h1>
          <Button colorScheme="purple">Prueba de botón</Button>
        </Box>
        <HStack spacing="20">
          <Box>1</Box>
          <Box>2</Box>
        </HStack>
      </Container>
    )
}

export default ChakraPrueba;
