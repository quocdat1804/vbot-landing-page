import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#EFF7F2",
      400: "#1CAB4E",
      500: "#168F41",
    },
  },
  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Open Sans, sans-serif",
  },
  components: {
    // Button
  },
  // styles: {
  //     global: () => ({
  //         body: {
  //             bg: "gray.200"
  //         }
  //     })
  // },
});
