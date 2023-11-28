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
                                Chính sách đổi trả
                            </Heading>
                        </Center>

                    </Container>
                </Box>
            </Box>
            <Box id="content">
                <Box >
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Heading as='h4' size='md'>
                            Điều kiện chung
                        </Heading>
                        <Text fontSize='md'>
                            Thời hạn yêu cầu đổi trả / hoàn tiền: Trong vòng 3 ngày kể từ ngày khách hàng đăng ký gói cước VBot thành công.
                        </Text>
                        <Text fontSize='md'>
                            Tài khoản của khách hàng không vi phạm các điều khoản chung của VBot.
                        </Text>
                        <Text fontSize='md'>
                            Đăng ký thành công nhưng không sử dụng được các tính năng của dịch vụ.
                        </Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Các trường hợp từ chối đổi trả/hoàn tiền
                        </Heading>
                        <Text fontSize='md'>
                            Vi phạm các chính sách, điều kiện chung trên.
                        </Text>
                        <Text fontSize='md'>
                            Có hành vi gian lận trong quá trình sử dụng dịch vụ.
                        </Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Quy trình đổi trả/hoàn tiền
                        </Heading>
                        <Text fontSize='md'>
                            Khi đáp ứng đầy đủ các điều kiện đổi trả/hoàn tiền, liên hệ với email: sale@vpmedia.vn hoặc số điện thoại: 0857 066 866 để yêu cầu hoàn trả.
                        </Text>
                        <Text fontSize='md'>
                            Các yêu cầu đổi trả/hoàn tiền sẽ được giải quyết trong vòng 30 ngày kể từ ngày nhận được yêu cầu.
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
