import React, { Children } from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./nav/Nav";
const Layout = ({ children }) => {
  return (
    <Box maxW="100vw">
      <Nav />
      {children}
    </Box>
  );
};

export default Layout;
