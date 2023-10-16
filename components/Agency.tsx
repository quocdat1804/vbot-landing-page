"use client";

import {
  Box,
  chakra,
  Image,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import config from '../next.config';

export default function Agency() {
  return (
    <Box maxW="7xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }} paddingBottom={16}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"md"}
        pt={10}
        pb={10}
        fontWeight={"semibold"}
        color={'white'}
      >
        VBot - Đại lý chính thức của dịch vụ Mobile SIP Trunking và Voice
        Brandname của các nhà mạng
      </chakra.h1>
      <SimpleGrid columns={3} spacing={4}>
        {CUSTOMER_ITEMS.map((navItem) => (
          <Box
            key={navItem.label}
            bg={'white'}
            borderRadius={{ base: "md", md: "lg" }}
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
      {/* <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={4}
        px={{ base: 9, sm: 12, md: 40 }}
      >
        {CUSTOMER_ITEMS.map((item) => (
          <Box
            key={item.label}
            bg={'white'}
            borderRadius='lg'
          >
            <Center>
              <Image
                alt={item.label}
                src={item.image}
                height={'100%'}
              />
            </Center>
          </Box>

        ))}
      </SimpleGrid> */}
    </Box>
  );
}

interface AgencyItem {
  label: string;
  image: string;
}


const CUSTOMER_ITEMS: Array<AgencyItem> = [
  {
    label: "vinaphone",
    image: `${config.basePath}/argency-vinaphone.png`,
  },
  {
    label: "viettel",
    image: `${config.basePath}/argency-viettel.png`,
  },
  {
    label: "mobiphone",
    image: `${config.basePath}/argency-mobifone.png`,
  },

];
