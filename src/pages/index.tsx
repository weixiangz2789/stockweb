import type { NextPage } from "next";

import {
  Text,
  Flex,
  Heading,
  Box,
  Container,
  Stack,
  useDisclosure,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Layout from "@/components/layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import { truncate } from "fs";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout title="Home">
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        px={{ base: 2, md: 16 }}
      >
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            align="center"
            justify="center"
            textAlign="center"
            spacing={{ base: 7, md: 10 }}
            py={{ base: 8, md: 28 }}
          >
            <Heading
              fontWeight="bold"
              fontSize={{ base: "5xl", md: "5xl" }}
              lineHeight={"110%"}
            >
              Organize Your Stocks With
              <br />
              <Text as={"span"} color={"blue.300"}>
                StonkGuru
              </Text>
            </Heading>
            <Text color={"black.500"} fontSize="2xl">
              A modern investment platform that provides users with a simple and
              intuitive way to invest their money in a variety of financial
              instruments. With the help of StonkGuru, investors can create a
              personalized investment strategy that aligns with their financial
              goals and risk tolerance.
            </Text>
          </Stack>
        </Container>
      </Flex>
      <Stack align="left" textAlign="left" spacing={{ base: 7, md: 10 }}>
        <Heading
          fontWeight="bold"
          fontSize={{ base: "5xl", md: "5xl" }}
          lineHeight={"110%"}
          px={20}
        >
          Trending Articles
        </Heading>
      </Stack>
      <br></br>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Image
          src="\Apple-sues-god_thumb .jpg"
          alt="Logo"
          width={1000}
          height={600}
          p={10}
          px={20}
        />
        <Heading>
          <Text fontSize={25} p={10} style={{ flex: 1, flexWrap: "wrap" }}>
            Apple Drops the Ultimate Lawsuit: Sues God for Unauthorized Creation
            of Apple Devices in Heaven!
            <Text
              fontSize={18}
              py={10}
              fontWeight={"normal"}
              style={{ flex: 1, flexWrap: "wrap" }}
            >
              In an astonishing turn of events, Apple has filed a groundbreaking
              lawsuit, accusing God of creating apple devices in heaven without
              proper authorization. The legal battle unfold as the tech giant
              seeks to protect its trademark and intellectual property rights
              even in the divine realm.
            </Text>
          </Text>
        </Heading>
      </Box>

      <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Image
          src="\1607805320.webp"
          alt="Logo"
          width={1100}
          height={500}
          p={10}
          px={20}
          style={{ flex: 1, flexWrap: "wrap" }}
        />
        <Heading>
          <Text fontSize={20} p={10} style={{ flex: 1, flexWrap: "wrap" }}>
            SpongeBob SquarePants Unleashes Krabby Patty Stock Craze: Wall
            Street Sizzles in Profits
          </Text>
          <Text
            fontSize={18}
            py={10}
            fontWeight={"normal"}
            style={{ flex: 1, flexWrap: "wrap" }}
          >
            The Krabby Patty craze sends schockwaves through Wall Street as
            investors scramble to capitalize on the skyrocketing demand for the
            beloved fictional burger. Stocks of seafood and burger-related
            industries surge, while financial analysts attempt to gauge the
            long-term impact of this unexpected phenomenon on the market.
          </Text>
        </Heading>
      </Box>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Image
          src="\b24f40c8-e212-4765-a5b1-00a0c835e181-1667420600593-pfarm-with-png-watermarked.webp"
          alt="Logo"
          width={1100}
          height={500}
          p={10}
          px={20}
          style={{ flex: 1, flexWrap: "wrap" }}
        />
        <Heading>
          <Text fontSize={20} p={10} style={{ flex: 1, flexWrap: "wrap" }}>
            Friendly Invasion of Mars Leads to Worldwide Space Research Stock
            Rise
          </Text>
          <Text
            fontSize={18}
            py={10}
            fontWeight={"normal"}
            style={{ flex: 1, flexWrap: "wrap" }}
          >
            In an astonishing turn of events, Apple has filed a groundbreaking
            lawsuit, accusing God of creating apple devices in heaven without
            proper authorization. The legal battle unfold as the tech giant
            seeks to protect its trademark and intellectual property rights even
            in the divine realm.
          </Text>
        </Heading>
      </Box>
    </Layout>
  );
};

export default Home;
