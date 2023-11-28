"use client";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          {children}
          <ScrollToTopButton />
        </ChakraProvider>
      </body>
    </html>
  );
}
