import type { NextPage } from "next";

import { Text, Flex, Heading, Container, Stack } from "@chakra-ui/react";
import Layout from "@/components/layout";
import TradingViewWidget from "@/components/TradingViewWidget";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { query } = useRouter();
  const [sym, setSym] = useState("");

  useEffect(() => {
    if (query.symbol) {
      if (typeof query.symbol === "string") {
        setSym(query.symbol);
      } else if (Array.isArray(query.symbol)) {
        // Handle the case where 'query.symbol' is an array of strings
        // In this example, we simply take the first element of the array
        if (query.symbol.length > 0) {
          setSym(query.symbol[0]);
        }
      }
    }
  }, [query]);
  console.log(sym);
  if (sym.length < 1) return <Text>loading...</Text>;

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
            align="center"
            textAlign="center"
            spacing={{ base: 7, md: 10 }}
            py={{ base: 8, md: 28 }}
          >
            <Heading
              fontWeight="bold"
              fontSize={{ base: "5xl", md: "5xl" }}
              lineHeight={"110%"}
            ></Heading>
            <TradingViewWidget symbol={sym} />
          </Stack>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Home;
