"use client";

import {
    Container,
    Box,
    Heading,
    Text,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import config from "../next.config";

export default function Features() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1.33"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <Container id="feature" maxW={"7xl"} py={0} textAlign={"center"}>
            <Box
                as={motion.div}
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
            >
                <Container maxW={"7xl"} pt={{ base: 10, md: 12 }} textAlign={"center"}>
                    <Heading fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }} mb={8}>
                        Các tính năng của VBot
                    </Heading>
                    <Tabs
                        align="center"
                        colorScheme="green"
                        variant="unstyled"
                        display={{ base: "none", md: "contents" }}
                    >
                        <TabList>
                            {FEATURE_ITEMS.map((tab, index) => (
                                <Tab
                                    key={index}
                                    _selected={{ color: "brand.400", bg: "brand.100" }}
                                    fontWeight={"semibold"}
                                >
                                    {tab.tabName}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels>
                            {FEATURE_ITEMS.map((tab, index) => (
                                <TabPanel key={index}>
                                    <SubTab data={tab.subTabs} />
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </Tabs>
                    <Accordion allowToggle display={{ base: "contents", md: "none" }}>
                        {FEATURE_ITEMS.map((tab, index) => (
                            <AccordionItem key={index}>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex="1" textAlign="left">
                                            {tab.tabName}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Accordion allowToggle>
                                        {tab.subTabs.map((subTab, index) => (
                                            <AccordionItem key={subTab.name}>
                                                <h2>
                                                    <AccordionButton>
                                                        <Box as="span" flex="1" textAlign="left">
                                                            {subTab.name}
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel pb={4}>
                                                    {subTab.content}
                                                    <Image
                                                        alt={subTab.content}
                                                        src={subTab.image}
                                                    />
                                                </AccordionPanel>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Container>
            </Box>
        </Container>
    );
}

const SubTab = (props: Props) => {
    return (
        <Tabs
            orientation={"vertical"}
            align="start"
            colorScheme="green"
            variant="unstyled"
            py={12}
            defaultIndex={0}
        >
            <TabList alignItems={"start"} w={"400px"}>
                {props.data.map((tab, index) => (
                    <Tab
                        key={index}
                        _selected={{ color: "brand.400", bg: "brand.100" }}
                        fontWeight={"semibold"}
                        textAlign={"start"}
                    >
                        <VStack alignItems={"start"}>
                            <Text>{tab.name}</Text>

                            <Text fontWeight={"normal"} fontSize={14}>
                                {tab.content}
                            </Text>
                        </VStack>
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {props.data.map((tab, index) => (
                    <TabPanel key={index}>
                        <Image
                            alt={tab.content}
                            fit={"scale-down"}
                            align={"start"}
                            w={"100%"}
                            h={"100%"}
                            src={tab.image}
                        />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};

interface SubTabItem {
    name: string;
    content: string;
    image: string;
}

type Props = { data: SubTabItem[] };

interface TabItems {
    tabName: string;
    subTabs: SubTabItem[];
}

const FEATURE_ITEMS: Array<TabItems> = [
    {
        tabName: "Tổng đài",
        subTabs: [
            {
                name: "Lịch sử cuộc gọi",
                content:
                    "Theo dõi và quản lý thông tin cuộc gọi của tất cả thành viên trong nhóm tổng đài.",
                image: `${config.basePath}/f00.png`,
            },
            {
                name: "Giám sát",
                content:
                    "Giám sát thời gian thực cuộc gọi của thành viên: Nghe lén, Giành cuộc gọi, Ngắt cuộc gọi.",
                image: `${config.basePath}/f01.png`,
            },
            {
                name: "Quản lý hotline",
                content:
                    "Quản lý tất cả các hotline có trong nhóm, tạo các alias hotline tự động chuyển theo mạng.",
                image: `${config.basePath}/f02.png`,
            },
            {
                name: "Cài đặt tương tác trả lời tự động",
                content:
                    "Cài đặt lời chào tổng đài, điều hướng khách hàng đến đúng bộ phận hỗ trợ chăm sóc.",
                image: `${config.basePath}/f03.png`,
            },
            {
                name: "Note, tagging",
                content:
                    "Tạo tag đánh dấu, phân loại cho từng cuộc gọi, giúp thống kê phân tích nhu cầu và loại khách hàng theo thông tin tag đã tạo.",
                image: `${config.basePath}/f04.png`,
            },
            {
                name: "Khảo sát đánh giá",
                content:
                    "Tạo tag đánh dấu, phân loại cho từng cuộc gọi, giúp thống kê phân tích nhu cầu và loại khách hàng theo thông tin tag đã tạo.",
                image: `${config.basePath}/f05.png`,
            },
        ],
    },
    {
        tabName: "Marketing",
        subTabs: [
            {
                name: "Gọi tự động",
                content:
                    "Tạo và thực hiện các cuộc gọi tự động đến danh sách thuê bao khách hàng được nhập vào.",
                image: `${config.basePath}/f10.png`,
            },
            {
                name: "Tin nhắn tự động",
                content:
                    "Tạo và thực hiện các cuộc gọi tự động đến danh sách thuê bao khách hàng được nhập vào.",
                image: `${config.basePath}/f11.png`,
            },
        ],
    },
    {
        tabName: "Mini CRM",
        subTabs: [
            {
                name: "Khách hàng",
                content:
                    "Tạo và thực hiện các cuộc gọi tự động đến danh sách thuê bao khách hàng được nhập vào.",
                image: `${config.basePath}/f20.png`,
            },
            {
                name: "Nhóm khách hàng",
                content:
                    "Nhóm khách hàng có các đặc điểm, tiêu chí giống nhau để quản lý dễ dàng hơn.",
                image: `${config.basePath}/f21.png`,
            },
            {
                name: "Kiểu khách hàng",
                content: "Kiểu khách hàng sử dụng sản phẩm dịch vụ của doanh nghiệp.",
                image: `${config.basePath}/f22.png`,
            },
            {
                name: "Trạng thái khách hàng",
                content: "Trạng thái khách hàng sử dụng dịch vụ của doanh nghiệp.",
                image: `${config.basePath}/f23.png`,
            },
            {
                name: "Tuỳ chỉnh thông tin",
                content:
                    "Tuỳ chỉnh thông tin khách hàng phù hợp với thông tin doanh nghiệp cần lưu trữ khách hàng.",
                image: `${config.basePath}/f24.png`,
            },
        ],
    },
    {
        tabName: "Công việc",
        subTabs: [
            {
                name: "Công việc",
                content:
                    "Tạo công việc trong nhóm, phân chia cho các thành viên trong nhóm xử lý công việc. Công việc cá nhân của bạn ở trong nhóm, các thành viên khác sẽ không thể xem công việc cá nhân của bạn.",
                image: `${config.basePath}/f30.png`,
            },
        ],
    },
    {
        tabName: "Báo cáo thống kê",
        subTabs: [
            {
                name: "Báo cáo theo ngày",
                content:
                    "Thống kê báo cáo theo ngày, có thể tuỳ chỉnh khoảng thời gian xem báo cáo.",
                image: `${config.basePath}/f40.png`,
            },
            {
                name: "Báo cáo theo tháng",
                content:
                    "Thống kê báo cáo theo tháng, có thể tuỳ chỉnh khoảng thời gian xem báo cáo.",
                image: `${config.basePath}/f41.png`,
            },
            {
                name: "Báo cáo theo thành viên",
                content:
                    "Thống kê báo cáo cuộc gọi chi tiết các thành viên trong nhóm theo khoảng thời gian tuỳ chỉnh",
                image: `${config.basePath}/f42.png`,
            },
            {
                name: "Báo cáo số lượng tagging",
                content:
                    "Thống kê báo cáo cuộc gọi chi tiết các thành viên trong nhóm theo khoảng thời gian tuỳ chỉnh",
                image: `${config.basePath}/f43.png`,
            },
        ],
    },
    {
        tabName: "Quản lý nhân sự",
        subTabs: [
            {
                name: "Quản lý thành viên",
                content: "Theo dõi, quản lý các thành viên trong nhóm tổng đài",
                image: `${config.basePath}/f50.png`,
            },
            {
                name: "Theo dõi, quản lý các thành viên trong nhóm tổng đài",
                content: "Tạo nhóm thành viên, chia thành viên ra theo các phòng ban.",
                image: `${config.basePath}/f51.png`,
            },
        ],
    },
];
