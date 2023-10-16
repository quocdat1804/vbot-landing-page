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
          <Box
            w='100%'
            bgGradient="radial(100% 140% at 70% 40%, #127B36 0%, #0A5725 17.71%, #033615 50%)"
          >
            <Navbar />
            <HeroSection />
            <Agency />
          </Box>


          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
