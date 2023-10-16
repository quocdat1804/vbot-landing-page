import {
    Box,
    VStack,
    HStack,
    Text,
    Icon,
    IconProps,
    Stack,
    Heading,
    ListItem,
    UnorderedList,
    Spacer,
    Container,
    Wrap,
    WrapItem,
    SimpleGrid,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { useMediaQuery } from "@chakra-ui/react";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
    ssr: false,
});

type SlideProps = {
    items: FeatureItem[];
};

interface CardProps {
    heading: string;
    content: string;
    subContent: string[];
    icon: ReactElement;
}

const Card = ({ heading, content, subContent, icon }: CardProps) => {
    return (
        <Box
            maxW={{ base: "full", md: "400px" }}
            bg={"white"}
            overflow="hidden"
            borderRadius="lg"
            p={5}
            transition={"all 0.5s"}
        >
            <Stack align={"start"} spacing={2}>
                <Stack direction={"row"} alignItems={"center"} spacing={4}>
                    {icon}
                    <Heading size="sm">{heading}</Heading>
                </Stack>
                <Box mt={1}>
                    <Text mt={1} fontSize={"14px"} fontWeight={"semibold"} maxW={"360px"}>
                        {content}
                    </Text>
                    {subContent.length > 0 && (
                        <UnorderedList>
                            {subContent.map((item) => (
                                <ListItem key={item}>
                                    <Text mt={1} fontSize={"14px"} fontWeight={"semibold"}>
                                        {item}
                                    </Text>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    )}
                </Box>
            </Stack>
        </Box>
    );
};

const Slide = ({ items }: SlideProps) => {
    return (
        <VStack w="１００％" h="１００％" mx="4" borderRadius={"md"} px={4} py={4}>
            <SimpleGrid columns={2} spacing={10}>
                {items.map((item) => (
                    <Card
                        key={item.label}
                        heading={item.label}
                        icon={item.image}
                        content={item.content}
                        subContent={item.subContent}
                    />
                ))}
            </SimpleGrid>
        </VStack>
    );
};

const Slide2 = ({ heading, content, subContent, icon }: CardProps) => {
    return (
        <VStack w="１００％" h="１００％" mx="4" borderRadius={"md"} px={4} py={4}>
            <Card
                heading={heading}
                icon={icon}
                content={content}
                subContent={subContent}
            />
        </VStack>
    );
};

export default function FeatureSlider() {
    const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
    };
    const slickSettings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        // <Box>
        //     <Container maxW={"4xl"}>
        <Box pb={12}>
            <Box
                sx={{
                    ".slick-dots": {
                        transform: "translateY(1em)",
                    },
                    ".slick-dots li button": {
                        _before: {
                            backgroundColor: "white",
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
                {isLargerThan600 ? <Slider {...slickSettings}>
                    <Slide
                        key="0"
                        items={[
                            FEATURE_ITEMS[0],
                            FEATURE_ITEMS[1],
                            FEATURE_ITEMS[2],
                            FEATURE_ITEMS[3],
                        ]}
                    />
                    <Slide
                        key="0"
                        items={[FEATURE_ITEMS[4], FEATURE_ITEMS[5], FEATURE_ITEMS[6],]}
                    />
                </Slider> :
                    <Slider {...slickSettings2}>
                        {FEATURE_ITEMS.map((item, index) => (
                            <Slide2
                                key={index}
                                heading={item.label}
                                icon={item.image}
                                content={item.content}
                                subContent={item.subContent} />
                        ))}

                    </Slider>}

            </Box>
        </Box>
        //     </Container>
        // </Box>
    );
}

const DeviceIcon = (props: IconProps) => {
    return (
        <Icon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                fill="#1CAB4E"
            />
            <path
                d="M11.25 9H22.5C23.7305 9 24.75 10.0195 24.75 11.25V12.375H22.5V11.25H11.25V19.125H19.125V22.5H9.42188C7.94531 22.5 6.75 21.3047 6.75 19.8281C6.75 19.4414 7.03125 19.125 7.41797 19.125H9V11.25C9 10.0195 9.98438 9 11.25 9ZM22.5 24.75H27V15.75H22.5V24.75ZM20.25 15.1875C20.25 14.2734 20.9883 13.5 21.9375 13.5H27.5625C28.4766 13.5 29.25 14.2734 29.25 15.1875V25.3125C29.25 26.2617 28.4766 27 27.5625 27H21.9375C20.9883 27 20.25 26.2617 20.25 25.3125V15.1875Z"
                fill="white"
            />
        </Icon>
    );
};

const SavingIcon = (props: IconProps) => {
    return (
        <Icon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                fill="#1CAB4E"
            />
            <path
                d="M24.7734 8.60187C24.8789 8.70734 24.9844 8.81281 25.0195 8.95343C25.0898 9.09406 25.125 9.23468 25.125 9.37531V12.7503C25.125 13.3831 24.5977 13.8753 24 13.8753C23.3672 13.8753 22.875 13.3831 22.875 12.7503V12.1175L19.1484 15.8089C18.7266 16.2308 18.0586 16.2659 17.6367 15.8792L14.4375 13.137L11.2031 15.8792C10.7461 16.2659 10.043 16.2308 9.62109 15.7386C9.23438 15.2816 9.26953 14.5784 9.76172 14.1566L13.6992 10.7816C14.1211 10.43 14.7188 10.43 15.1406 10.7816L18.3047 13.4886L21.2578 10.5003H20.625C19.9922 10.5003 19.5 10.0081 19.5 9.37531C19.5 8.77765 19.9922 8.25031 20.625 8.25031H24C24.2812 8.25031 24.5625 8.39093 24.7734 8.60187ZM8.25 18.9378C8.25 18.0237 8.98828 17.2503 9.9375 17.2503H24.5625C25.4766 17.2503 26.25 18.0237 26.25 18.9378V24.5628C26.25 25.512 25.4766 26.2503 24.5625 26.2503H9.9375C8.98828 26.2503 8.25 25.512 8.25 24.5628V18.9378ZM9.9375 22.8753V24.5628H11.625C11.625 23.6487 10.8516 22.8753 9.9375 22.8753ZM11.625 18.9378H9.9375V20.6253C10.8516 20.6253 11.625 19.887 11.625 18.9378ZM24.5625 22.8753C23.6133 22.8753 22.875 23.6487 22.875 24.5628H24.5625V22.8753ZM22.875 18.9378C22.875 19.887 23.6133 20.6253 24.5625 20.6253V18.9378H22.875ZM19.5 21.7503C19.5 20.9769 19.043 20.2386 18.375 19.8167C17.6719 19.43 16.793 19.43 16.125 19.8167C15.4219 20.2386 15 20.9769 15 21.7503C15 22.5589 15.4219 23.2972 16.125 23.7191C16.793 24.1058 17.6719 24.1058 18.375 23.7191C19.043 23.2972 19.5 22.5589 19.5 21.7503Z"
                fill="white"
            />
        </Icon>
    );
};

const PuzzleIcon = (props: IconProps) => {
    return (
        <Icon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                fill="#1CAB4E"
            />
            <path
                d="M20.6754 9.72974H25.0538C26.251 9.72974 27.243 10.7217 27.243 11.9189V16.2973C27.243 16.6052 26.9694 16.8446 26.6957 16.8446H24.917C24.6775 16.8446 24.5065 17.0498 24.5065 17.2551V17.3919C24.5065 18.0076 23.9934 18.4865 23.4119 18.4865C22.7962 18.4865 22.3173 18.0076 22.3173 17.3919V17.2551C22.3173 17.0498 22.1121 16.8446 21.9069 16.8446H20.6754C20.3676 16.8446 20.1281 16.6052 20.1281 16.2973V15.2027C20.1281 14.9291 20.3676 14.6554 20.6754 14.6554H21.2227C21.8042 14.6554 22.3173 14.1765 22.3173 13.5608C22.3173 12.9793 21.8042 12.4662 21.2227 12.4662H20.6754C20.3676 12.4662 20.1281 12.2268 20.1281 11.9189V10.277C20.1281 10.0034 20.3676 9.72974 20.6754 9.72974ZM9.72949 18.4865V14.1081C9.72949 12.9109 10.6873 11.9189 11.9187 11.9189H16.2971C16.5707 11.9189 16.8444 12.1926 16.8444 12.4662V13.6976C16.8444 13.9371 17.0154 14.1081 17.2548 14.1081H17.3917C17.9732 14.1081 18.4862 14.6212 18.4862 15.2027C18.4862 15.8184 17.9732 16.2973 17.3917 16.2973H17.2548C17.0154 16.2973 16.8444 16.5025 16.8444 16.7078V18.4865C16.8444 18.7943 16.5707 19.0338 16.2971 19.0338H15.2025C14.8946 19.0338 14.6552 18.7943 14.6552 18.4865V17.9392C14.6552 17.3577 14.1421 16.8446 13.5606 16.8446C12.9449 16.8446 12.466 17.3577 12.466 17.9392V18.4865C12.466 18.7943 12.1923 19.0338 11.9187 19.0338H10.2768C9.96893 19.0338 9.72949 18.7943 9.72949 18.4865ZM9.72949 25.0541V20.6757C9.72949 20.402 9.96893 20.1284 10.2768 20.1284H16.2971C16.5707 20.1284 16.8444 20.402 16.8444 20.6757V21.7703C16.8444 22.0781 16.5707 22.3176 16.2971 22.3176H15.7498C15.1341 22.3176 14.6552 22.8307 14.6552 23.4122C14.6552 24.0279 15.1341 24.5068 15.7498 24.5068H16.2971C16.5707 24.5068 16.8444 24.7804 16.8444 25.0541V26.696C16.8444 27.0038 16.5707 27.2432 16.2971 27.2432H11.9187C10.6873 27.2432 9.72949 26.2855 9.72949 25.0541ZM17.939 20.6757C17.939 20.402 18.1784 20.1284 18.4862 20.1284H19.5808C19.8545 20.1284 20.1281 20.402 20.1281 20.6757V21.223C20.1281 21.8387 20.607 22.3176 21.2227 22.3176C21.8042 22.3176 22.3173 21.8387 22.3173 21.223V20.6757C22.3173 20.402 22.5568 20.1284 22.8646 20.1284H24.5065C24.7802 20.1284 25.0538 20.402 25.0538 20.6757V25.0541C25.0538 26.2855 24.0618 27.2432 22.8646 27.2432H18.4862C18.1784 27.2432 17.939 27.0038 17.939 26.696V20.6757Z"
                fill="white"
            />
        </Icon>
    );
};

const ConnectIcon = (props: IconProps) => {
    return (
        <Icon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                fill="#1CAB4E"
            />
            <path
                d="M22.126 16.8752C21.2119 16.8752 20.3682 16.5236 19.7705 15.9611L16.4658 17.6135C16.4658 17.7189 16.501 17.8596 16.501 18.0002C16.501 18.176 16.4658 18.2814 16.4658 18.4221L19.7705 20.0744C20.3682 19.5119 21.2119 19.1252 22.126 19.1252C23.9893 19.1252 25.501 20.6369 25.501 22.5002C25.501 24.3635 23.9893 25.8752 22.126 25.8752C20.2627 25.8752 18.751 24.3635 18.751 22.5002C18.751 22.3596 18.751 22.2189 18.751 22.1135L15.4463 20.4611C14.8486 21.0236 14.0049 21.3752 13.126 21.3752C11.2627 21.3752 9.75098 19.8635 9.75098 18.0002C9.75098 16.1369 11.2627 14.6252 13.126 14.6252C14.0049 14.6252 14.8486 15.0119 15.4463 15.5744L18.751 13.9221C18.751 13.7814 18.751 13.6408 18.751 13.5002C18.751 11.6369 20.2627 10.1252 22.126 10.1252C23.9893 10.1252 25.501 11.6369 25.501 13.5002C25.501 15.3635 23.9893 16.8752 22.126 16.8752Z"
                fill="white"
            />
        </Icon>
    );
};

const ManagerIcon = (props: IconProps) => {
    return (
        <Icon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                fill="#1CAB4E"
            />
            <path
                d="M14.624 8.99979C16.2061 8.99979 17.6826 9.87869 18.4912 11.2498C19.2998 12.656 19.2998 14.3787 18.4912 15.7498C17.6826 17.156 16.2061 17.9998 14.624 17.9998C13.0068 17.9998 11.5303 17.156 10.7217 15.7498C9.91309 14.3787 9.91309 12.656 10.7217 11.2498C11.5303 9.87869 13.0068 8.99979 14.624 8.99979ZM13.0068 19.6873H16.2061C16.6279 19.6873 17.0498 19.7576 17.4365 19.8279C17.3662 20.4607 17.6826 21.0584 18.21 21.4099C17.6123 21.7615 17.2607 22.4998 17.5068 23.2732C17.6475 23.7303 17.8232 24.1521 18.0693 24.574C18.3154 25.031 18.5967 25.4178 18.9131 25.7342C19.4756 26.3318 20.3193 26.4021 20.9521 26.0506V26.0857C20.9521 26.4021 21.0225 26.7537 21.1982 26.9998H7.76855C7.20605 26.9998 6.74902 26.5428 6.74902 25.9803C6.74902 22.4998 9.52637 19.6873 13.0068 19.6873ZM22.0771 16.699C22.0771 16.4529 22.2178 16.2068 22.4639 16.1717C22.8154 16.0662 23.2021 16.031 23.624 16.031C24.0107 16.031 24.3975 16.0662 24.749 16.1717C24.9951 16.2068 25.1709 16.4529 25.1709 16.699V17.7537C25.417 17.8943 25.6982 18.0349 25.9443 18.2107L26.8232 17.7185C27.0342 17.5779 27.2803 17.6131 27.4561 17.7888C27.7373 18.0701 27.9834 18.3865 28.1592 18.7381C28.3701 19.0896 28.5459 19.4763 28.6514 19.8279C28.7217 20.074 28.6162 20.3201 28.4053 20.4607L27.5264 20.9529C27.5264 21.0935 27.5264 21.2342 27.5264 21.3748C27.5264 21.5154 27.5264 21.656 27.5264 21.8318L28.4053 22.324C28.6162 22.4295 28.7217 22.6756 28.6514 22.9217C28.5459 23.3084 28.3701 23.6599 28.1592 24.0115C27.9834 24.3631 27.7373 24.6795 27.4561 24.9607C27.2803 25.1365 27.0342 25.1717 26.8232 25.0662L25.9443 24.5388C25.6982 24.7498 25.4521 24.8904 25.1709 24.9959V26.0857C25.1709 26.3318 24.9951 26.5428 24.749 26.6131C24.3975 26.6834 24.0107 26.7185 23.624 26.7185C23.2021 26.7185 22.8154 26.6834 22.4639 26.6131C22.2178 26.5428 22.0771 26.3318 22.0771 26.0857V24.9959C21.7959 24.8904 21.5146 24.7498 21.2686 24.5388L20.3896 25.0662C20.1787 25.1717 19.9326 25.1365 19.7568 24.9607C19.4756 24.6795 19.2646 24.3631 19.0537 24.0115C18.8428 23.6599 18.667 23.3084 18.5615 22.9217C18.4912 22.6756 18.5967 22.4295 18.8076 22.324L19.6865 21.8318C19.6865 21.656 19.6865 21.5154 19.6865 21.3748C19.6865 21.2342 19.6865 21.0935 19.6865 20.9529L18.8076 20.4256C18.5967 20.3201 18.4912 20.074 18.5615 19.8279C18.667 19.4763 18.8428 19.0896 19.0537 18.7381C19.2295 18.3865 19.4756 18.0701 19.7568 17.7888C19.9326 17.6131 20.1787 17.5779 20.3896 17.7185L21.2686 18.2107C21.5146 18.0349 21.7959 17.8943 22.0771 17.7537V16.699ZM25.3115 21.3748C25.3115 20.7771 24.9951 20.1795 24.4678 19.8631C23.9404 19.5467 23.2725 19.5467 22.7451 19.8631C22.2178 20.1795 21.9014 20.7771 21.9365 21.3748C21.9014 22.0076 22.2178 22.6053 22.7451 22.9217C23.2725 23.2381 23.9404 23.2381 24.4678 22.9217C24.9951 22.6053 25.3115 22.0076 25.3115 21.3748Z"
                fill="white"
            />
        </Icon>
    );
};

const HotlineIcon = (props: IconProps) => {
    return (
        <Icon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                fill="#1CAB4E"
            />
            <path
                d="M16.8633 10.1599C17.4609 10.2654 17.8828 10.8279 17.7773 11.4607L17.4258 13.4998H20.7656L21.1875 11.074C21.293 10.4764 21.8555 10.0545 22.4883 10.1599C23.0859 10.2654 23.5078 10.8279 23.4023 11.4607L23.0508 13.4998H25.125C25.7227 13.4998 26.25 14.0271 26.25 14.6248C26.25 15.2576 25.7227 15.7498 25.125 15.7498H22.6992L21.9258 20.2498H24C24.5977 20.2498 25.125 20.7771 25.125 21.3748C25.125 22.0076 24.5977 22.4998 24 22.4998H21.5742L21.1523 24.9607C21.0469 25.5584 20.4844 25.9803 19.8516 25.8748C19.2539 25.7693 18.832 25.2068 18.9375 24.574L19.2891 22.5349H15.9492L15.5273 24.9607C15.4219 25.5584 14.8594 25.9803 14.2266 25.8748C13.6289 25.7693 13.207 25.2068 13.3125 24.574L13.6641 22.4998H11.625C10.9922 22.4998 10.5 22.0076 10.5 21.3748C10.5 20.7771 10.9922 20.2498 11.625 20.2498H14.0156L14.7891 15.7498H12.75C12.1172 15.7498 11.625 15.2576 11.625 14.6248C11.625 14.0271 12.1172 13.4998 12.75 13.4998H15.1406L15.5625 11.074C15.668 10.4764 16.2305 10.0545 16.8633 10.1599ZM17.0742 15.7498L16.3008 20.2498H19.6406L20.4141 15.7498H17.0742Z"
                fill="white"
            />
        </Icon>
    );
};

const DataIcon = (props: IconProps) => {
    return (
        <Icon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                fill="#1CAB4E"
            />
            <path
                d="M26.25 11.8123V13.4998C26.25 15.0818 22.6992 16.3123 18.375 16.3123C14.0156 16.3123 10.5 15.0818 10.5 13.4998V11.8123C10.5 10.2654 14.0156 8.99979 18.375 8.99979C22.6992 8.99979 26.25 10.2654 26.25 11.8123ZM24.3164 16.5584C25.0547 16.3123 25.7227 15.9607 26.25 15.574V19.1248C26.25 20.7068 22.6992 21.9373 18.375 21.9373C14.0156 21.9373 10.5 20.7068 10.5 19.1248V15.574C10.9922 15.9607 11.6953 16.3123 12.3984 16.5584C13.9805 17.1209 16.0898 17.4373 18.375 17.4373C20.625 17.4373 22.7344 17.1209 24.3164 16.5584ZM10.5 21.199C10.9922 21.5857 11.6953 21.9373 12.3984 22.1834C13.9805 22.7459 16.0898 23.0623 18.375 23.0623C20.625 23.0623 22.7344 22.7459 24.3164 22.1834C25.0547 21.9373 25.7227 21.5857 26.25 21.199V24.1873C26.25 25.7693 22.6992 26.9998 18.375 26.9998C14.0156 26.9998 10.5 25.7693 10.5 24.1873V21.199Z"
                fill="white"
            />
        </Icon>
    );
};

interface FeatureItem {
    label: string;
    image: JSX.Element;
    content: string;
    subContent: string[];
}

const FEATURE_ITEMS: Array<FeatureItem> = [
    {
        label: "Đa nền tảng",
        image: <DeviceIcon h={10} w={10} />,
        content: "Tổng đài VBot hỗ trợ người dùng trên đa nền tảng \nthiết bị:",
        subContent: [
            "Nền tảng: Web, App (iOS, Android)",
            "Thiết bị: Smartphone, PC, Laptop, máy tính bảng,\nIP Phone",
        ],
    },
    {
        label: "Tiết kiệm chi phí",
        image: <SavingIcon h={10} w={10} />,
        content: "",
        subContent: [
            "Không tốn phí duy trì.",
            "Không cần nhân viên vận hành.",
            "Nâng cấp thành viên/gói cước dễ dàng.",
        ],
    },
    {
        label: "Tích hợp CRM sẵn có của doanh nghiệp",
        image: <PuzzleIcon h={10} w={10} />,
        content: "Tích hợp với hệ thống CRM sẵn có của doanh \nnghiệp qua API.",
        subContent: [],
    },
    {
        label: "Tích hợp quản lý đa kênh",
        image: <ConnectIcon h={10} w={10} />,
        content:
            "Quản lý cuộc gọi đến, email, tin nhắn và nhiều kênh \nliên lạc khác tất cả trong một nền tảng đơn \ngiản.",
        subContent: [],
    },
    {
        label: "Hỗ trợ quản trị",
        image: <ManagerIcon h={10} w={10} />,
        content: "Quản lý thành viên, theo dõi phân tích hiệu suất \nlàm việc:",
        subContent: [
            "Thống kê cuộc gọi, nghe lại ghi âm, xuất báo cáo.",
            "Quản lý cuộc gọi, hội thoại nhóm.",
        ],
    },
    {
        label: "Đa dạng đầu số",
        image: <HotlineIcon h={10} w={10} />,
        content:
            "Dễ dàng kết nối với các đầu số SIP di động, cố định \n(024, 028, 026,...), đầu số tổng đài (1800, 1900) và \nđầu số Voice Brandname.",
        subContent: [],
    },
    {
        label: "Phân chia data khách hàng cho thành viên",
        image: <DataIcon h={10} w={10} />,
        content:
            "Tự động phân chia dữ liệu khách hàng, giúp đội\n telesale làm việc hiệu quả hơn, tập trung vào việc \nchốt đơn.",
        subContent: [],
    },
];
