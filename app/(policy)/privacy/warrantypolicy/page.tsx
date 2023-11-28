"use client";

import { Box, Container, Heading, Center, Text, Stack } from "@chakra-ui/react";

export default function ExchangePolicy() {
    return (
        <>
            <Box id="header" bgColor={"#E3F7EA"}>
                <Box>
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Center>
                            <Heading
                                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                                color="black"
                            >
                                Chính sách bảo hành
                            </Heading>
                        </Center>
                    </Container>
                </Box>
            </Box>
            <Box id="content">
                <Box>
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Heading as="h4" size="md">
                            Các dịch vụ hỗ trợ bảo hành
                        </Heading>
                        <Text fontSize="md">
                            Gồm các tính năng trong gói dịch vụ của ứng dụng VBot.
                        </Text>
                        <br />

                        <Heading as="h4" size="md">
                            Thời hạn bảo hành
                        </Heading>
                        <Text fontSize="md">Tùy theo gói dịch vụ của ứng dụng.</Text>
                        <br />

                        <Heading as="h4" size="md">
                            Điều kiện bảo hành
                        </Heading>
                        <Text fontSize="md">
                            Khách hàng phải đăng ký thành công dịch vụ.
                        </Text>
                        <br />

                        <Heading as="h4" size="md">
                            Quy trình bảo hành
                        </Heading>
                        <Text fontSize="md">
                            Nếu các điều kiện bảo hành thỏa mãn, khách hàng thông báo cho VBot
                            về vấn đề của dịch vụ. Sau khi các vấn đề được khắc phục, hệ thống
                            sẽ kích hoạt lại dịch vụ cho khách hàng sử dụng.
                        </Text>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
