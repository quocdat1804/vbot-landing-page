"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Center,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"

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
    image: "/customer-zalo.png",
  },
  {
    label: "Viettel Post",
    image: "/customer-viettelpost.png",
  },
  {
    label: "EUROSUN",
    image: "/customer-eurosun.png",
  },
  {
    label: "Oneway",
    image: "/customer-oneway.png",
  },
  {
    label: "hnue",
    image: "/customer-hnue.png",
  },
  {
    label: "Onschool",
    image: "/customer-onschool.png",
  },
  {
    label: "MBS Pilates",
    image: "/customer-mbspilates.png",
  },
  {
    label: "500",
    image: "/customer-500.png",
  },
];


// export default function Customers() {
//   return (
//     <Box bg={useColorModeValue("gray.50", "gray.900")}>
//       <Container
//         maxW={"6xl"}
//         bg={useColorModeValue("gray.50", "gray.900")}
//         pt={8}
//       >
//         <Stack

//           align={"start"}
//           spacing={{ base: 8, md: 10 }}
//           py={{ base: 10, md: 18 }}
//           direction={{ base: "column", md: "row" }}
//         >
//           <Stack flex={2} spacing={{ base: 5, md: 10 }} pt={8}>
//             <Heading
//               lineHeight={1.1}
//               fontWeight={600}
//               fontSize={{ base: "1xl", sm: "2xl", lg: "4xl" }}
//             >
//               <Text as={"span"} position={"relative"}>
//                 Khách hàng của chúng tôi
//               </Text>
//             </Heading>
//             <SimpleGrid columns={{ base: 3, md: 4 }} spacing={4}>
//               {CUSTOMER_ITEMS.map((navItem) => (
//                 <Box
//                   key={navItem.label}
//                   bg={'white'}
//                   borderRadius='lg'
//                 >
//                   <Center>
//                     <Image
//                       alt={navItem.label}
//                       src={navItem.image}
//                       height={'100%'}
//                     />
//                   </Center>
//                 </Box>
//               ))}
//             </SimpleGrid>
//           </Stack>
//           <Flex
//             flex={1}
//             justify={"center"}
//             align={"center"}
//             position={"relative"}
//             w={"full"}
//           >
//             <Image
//               alt={"Hero Image"}
//               fit={"scale-down"}
//               align={"center"}
//               w={"100%"}
//               h={"100%"}
//               src="/customer.png"
//             />
//           </Flex>
//         </Stack>

//       </Container>
//     </Box >
//   );
// }