"use client";

import { Box, Container, Heading, Center, Text, Stack } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../../../chakra/theme";
import Navbar from "@/components/Navbar2nd";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import ScrollToTopButton from "@/components/ScrollToTopButton";


export default function PaymentPolicy() {
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
                                Chính sách thanh toán
                            </Heading>
                        </Center>
                    </Container>
                </Box>
            </Box>
            <Box id="content">
                <Box>
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Heading as="h4" size="md">
                            Thanh toán giữa người mua – người bán (khách hàng và đối tác…)
                        </Heading>
                        <Text fontSize="md">
                            Khách hàng chọn gói dịch vụ, tự nạp tiền vào tài khoản (trên web)
                            qua các phương thức: thanh toán trực tiếp/Các thẻ ATM do các ngân
                            hàng Việt Nam phát hành/ví điện tử: Zalo Pay, MoMo/Các thẻ thanh
                            toán quốc tế: Visacard, Mastercard,… Tiền nạp vào chỉ sử dụng cho
                            dịch vụ của VBot, không được dùng để mua bán hàng hóa, dịch vụ bên
                            khác cung cấp.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Thanh toán giữa đối tác (người bán, nhà cung cấp,…) và Ban quản lý
                            website/ứng dụng
                        </Heading>
                        <Text fontSize="md">
                            Khách hàng chọn gói dịch vụ, tự nạp tiền vào tài khoản (trên web)
                            qua các phương thức: thanh toán trực tiếp/Các thẻ ATM do các ngân
                            hàng Việt Nam phát hành/ví điện tử: Zalo Pay, MoMo/Các thẻ thanh
                            toán quốc tế: Visacard, Mastercard,…
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Tài khoản
                        </Heading>
                        <Text fontSize="md">
                            Chủ tài khoản: Công ty Cổ phần Công nghệ Truyền thông Việt Phát
                        </Text>
                        <Text fontSize="md">Số tài khoản VNĐ: 0491000029266</Text>
                        <Text fontSize="md">
                            Ngân hàng TMCP Ngoại thương Việt Nam – Chi nhánh Thăng Long
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Nội dung chuyển khoản
                        </Heading>
                        <Text fontSize="md">VBOT [VBot ID]</Text>
                    </Container>
                </Box>
            </Box>
            <Download />
            <Footer />
            <ScrollToTopButton />
        </ChakraProvider>

    );
}
