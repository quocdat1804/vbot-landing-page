"use client";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Agency from "@/components/Agency";
import Footer from "@/components/Footer";

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
        </ChakraProvider>
      </body>
    </html>
  );
}
