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
      primary: "#52B788",
      secondary: "#B7E4C7",
      card: "#D8F3DC",
      dark: "#0B1511",
      light: "#E5EFE6",
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
      primary: "#52B788",
      secondary: "#B7E4C7",
      card: "#1B4332",
      dark: "#0B1511",
      light: "#E5EFE6",
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
