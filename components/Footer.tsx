"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Link,
  Image
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import config from "../next.config";

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
    <Box bg={"#0A2C37"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={12}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Công ty CP Công nghệ Truyền thông Việt Phát</ListHeader>
            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Địa chỉ:</Text>
              <Text>3/4, 163 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội</Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Điện thoại:</Text>
              <Text>0857 066 866</Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Email:</Text>
              <Text>sale@vpmedia.vn</Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Số ĐKKD:</Text>
              <Text>0106342003</Text>
            </Stack>

            <Stack direction={"row"}>
              <Text fontWeight={"semibold"}>Nơi cấp:</Text>
              <Text>Sở kế hoạch và đầu tư Thành phố Hà Nội</Text>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Chính sách</ListHeader>
            <Box
              as="a"
              href={`${config.basePath}/privacy/trust`}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách và quy định chung
            </Box>
            <Box
              as="a"
              href={`${config.basePath}/privacy/privacypolicy`}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách bảo mật
            </Box>
            <Box
              as="a"
              href={`${config.basePath}/privacy/paymentpolicy`}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách thanh toán
            </Box>
            <Box
              as="a"
              href={`${config.basePath}/privacy/warrantypolicy`}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách bảo hành
            </Box>
            <Box
              as="a"
              href={`${config.basePath}/privacy/exchangepolicy`}
              _hover={{
                color: "#168F41",
              }}
            >
              Chính sách đổi trả
            </Box>
            <Box
              as="a"
              href={`${config.basePath}/privacy/transportpolicy`}
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
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/vbotapp"}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={"Messenger"}
                href={"https://www.facebook.com/messages/t/100252124922062"}
              >
                <FaFacebookMessenger />
              </SocialButton>
            </Stack>
            <Link as={"a"} target="_blank" rel="noopener noreferrer" href={"http://online.gov.vn/Home/WebDetails/74988#"} pt={2}>
              <Image
                width={"200px"}
                alt={"Đã thông báo Bộ Công Thương"}
                fit={"scale-down"}
                align={"start"}
                src={`${config.basePath}/logo-bct.png`}
              />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
