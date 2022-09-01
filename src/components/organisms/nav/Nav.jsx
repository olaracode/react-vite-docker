import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Container from "@/components/atoms/Container";
const Nav = () => {
  return (
    <Flex h="50px" align="center" bgColor="brand.card" boxShadow={"md"}>
      <Container>
        <Text color="brand.dark">ReactKra Template</Text>
      </Container>
    </Flex>
  );
};

export default Nav;
