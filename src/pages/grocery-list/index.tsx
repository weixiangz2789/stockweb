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
	Divider
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
		const newItem = (document.getElementById("newItemInput") as HTMLInputElement).value;
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
			<Flex flexDir="column" align="center" justify="center" px={{ base: 6, sm: 10 }}>
				<Text mx={10} my={10} fontSize="50">
					Grocery List
				</Text>
				<Flex flexDir="column" minW={{ base: "xs", md: "lg" }} gap={5}>
					<Input id="newItemInput" placeholder="Type item here" />
					<Flex flexDir="row" align="center" justify="center" gap={10}>
						<Button onClick={handleAddItem}>Add Item</Button>
						<Button onClick={handleClearList}>Clear List</Button>
					</Flex>
					<CheckboxGroup>
						{groceries.length > 0 ? (
							groceries.map((grocery, index) => (
								<Checkbox key={index}>{grocery}</Checkbox>
							))
						) : (
							<Text textAlign="center">No groceries in list. Add something!</Text>
						)}
					</CheckboxGroup>
				</Flex>
				<hr />
				<hr />
				<Flex p={10} flexDir="column">
					<Heading>
						Add{" "}
						<Text as={Link} color="blue.400" href="/recipes">
							Recipes
						</Text>
					</Heading>
					<br></br>
					<Stack>
						<Button
							onClick={() =>
								handleAddRecipe([
									"2 tablespoons extra virgin olive oil or ghee",
									"½ cup onions diced",
									"A pinch crushed red pepper to taste",
									"2 cloves garlic minced",
									"2 cups sweet potatoes diced",
									"2 cups shrimp peeled, deveined, and thawed if frozen",
									"3 cups trimmed and coarsely chopped kale leaves",
									"Salt and ground black pepper"
								])
							}>
							Add Sweet Potato, Kale, and Shrimp Skillet Ingredients
						</Button>
						<Button
							onClick={() =>
								handleAddRecipe([
									"2 pounds broccoli, cut into bite-size florets",
									"4 tablespoons (¼ cup) extra virgin olive oil",
									"1 teaspoon whole coriander seeds",
									"1 teaspoon whole coriander seeds",
									"1 teaspoon whole cumin seeds",
									"1½ teaspoons kosher salt",
									"1 teaspoon freshly ground black pepper",
									"⅛ teaspoon hot chili powder",
									"1 pound large shrimp, shelled and deveined",
									"1¼ teaspoons lemon zest (from 1 large lemon)"
								])
							}>
							Add Roasted Broccoli with Shrimp Ingredients
						</Button>
						<Button
							onClick={() =>
								handleAddRecipe([
									"6 cups baby spinach (loosely packed)",
									"15 ounces black beans (can, rinsed and drained)",
									"4 egg whites",
									"2 eggs",
									"1/4 cup feta cheese (optional, shredded cheddar or Mexican cheese)"
								])
							}>
							Add Make-Ahead Breakfast Burritos Ingredients
						</Button>
						<Button
							onClick={() =>
								handleAddRecipe([
									"2 lbs boneless skinless chicken tenderloins",
									"2 cloves garlic minced",
									"2 tablespoons olive oil",
									"2 tablespoons adobo sauce from a small can of chipotle peppers",
									"½ teaspoon oregano or Italian seasoning",
									"1 teaspoon salt",
									"½ teaspoon black pepper"
								])
							}>
							Add Copycat Qdoba Chicken Ingredients
						</Button>
						<Button
							onClick={() =>
								handleAddRecipe([
									"3 cups Zucchini sliced into circles",
									"¼ tsp Salts",
									"¼ tsp Black Pepper",
									"16 oz 90% Ground Beef",
									"2 tbsp Shallots diced, (about 1 shallot) or (40 grams)",
									"2 cloves Fresh Garlic diced, (10 grams)",
									"¼ tsp Italian Seasoning",
									"1½ cups No Salt Added Diced Tomatoes (about 1 16 oz can)",
									"¾ cup Ricotta Cheese (180 grams)",
									"½ cup Cheddar Cheese freshly shredded, (30 grams)",
									"1 cup Chickpea Rice (100 grams)",
									"1 tsp Red Pepper Flake",
									"1 tbsp Scallions sliced, optional. (about stalk) or (10 grams)"
								])
							}>
							Add Zucchini & Ground Beef Orzo Casserole Ingredients
						</Button>
						<Button
							onClick={() =>
								handleAddRecipe([
									"1/4 cup milk",
									"1/4 cup Panko breadcrumbs",
									"1 1/2 lbs ground chicken",
									"2 cloves garlic, minced",
									"2 teaspoons minced fresh ginger",
									"2 Tablespoons minced scallions",
									"2 Tablespoons low sodium soy sauce",
									"1/4 teaspoon salt",
									"1/4 teaspoon black pepper",
									"1 1/2 teaspoons sesame oil",
									"1 1/2 teaspoons olive oil",
									"2 cloves garlic, minced",
									"1 teaspoon minced fresh ginger",
									"1 1/2 teaspoons crushed red pepper flakes",
									"3/4 cup orange marmalade",
									"1/4 cup hoisin sauce"
								])
							}>
							Add Baked Orange Chicken Meatballs Ingredients
						</Button>
					</Stack>
				</Flex>
			</Flex>
		</Layout>
	);
};

export default GroceryList;
