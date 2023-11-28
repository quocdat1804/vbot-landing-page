"use client";

import { Box, Container, Heading, Center, Text, Stack } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../../../chakra/theme";
import Navbar from "@/components/Navbar2nd";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import ScrollToTopButton from "@/components/ScrollToTopButton";


export default function TransportPolicy() {
    return (

        <ChakraProvider theme={theme}>
            <Navbar />
            <Box id="header" bgColor={"#E3F7EA"}>
                <Box>
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Center>
                            <Heading
                                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                                color="black"
                            >
                                Chính sách vận chuyển
                            </Heading>
                        </Center>
                    </Container>
                </Box>
            </Box>
            <Box id="content">
                <Box>
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Text fontSize="md">
                            Đây là sản phẩm dịch vụ trực tuyến, khi khách hàng nạp tiền vào
                            tài khoản và đăng ký dịch vụ thông qua website: https://vbot.vn
                            hoặc ứng dụng VBot trên các hệ điều hành IOS/Android thì sẽ được
                            sử dụng dịch vụ ngay tức thời. Chính sách này sẽ được hiển thị rõ
                            ràng cho người tiêu dùng tại thời điểm thu thập thông tin.
                        </Text>
                    </Container>
                </Box>
            </Box>
            <Download />
            <Footer />
            <ScrollToTopButton />
        </ChakraProvider>

    );
}
