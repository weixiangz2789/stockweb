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
} from "@chakra-ui/react";
import Link from "next/link";

const GroceryList: NextPage = () => {
  const [groceries, setGroceries] = useState<string[]>(new Array());

  useEffect(() => {
    const g = localStorage.getItem("groceries");
    if (g) {
      const items = JSON.parse(g);
      if (items) {
        setGroceries(items);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(groceries));
  }, [groceries]);

  const handleAddItem = (): void => {
    const newItem = (
      document.getElementById("newItemInput") as HTMLInputElement
    ).value;
    if (newItem) {
      setGroceries((prevItems: any) => [...prevItems, newItem]);
      (document.getElementById("newItemInput") as HTMLInputElement).value = "";
    }
  };

  const handleAddRecipe = (arr: any): void => {
    setGroceries((prevItems: any) => [...prevItems, ...arr]);
  };

  const handleClearList = () => {
    setGroceries([]);
  };

  return (
    <Layout title="Grocery List">
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        px={{ base: 6, sm: 10 }}
      ></Flex>
    </Layout>
  );
};

export default GroceryList;
