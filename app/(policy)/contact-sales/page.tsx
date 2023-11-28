"use client";

import { Box, Heading, Container, Text, Stack, Center } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../../chakra/theme";
import Navbar from "@/components/Navbar2nd";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import ScrollToTopButton from "@/components/ScrollToTopButton";


export default function ContactSales() {
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
                                Liên hệ Sale
                            </Heading>
                        </Center>
                    </Container>
                </Box>
            </Box>
            <Container maxW={"7xl"}>
                <Stack
                    align={"center"}
                    py={{ base: "20px", md: "40px" }}
                    direction={{ base: "column", md: "row" }}
                >
                    <Stack flex={1} spacing={{ base: 2, md: 4 }}>
                        <Text fontSize={"xl"} fontWeight={"normal"} color={"black"}>
                            VBot là giải pháp tổng đài số đa tính năng, giúp doanh nghiệp của
                            bạn chuyển đổi số một cách dễ dàng.
                        </Text>

                        <Heading
                            fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
                            color="black"
                        >
                            Về chúng tôi
                        </Heading>
                        <Text fontSize={"xl"} fontWeight={"normal"} color={"black"}>
                            VBot thuộc VPMEDIA là giải pháp tổng đài số đa tính năng với giá
                            thành rẻ nhất trên thị trường hiện nay. VBot được thiết kế để giúp
                            doanh nghiệp của bạn tăng hiệu quả hoạt động, tiết kiệm chi phí và
                            nâng cao chất lượng dịch vụ khách hàng.
                        </Text>
                        <Text fontSize={"xl"} fontWeight={"normal"} color={"black"}>
                            Tổng đài số VBot đã được nhiều doanh nghiệp tin tưởng sử dụng và
                            đã mang lại hiệu quả cao trong thực tế ở nhiều lĩnh vực: Bất động
                            sản, giáo dục, công nghệ,...
                        </Text>

                        <Heading
                            fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
                            color="black"
                        >
                            Thông tin liên hệ
                        </Heading>
                        <Stack direction={"row"}>
                            <Text fontSize={"xl"} fontWeight={"semibold"}>
                                Địa chỉ:
                            </Text>
                            <Text fontSize={"xl"}>
                                3/4, 163 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội
                            </Text>
                        </Stack>

                        <Stack direction={"row"}>
                            <Text fontSize={"xl"} fontWeight={"semibold"}>
                                Điện thoại:
                            </Text>
                            <Text fontSize={"xl"}>0857 066 866</Text>
                        </Stack>

                        <Stack direction={"row"}>
                            <Text fontSize={"xl"} fontWeight={"semibold"}>
                                Email:
                            </Text>
                            <Text fontSize={"xl"}>sale@vpmedia.vn</Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>

            <Download />
            <Footer />
            <ScrollToTopButton />
        </ChakraProvider>

    );
}
