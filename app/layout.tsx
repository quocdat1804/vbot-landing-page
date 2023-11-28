// "use client";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Facebook from "@/components/Facebook";
import Bownow from "@/components/Bownow";
import Tiktok from "@/components/Tiktok";

export const metadata = {
  title: "VBot",
  description: "Tổng đài di động đa tính năng"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Bownow />
        <Tiktok />
      </head>
      <body>

        {children}

        <Facebook />

      </body>
    </html>
  );
}
