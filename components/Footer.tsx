"use client";

import {
  Box,
  chakra,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebook, FaFacebookMessenger, FaSkype } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"semibold"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"#0A2C37"}
      color={"white"}
    >
      <Container as={Stack} maxW={"6xl"} py={12}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Công ty CP Công nghệ Truyền thông Việt Phát</ListHeader>
            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Địa chỉ:</Text>
              <Text fontWeight={"light"}>
                3/4, 163 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội
              </Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Điện thoại:</Text>
              <Text fontWeight={"light"}>0857 066 866</Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Email:</Text>
              <Text fontWeight={"light"}>sale@vpmedia.vn</Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Số ĐKKD:</Text>
              <Text fontWeight={"light"}>0106342003</Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Nơi cấp:</Text>
              <Text fontWeight={"light"}>
                Sở kế hoạch và đầu tư Thành phố Hà Nội
              </Text>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Chính sách</ListHeader>
            <Box
              as="a"
              href={"#"}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách và quy định chung
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách bảo mật
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách bảo hành
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách đổi trả
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách vận chuyển
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Liên kết</ListHeader>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Messenger"} href={"#"}>
                <FaFacebookMessenger />
              </SocialButton>
              <SocialButton label={"Skype"} href={"#"}>
                <FaSkype />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </ Box>
  );
}
