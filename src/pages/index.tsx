import type { NextPage } from "next";

import {
  Text,
  Flex,
  Heading,
  Box,
  Container,
  Button,
  Stack,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Layout from "@/components/layout";
import TradingViewWidget from "@/components/TradingViewWidget";

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
          <Stack
            align="center"
            textAlign="center"
            spacing={{ base: 7, md: 10 }}
            py={{ base: 8, md: 28 }}
          >
            <Heading
              fontWeight="bold"
              fontSize={{ base: "5xl", md: "5xl" }}
              lineHeight={"110%"}
            >
              Trending Articles
            </Heading>
          </Stack>
          <Image src="/IZOO.JPG" alt="News1" w={{ base: 100, md: 50 }} />
          <Stack
            align="center"
            textAlign="center"
            spacing={{ base: 7, md: 10 }}
            py={{ base: 8, md: 28 }}
          >
            <Heading
              fontWeight="bold"
              fontSize={{ base: "5xl", md: "5xl" }}
              lineHeight={"110%"}
            >
              Trending Stocks
            </Heading>
          </Stack>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Home;
