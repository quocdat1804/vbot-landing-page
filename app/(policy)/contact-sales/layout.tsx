
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../../chakra/theme";
import Navbar from "@/components/Navbar2nd";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata = {
    title: 'Contact Sales | VBot',
    description: "Tổng đài di động đa tính năng"
}
export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}


