import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'Bebas Neue', sans-serif`,
  body: `'DM Sans', sans-serif`,
};

const components = {
  Button: {
    variants: {
      primary: {
        backgroundColor: "brand.primary",
        borderRadius: "6px",
        fontWeight: "normal",
        color: "brand.white",
      },
      ghost: {
        backgroundColor: "none",
        _hover: {
          backgroundColor: "brand.primary",
        },
      },
    },
  },
};

export const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxW: "100vw",
        overflowX: "hidden",
        color: "black",
        backgroundColor: "brand.white",
      },
    },
  },
  colors: {
    brand: {
      primary: "#0096C7",
      secondary: "#48CAE4",
      card: "#023E8A",
      dark: "#010228",
      light: "#FFFFFF",
      white: "#fafafa",
      100: "#DDDDDD",
    },
  },
  fonts: {
    ...fonts,
  },
  components: {
    ...components,
  },
});

export const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxW: "100vw",
        overflowX: "hidden",
        color: "brand.light",
        backgroundColor: "brand.dark",
      },
    },
  },
  colors: {
    brand: {
      primary: "#0077B6",
      secondary: "#48CAE4",
      card: "#023E8A",
      dark: "#010228",
      light: "#FFFFFF",
      white: "#fafafa",
      100: "#DDDDDD",
    },
  },
  fonts: {
    ...fonts,
  },
  components: {
    ...components,
  },
});
