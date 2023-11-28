"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import config from "../next.config";

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <Box id="download" bgGradient="linear(92deg, #2561A1 0%, #1CAB4E 100%)">
      <Box
        as={motion.div}
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
          <Stack
            align={"center"}
            py={{ base: "20px", md: "40px" }}
            direction={{ base: "column", md: "row" }}
            spacing={20}
          >
            <Flex>
              <Stack
                spacing={{ base: 2, md: 4 }}
                align={{ base: "center", md: "start" }}
                textAlign={{ base: "center", md: "start" }}
              >
                <Heading
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                  color="white"
                >
                  TẢI XUỐNG SỬ DỤNG NGAY
                </Heading>
                <Text color={"white"} fontSize={"xl"}>
                  VBot hiện đã có mặt trên Google Play, App Store và Windows.
                </Text>
                <Image
                  my={8}
                  alt={"Qr donload"}
                  fit={"scale-down"}
                  align={"start"}
                  src={`${config.basePath}/qr.png`}
                  display={{ base: "inline-flex", md: "none" }}
                />
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                  {DOWNLOAD_ITEMS.map((item) => (
                    <Link href={item.link} key={item.label}>
                      <Image
                        key={item.label}
                        alt={item.label}
                        fit={"scale-down"}
                        align={"start"}
                        src={item.image}
                      />
                    </Link>
                  ))}
                </SimpleGrid>
              </Stack>
            </Flex>
            <Spacer display={{ base: "none", md: "inline-flex" }} />
            <Image
              alt={"Qr donload"}
              fit={"scale-down"}
              align={"start"}
              src={`${config.basePath}/qr.png`}
              display={{ base: "none", md: "inline-flex" }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

interface DownloadItem {
  label: string;
  image: string;
  link: string;
}

const DOWNLOAD_ITEMS: Array<DownloadItem> = [
  {
    label: "AppStore",
    image: `${config.basePath}/appstore.png`,
    link: "https://apps.apple.com/us/app/vbot/id1538262788",
  },
  {
    label: "CHPlay",
    image: `${config.basePath}/google.png`,
    link: "https://play.google.com/store/apps/details?id=com.vpmedia.vbot",
  },
  {
    label: "Windows",
    image: `${config.basePath}/windows.png`,
    link: "Microsoft",
  },
];
