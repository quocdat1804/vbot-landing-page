"use client";

import {
  Container,
  Stack,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Center,
  useColorModeValue
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"
import config from '../next.config';

export default function Customers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div ref={ref} style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}>
      <Box bg={useColorModeValue("gray.50", "gray.900")}>
        <Container
          maxW={"7xl"}
          py={12}
        >
          <Stack spacing={{ base: 5, md: 10 }} textAlign={"center"}>
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}

            >
              Khách hàng của chúng tôi
            </Heading>
            <SimpleGrid columns={{ base: 3, md: 4 }} spacing={4}>
              {CUSTOMER_ITEMS.map((navItem) => (
                <Box
                  key={navItem.label}
                  bg={'white'}
                  borderRadius='lg'
                >
                  <Center>
                    <Image
                      alt={navItem.label}
                      src={navItem.image}
                      height={'100%'}
                    />
                  </Center>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box >
    </motion.div>
  );
}

interface CustomerItem {
  label: string;
  image: string;
}

const CUSTOMER_ITEMS: Array<CustomerItem> = [
  {
    label: "Zalo",
    image: `${config.basePath}/customer-zalo.png`,
  },
  {
    label: "Viettel Post",
    image: `${config.basePath}/customer-viettelpost.png`,
  },
  {
    label: "EUROSUN",
    image: `${config.basePath}/customer-eurosun.png`,
  },
  {
    label: "Oneway",
    image: `${config.basePath}/customer-oneway.png`,
  },
  {
    label: "hnue",
    image: `${config.basePath}/customer-hnue.png`,
  },
  {
    label: "Onschool",
    image: `${config.basePath}/customer-onschool.png`,
  },
  {
    label: "MBS Pilates",
    image: `${config.basePath}/customer-mbspilates.png`,
  },
  {
    label: "500",
    image: `${config.basePath}/customer-500.png`,
  },
];


