import type { NextPage } from "next";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Heading,
  Stack,
  Divider,
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
import Link from "next/link";

const WatchList: NextPage = () => {
  const [watchlist, setWatchlist] = useState<string[]>(new Array());

  useEffect(() => {
    const g = localStorage.getItem("groceries");
    if (g) {
      const items = JSON.parse(g);
      if (items) {
        setWatchlist(items);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(watchlist));
  }, [watchlist]);

  const handleAddItem = (): void => {
    const newItem = (
      document.getElementById("newItemInput") as HTMLInputElement
    ).value;
    if (newItem) {
      setWatchlist((prevItems: any) => [...prevItems, newItem]);
      (document.getElementById("newItemInput") as HTMLInputElement).value = "";
    }
  };

  const handleAddRecipe = (arr: any): void => {
    setWatchlist((prevItems: any) => [...prevItems, ...arr]);
  };

  return (
    <Layout title="WatchList">
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        px={{ base: 6, sm: 10 }}
      >
        <Text mx={10} my={10} fontSize="50">
          WatchList
        </Text>
        <Flex flexDir="column" minW={{ base: "xs", md: "lg" }} gap={5}>
          <Input id="newItemInput" placeholder="Type item here" />
          <Flex flexDir="row" align="center" justify="center" gap={10}>
            <Button onClick={handleAddItem}>Add Stock</Button>
          </Flex>
          <CheckboxGroup>
            {watchlist.length > 0 ? (
              watchlist.map((watchlist, index) => (
                <Checkbox key={index}>{watchlist}</Checkbox>
              ))
            ) : (
              <Text textAlign="center">Add a stock to get started!</Text>
            )}
          </CheckboxGroup>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Ticker</Th>
                  <Th>Price</Th>
                  <Th isNumeric>Price Change</Th>
                  <Th isNumeric>% Change</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default WatchList;
