"use client";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WhatIsVBot from "@/components/WhatIsVBot";
import Customers from "@/components/Customers";
import Download from "@/components/Download";
import WhyVBot from "@/components/WhyVBot";
import Features from "@/components/Features";
import News from "@/components/News";
import HeroSection from "@/components/HeroSection";
import Agency from "@/components/Agency";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Box
          w="100%"
          bgGradient="radial(100% 140% at 70% 40%, #127B36 0%, #0A5725 17.71%, #033615 50%)"
        >
          <Navbar />
          <HeroSection />
          <Agency />
        </Box>

        <WhatIsVBot />
        <Customers />
        <WhyVBot />
        <Features />
        <Download />
        <News />
        <Footer />
      </>
      <ScrollToTopButton />
    </ChakraProvider>

  );
}
