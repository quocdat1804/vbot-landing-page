"use client";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { theme } from "../../chakra/theme";
import Navbar from "@/components/Navbar2nd";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Navbar />
                {children}
                <Download />
                <Footer />
                <ScrollToTopButton />
            </ChakraProvider>
        </>
    );
}


