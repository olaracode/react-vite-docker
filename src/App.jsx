import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme, darkTheme } from "@/theme/theme.js";
import AppRoutes from "@/routes/AppRoutes.jsx";
import useStore from "@/hooks/useStore.jsx";
function App() {
  const { store } = useStore();
  return (
    <>
      <ChakraProvider theme={store.theme ? darkTheme : lightTheme}>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
