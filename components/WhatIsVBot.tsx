"use client";

import { Container, Stack, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import config from "../next.config";

export default function WhatIsVBot() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1.33"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <Container maxW={"7xl"}>
                <Stack
                    align={"center"}
                    py={{ base: "20px", md: "40px" }}
                    direction={{ base: "column", md: "row" }}
                >
                    <Flex
                        flex={1.2}
                        justify={"center"}
                        align={"center"}
                        position={"relative"}
                        w={"full"}
                    >
                        <Image
                            alt={"Hero Image"}
                            fit={"scale-down"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={`${config.basePath}/what-vbot.png`}
                        />
                    </Flex>
                    <Stack flex={1} spacing={{ base: 2, md: 4 }}>
                        <Heading
                            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                            color="brand.400"
                        >
                            Tổng đài số VBot là gì?
                        </Heading>
                        <Text fontSize={"xl"} fontWeight={"normal"} color={"black"}>
                            VBot là một hệ thống tổng đài doanh nghiệp được lưu trữ hoàn toàn
                            trên các máy chủ và được cung cấp qua internet. Thay vì kết nối có
                            dây vật lý như các hình thức tổng đài truyền thống, VBot cho phép
                            người dùng dễ dàng sử dụng thông qua các thiết bị smartphone hoặc
                            laptop kết nối internet.
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </motion.div>
    );
}
