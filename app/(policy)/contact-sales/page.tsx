"use client";

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Container,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Stack,
    Textarea,
    Center,
    useClipboard,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdOutlineEmail, MdPhone } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

import config from '../../../next.config';

export default function ContactSales() {

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
                            VBot là giải pháp tổng đài số đa tính năng, giúp doanh nghiệp của bạn chuyển đổi số một cách dễ dàng.
                        </Text>

                        <Heading
                            fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
                            color="black"
                        >
                            Về chúng tôi
                        </Heading>
                        <Text fontSize={"xl"} fontWeight={"normal"} color={"black"}>
                            VBot thuộc VPMEDIA là giải pháp tổng đài số đa tính năng với giá thành rẻ nhất trên thị trường hiện nay. VBot được thiết kế để giúp doanh nghiệp của bạn tăng hiệu quả hoạt động, tiết kiệm chi phí và nâng cao chất lượng dịch vụ khách hàng.
                        </Text>
                        <Text fontSize={"xl"} fontWeight={"normal"} color={"black"}>
                            Tổng đài số VBot đã được nhiều doanh nghiệp tin tưởng sử dụng và đã mang lại hiệu quả cao trong thực tế ở nhiều lĩnh vực: Bất động sản, giáo dục, công nghệ,...
                        </Text>

                        <Heading
                            fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
                            color="black"
                        >
                            Thông tin liên hệ
                        </Heading>
                        <Stack direction={"row"}>

                            <Text fontSize={"xl"} fontWeight={"semibold"}>Địa chỉ:</Text>
                            <Text fontSize={"xl"} >
                                3/4, 163 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội
                            </Text>
                        </Stack>

                        <Stack direction={"row"}>
                            <Text fontSize={"xl"} fontWeight={"semibold"}>Điện thoại:</Text>
                            <Text fontSize={"xl"} >0857 066 866</Text>
                        </Stack>

                        <Stack direction={"row"}>
                            <Text fontSize={"xl"} fontWeight={"semibold"}>Email:</Text>
                            <Text fontSize={"xl"} >sale@vpmedia.vn</Text>
                        </Stack>

                    </Stack>
                    <Flex
                        flex={1}
                        justify={"center"}
                        align={"center"}
                        position={"relative"}
                        w={"full"}
                    >
                        <Box
                            bg={useColorModeValue('white', 'gray.700')}
                            borderRadius="lg"
                            p={8}
                            width={'lg'}
                            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                            shadow="xl">
                            <VStack spacing={5}>
                                <FormControl isRequired>
                                    <FormLabel>Họ tên</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement>
                                            <BsPerson />
                                        </InputLeftElement>
                                        <Input type="text" name="name" placeholder="" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Số điện thoại</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement>
                                            <MdPhone />
                                        </InputLeftElement>
                                        <Input type="phone" name="phone" placeholder="" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>

                                    <InputGroup>
                                        <InputLeftElement>
                                            <MdOutlineEmail />
                                        </InputLeftElement>
                                        <Input type="email" name="email" placeholder="" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Nội dung liên hệ</FormLabel>

                                    <Textarea
                                        name="message"
                                        placeholder=""
                                        rows={6}
                                        resize="none"
                                    />
                                </FormControl>

                                <Button
                                    colorScheme="blue"
                                    bg="brand.400"
                                    color="white"
                                    _hover={{
                                        bg: 'brand.500',
                                    }}
                                    width="full">
                                    Gửi thông tin
                                </Button>
                            </VStack>
                        </Box>
                    </Flex>

                </Stack>
            </Container>
        </>


    );
}
