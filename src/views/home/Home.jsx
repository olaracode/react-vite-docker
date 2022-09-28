import React from "react";

// General Components
import { Image, Flex, Box, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// Local components
import ReactLogo from "@/assets/imgs/react-logo.png";
import DockerLogo from "@/assets/imgs/docker-logo.png";
import Container from "@/components/atoms/Container";
function Home() {
  return (
    <>
      <Container>
        <Flex justify="center">
          <Text>React.js + Docker</Text>
        </Flex>
        <Flex flexDir="column" justify="center" align="center" h="85vh">
          <Flex flexDir={"column"} gap={10} align="center" justify={"center"}>
            <Box
              as={motion.div}
              animate={{
                rotate: 360,
                transition: {
                  ease: "linear",
                  duration: 100,
                  repeat: Infinity,
                  delay: 1,
                },
              }}
            >
              <Image src={ReactLogo} w="200px" />
            </Box>
            <AddIcon />
            <Image src={DockerLogo} w="200px" />
          </Flex>
        </Flex>
        <Box>
          <Text textAlign="center">Made with 🖤 in Venezuela 🇻🇪</Text>
        </Box>
      </Container>
    </>
  );
}

export default Home;
