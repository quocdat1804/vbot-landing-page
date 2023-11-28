"use client";

import {
    Container,
    Stack,
    Box,
    Heading,
    Text,
    Image,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import config from "../next.config";

const Slider2 = dynamic(() => import("react-slick").then((m) => m.default), {
    ssr: false,
});

const NewsCard = ({ label, content }: NewsItem) => {
    return (
        <Box
            maxW={{ base: "full", md: "400px" }}
            bg={"white"}
            overflow="hidden"
            borderRadius="lg"
            p={5}
            transition={"all 0.5s"}
            textAlign={"start"}
        >
            <Stack align={"start"} spacing={2}>
                <Box mt={1}>
                    <Heading size="sm">{label}</Heading>
                    <Text mt={1} fontSize={"14px"}>
                        {content}
                    </Text>
                </Box>
                <Stack direction={"row"} alignItems={"center"} spacing={4}>
                    <Image
                        boxSize="36px"
                        objectFit="cover"
                        src={`${config.basePath}/app-logo.png`}
                        alt="VBot logo"
                    />
                    <Heading size="sm">Nhóm hỗ trợ VBot</Heading>
                </Stack>
            </Stack>
        </Box>
    );
};

const NewsSlide = ({ label, content }: NewsItem) => {
    return (
        <VStack w="１００％" h="１００％" mx="4" borderRadius={"md"} px={4} py={4}>
            <NewsCard label={label} content={content} />
        </VStack>
    );
};

export default function News() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Box bg={useColorModeValue("gray.50", "gray.900")}>
            <Box
                as={motion.div}
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
            >
                <Container maxW={"7xl"} py={12}>
                    <Stack spacing={{ base: 5, md: 10 }} textAlign={"center"}>
                        <Heading fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}>
                            Thông tin hữu ích
                        </Heading>

                        <Box
                            sx={{
                                ".slick-dots": {
                                    transform: "translateY(1em)",
                                },
                                ".slick-dots li button": {
                                    _before: {
                                        backgroundColor: "brand.400",
                                        height: "10px",
                                        width: "20px",
                                        textIndent: "-9999px",
                                        overflow: "hidden",
                                        transition: "0.2s",
                                        // content: "''",
                                        borderRadius: "5px",
                                        // background: "white",
                                    },
                                },
                                ".slick-arrow": {
                                    backgroundColor: "cyan.500",
                                    color: "white",
                                    w: "30px",
                                    h: "50px",
                                    transition: "0.2s",
                                    _hover: {
                                        backgroundColor: "cyan.500",
                                        color: "white",
                                    },
                                    _focus: {
                                        backgroundColor: "cyan.500",
                                        color: "white",
                                    },
                                    _before: {
                                        transition: "0.2s",
                                    },
                                },
                                ".slick-prev": {
                                    left: "-40px",
                                    _before: {
                                        content: '"◀"',
                                    },
                                },
                                ".slick-next": {
                                    right: "-40px",
                                    _before: {
                                        content: '"▶"',
                                    },
                                },
                            }}
                        >
                            <Slider2 {...slickSettings}>
                                {NEWS_ITEMS.map((news, index) => (
                                    <NewsSlide
                                        key={index}
                                        label={news.label}
                                        content={news.content}
                                    />
                                ))}
                            </Slider2>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

interface NewsItem {
    label: string;
    content: string;
}

const NEWS_ITEMS: Array<NewsItem> = [
    {
        label: "Dịch vụ Voice Brandname",
        content:
            "Voice brandname là dịch vụ cuộc gọi hiển thị thương hiệu của doanh nghiệp mỗi khi doanh nghiệp thực hiện cuộc gọi đến khách hàng. Thay vì hiển thị số điện thoại, tên thương hiệu của doanh nghiệp sẽ được hiển thị trên màn hình điện thoại của khách hàng. Hiện tại, VBot đã hỗ trợ đầu số brandname của cả 3 nhà mạng Viettel, Mobifone, Vinaphone.",
    },
    {
        label: "Số hotline Quảng cáo/Chăm sóc khách hàng",
        content:
            "Số hotline là số quảng cáo sẽ cho phép thực hiện các cuộc gọi quảng cáo đến thuê bao khách hàng trong thời gian từ 8h đến 17h các ngày trong tuần. Số hotline là số chăm sóc khách hàng có thể sử dụng để gọi cho khách hàng toàn thời gian nhưng không được phép thực hiện các cuộc gọi quảng cáo. Cả hai dạng số hotline đều không được phép spam cuộc gọi đến khách hàng.",
    },
    {
        label: "Một số mẹo sử dụng VBot hiệu quả",
        content:
            "Số mobile sip trung sử dụng giao thức internet để thực hiện cuộc gọi nên hãy đảm bảo rằng kết nối internet của bạn luôn ổn định để có chất lượng đàm thoại tốt nhất.",
    },
];
