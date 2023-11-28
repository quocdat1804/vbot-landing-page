"use client";

import {
  Box,
  Container,
  Flex,
  Text,
  IconButton,
  Image,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Link as ChakraLink
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import config from '../next.config';

import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Container as={Stack} maxW={"7xl"} py={2}>
        <Flex
          minH={"60px"}
          py={{ base: 4 }}
          borderStyle={"solid"}
          borderRadius={"full"}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              color={"white"}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              _hover={{
                bg: "gray.200",
                color: "black"
              }}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            alignItems="center"
            justify={{ base: "center", md: "start" }}
          >
            <Stack as={"a"} href={`${config.basePath}/`} direction="row" alignItems="center">
              <Image
                boxSize="36px"
                objectFit="cover"
                src={`${config.basePath}/app-logo.png`}
                alt="VBot logo"
              />
              <Text
                bgGradient="linear(to-b, #1FC158, #129C43)"
                bgClip="text"
                fontSize={"3xl"}
                fontWeight={600}
              >
                VBot
              </Text>
            </Stack>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >

            <Button
              as={"a"}
              href={"https://vbot.vn/v2/login"}
              fontSize={"sm"}
              fontWeight={600}
              variant="outline"
              borderWidth={2}

              color={"white"}
              _hover={{
                bg: "brand.500",
                color: "white"
              }}
            >
              Đăng nhập
            </Button>


            <Button
              as={"a"}
              href={`${config.basePath}/contact-sales`}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"black"}
              bg="white"

              _hover={{
                bg: "brand.500",
                color: "white"
              }}
            >
              DÙNG THỬ MIỄN PHÍ
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"md"}
                fontWeight={"semibold"}
                color={"white"}
                background={"transparent"}
                _hover={{
                  textDecoration: "underline",
                  color: "white",
                  background: "transparent"
                }}
              >
                <Link activeClass="active" to={navItem.id} smooth={true} duration={500}>
                  {navItem.label}
                </Link>

              </Box>
            </PopoverTrigger>

          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack direction={"column"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"md"}
                fontWeight={"semibold"}
                color={"white"}
                background={"transparent"}
                _hover={{
                  textDecoration: "underline",
                  color: "white",
                  background: "transparent"
                }}
              >
                <Link activeClass="active" to={navItem.id} smooth={true} duration={500}>
                  {navItem.label}
                </Link>

              </Box>
            </PopoverTrigger>

          </Popover>
        </Box>
      ))}
    </Stack>
  );
};


interface NavItem {
  id: string;
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    id: "feature",
    label: "Tính năng",
    href: "#",
  },
  {
    id: "download",
    label: "Tải xuống VBot",
    href: "#",
  },
  // {
  //   label: "Giải pháp",
  //   children: [
  //     {
  //       label: "Ghi âm cuộc gọi, thống kê",
  //       subLabel: "Ghi âm cuộc gọi, tạo bảng thống kê",
  //       href: "#",
  //     },
  //     {
  //       label: "Quản lý nhóm, chiến dịch",
  //       subLabel: "Quản lý nhóm, chiến dịch thông minh",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Hướng dẫn",
  //   href: "#",
  // },

];
