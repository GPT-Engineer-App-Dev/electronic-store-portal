import { Box, Container, Flex, Heading, Text, VStack, Grid, GridItem, Image, Link, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={4}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box p={10}>
        <Heading size="lg" mb={6} textAlign="center">Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 1" />
              <Box p={4}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 2" />
              <Box p={4}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 3" />
              <Box p={4}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 4" />
              <Box p={4}>
                <Heading size="md">Product 4</Heading>
                <Text mt={2}>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }} px={10}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex gap={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </Flex>
          <Flex gap={4}>
            <Link href="#">Contact Us</Link>
            <Link href="#">Terms of Service</Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;