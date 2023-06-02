import type { NextPage } from "next";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Button,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface WatchlistItem {
  ticker: string;
  price: number;
  priceChange: number;
  percentChange: number;
}

const WatchList: NextPage = () => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);

  useEffect(() => {
    const g = localStorage.getItem("watchlist");
    if (g) {
      const items = JSON.parse(g);
      if (items) {
        setWatchlist(items);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const handleAddItem = (): void => {
    const newItem = (
      document.getElementById("newItemInput") as HTMLInputElement
    ).value;
    if (newItem) {
      setWatchlist((prevItems: WatchlistItem[]) => [
        ...prevItems,
        {
          ticker: newItem,
          price: 0,
          priceChange: 0,
          percentChange: 0,
        },
      ]);
      (document.getElementById("newItemInput") as HTMLInputElement).value = "";
    }
  };

  const handleDeleteItem = (index: number): void => {
    setWatchlist((prevItems: WatchlistItem[]) =>
      prevItems.filter((_, i) => i !== index)
    );
  };

  const handleReset = (): void => {
    setWatchlist([]);
    localStorage.removeItem("watchlist");
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
            <Button onClick={handleReset} colorScheme="red">
              Reset Table
            </Button>
          </Flex>
          <TableContainer>
            <Table variant="simple" size={"500"}>
              <Thead>
                <Tr>
                  <Th>Ticker</Th>
                  <Th>Price</Th>
                  <Th isNumeric>Price Change</Th>
                  <Th isNumeric>% Change</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {watchlist.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.ticker}</Td>
                    <Td>{item.price}</Td>
                    <Td isNumeric>{item.priceChange}</Td>
                    <Td isNumeric>{item.percentChange}</Td>
                    <Td>
                      <Button onClick={() => handleDeleteItem(index)} m={3}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default WatchList;
