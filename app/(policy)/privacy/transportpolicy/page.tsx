"use client";

import {
    Box,
    Container,
    Heading,
    Center,
    Image,
    Text,
    Stack,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";


import config from '../../../../next.config';

export default function ExchangePolicy() {
    return (
        <>
            <Box id="header" bgColor={"#E3F7EA"}>
                <Box >
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Center >
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
                <Box >
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Text fontSize='md'>
                            Đây là sản phẩm dịch vụ trực tuyến, khi khách hàng nạp tiền vào tài khoản và đăng ký dịch vụ thông qua website: https://vbot.vn hoặc ứng dụng VBot trên các hệ điều hành IOS/Android thì sẽ được sử dụng dịch vụ ngay tức thời. Chính sách này sẽ được hiển thị rõ ràng cho người tiêu dùng tại thời điểm thu thập thông tin.
                        </Text>




                        {/* <br />
                        <Heading as='h4' size='md'>
                            nhân
                        </Heading>
                        <Text fontSize='md'>
                            Next
                        </Text> */}

                    </Container>
                </Box>
            </Box >

        </>


    );
}
