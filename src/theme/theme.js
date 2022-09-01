import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      maxW: "100vw",
      overflowX: "hidden",
    },
  },
};

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
    },
  },
};

export const baseTheme = extendTheme({
  styles: {
    ...styles,
  },
  colors: {
    brand: {
      primary: "#52B788",
      secondary: "#B7E4C7",
      dark: "#1B4332",
      card: "#D8F3DC",
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
