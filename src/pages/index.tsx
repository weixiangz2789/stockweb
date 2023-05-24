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
                <Text as={"span"} color={"red.300"}>
                  Investico
                </Text>
              </Heading>
              <Text color={"black.500"} fontSize="2xl">
                [Temp]
              </Text>
              <br></br>
              <br></br>
                <TradingViewWidget></TradingViewWidget>
                <TradingViewWidget></TradingViewWidget>
            </Stack>
          </Container>
        </Flex>
      </Layout>
  );
};

export default Home;
