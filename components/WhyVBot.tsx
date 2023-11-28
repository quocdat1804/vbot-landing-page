"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import WhySlider from "@/components/WhySlider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyVBot() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1.33"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <Box bgGradient="linear(348deg, #2561A1 10%, #1CAB4E 110%)">
      <Box as={motion.div} ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}>
        <Container as={Stack} maxW={"7xl"} py={{ base: 12, xl: 20 }}>
          <Stack
            align={"center"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
          >
            <Stack spacing={{ base: 2, md: 4 }}>
              <Heading
                fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                color="white"
              >
                Tại sao bạn nên sử dụng tổng đài số VBot?
              </Heading>
              {/* <Flex>
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  as={"a"}
                  fontSize={"md"}
                  fontWeight={600}
                  href={"#"}
                  bg={"brand.500"}
                  color={"white"}
                  leftIcon={<InfoIcon />}
                  _hover={{
                    bg: "gray.200",
                    color: "black",
                  }}
                >
                  Tìm hiểu thêm
                </Button>
                <Spacer />
              </Flex> */}
            </Stack>
            <Container maxW={{ base: "xl", sm: "2xl", md: "4xl" }}>
              <WhySlider />
            </Container>
          </Stack>
        </Container>
      </Box>
    </Box>

  );
}
