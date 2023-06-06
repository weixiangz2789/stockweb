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
import axios from "axios";
import Link from "next/link";

interface WatchlistItem {
  ticker: string;
  price: number;
  priceChange: number;
  percentChange: number;
}

const fetchStockData = async (ticker: string) => {
  const apiKey = "4414df37b1msh22e1acb4e134b46p1e28c5jsn3314dce3405a";
  const url = `https://apidojo-yahoo-finance1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${ticker}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    });
    const data = response.data.quoteResponse.result[0];

    if (data) {
      const price = data.regularMarketPrice;
      const priceChange = data.regularMarketChange;
      const percentChange = data.regularMarketChangePercent;

      return { price, priceChange, percentChange };
    }
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }

  return null;
};

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

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const updatedWatchlist = await Promise.all(
        watchlist.map(async (item) => {
          const stockData = await fetchStockData(item.ticker);

          if (stockData) {
            return {
              ticker: item.ticker,
              price: stockData.price,
              priceChange: stockData.priceChange,
              percentChange: stockData.percentChange,
            };
          }

          return item;
        })
      );

      setWatchlist(updatedWatchlist);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [watchlist]);

  const handleAddItem = async (): Promise<void> => {
    const newItem = (
      document.getElementById("newItemInput") as HTMLInputElement
    ).value;
    if (newItem) {
      const stockData = await fetchStockData(newItem);

      if (stockData) {
        setWatchlist((prevItems: WatchlistItem[]) => [
          ...prevItems,
          {
            ticker: newItem,
            price: stockData.price,
            priceChange: stockData.priceChange,
            percentChange: stockData.percentChange,
          },
        ]);
      }

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
          <Input id="newItemInput" placeholder="Type ticker here" />
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
                    <Td minW="100px">
                      <Link href={`/stock/${item.ticker}`}>{item.ticker}</Link>
                    </Td>
                    <Td w="120px">${item.price.toFixed(2)}</Td>
                    <Td w="120px" isNumeric>
                      ${item.priceChange.toFixed(2)}
                    </Td>
                    <Td w="120px" isNumeric>
                      {item.percentChange.toFixed(2)}%
                    </Td>
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
