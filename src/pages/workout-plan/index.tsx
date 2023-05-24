import type { NextPage } from "next";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Text,
	Flex,
	Button,
	useDisclosure,
	Stack,
	Card,
	CardBody,
	Heading,
	Checkbox,
	CheckboxGroup
} from "@chakra-ui/react";

import Layout from "@/components/layout";
import { useEffect, useState } from "react";

const WorkoutPlan: NextPage = () => {
	const [exercises, setExercise] = useState<string[]>(new Array());
	//add to screen
	useEffect(() => {
		const g = localStorage.getItem("exercises");
		if (g) {
			const items = JSON.parse(g);
			if (items) {
				setExercise(items);
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("exercises", JSON.stringify(exercises));
	}, [exercises]);

	const handleAddItem = (item: any): void => {
		setExercise((prevItems: any) => [...prevItems, item]);
	};

	const handleClearList = () => {
		setExercise([]);
	};

	const { isOpen: item1isOpen, onOpen: item1onOpen, onClose: item1onClose } = useDisclosure();
	const { isOpen: item2isOpen, onOpen: item2onOpen, onClose: item2onClose } = useDisclosure();
	const { isOpen: item3isOpen, onOpen: item3onOpen, onClose: item3onClose } = useDisclosure();

	return (
		<Layout title="Workout Plan">
			<Text my={8} fontSize="5xl" textAlign="center">
				<strong>Workout Splits</strong>
			</Text>
			<Flex
				direction={{ base: "column", md: "row" }}
				align="center"
				justify="center"
				gap={10}
				m="6">
				{/*Push*/}
				<Card maxW="sm" height={500}>
					<CardBody textAlign="center">
						<Stack my="6" spacing="2" justifyContent="center">
							<Heading textAlign="center" size="md">
								Push
							</Heading>
							<Text textAlign="center">
								Push exercises are a type of strength training that involves pushing
								against resistance in a horizontal or vertical direction using the
								upper body muscles. These exercises primarily work the chest,
								shoulders, and triceps, but also engage other muscle groups like the
								back, core, and legs as stabilizers.
							</Text>
						</Stack>
						<Button
							style={{ margin: "0 auto" }}
							variant="solid"
							colorScheme="red"
							onClick={item1onOpen}>
							View Workout
						</Button>
					</CardBody>
					<Modal isOpen={item1isOpen} onClose={item1onClose} size="xl">
						<ModalOverlay />

						<ModalContent>
							<ModalHeader>
								<Heading>Exercises</Heading>
							</ModalHeader>
							<ModalBody>
								<Text py="5">
									<Flex>
										<Button
											variant="solid"
											onClick={() =>
												handleAddItem("Barbell/Dumbell Bench Press")
											}
											width={0}
											height={7}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Barbell/Dumbbell Bench Press</Text>
									</Flex>
									<br></br>
									<Flex>
										<Button
											variant="solid"
											onClick={() =>
												handleAddItem(
													"Incline Barbell/Dumbbell Bench Press"
												)
											}
											width={0}
											height={7}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Incline Barbell/Dumbbell Bench Press</Text>
									</Flex>

									<br></br>
									<Flex>
										<Button
											variant="solid"
											onClick={() =>
												handleAddItem("Tricep Extensions/Pushdowns")
											}
											width={0}
											height={7}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Tricep Extensions/Pushdowns</Text>
									</Flex>
									<br></br>

									<Flex>
										<Button
											variant="solid"
											onClick={() => handleAddItem("Dips")}
											width={0}
											height={7}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Dips</Text>
									</Flex>

									<br></br>
									<Flex>
										<Button
											variant="solid"
											onClick={() => handleAddItem("Push Up")} //make each one like this one
											width={0}
											height={7}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Push Up</Text>
									</Flex>
								</Text>
							</ModalBody>
							<ModalFooter>
								<Button
									bg="red.400"
									textColor="white"
									mr={4}
									mb={4}
									_hover={{ bg: "red.500" }}
									onClick={item1onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Card>

				{/*Pull*/}
				<Card maxW="sm" height={500}>
					<CardBody textAlign="center">
						<Stack my="6" spacing="2">
							<Heading size="md" textAlign="center">
								Pull
							</Heading>
							<Text textAlign="center">
								Pull exercises are a type of strength training that involve pulling
								resistance towards the body, typically using the muscles of the
								back, biceps, and forearms. These exercises target the muscles used
								for pulling or rowing movements, such as the latissimus dorsi,
								rhomboids, and posterior deltoids. Common examples of pull exercises
								include pull-ups, rows, and curls.
							</Text>
						</Stack>
						<Button variant="solid" colorScheme="red" onClick={item2onOpen}>
							View Workout
						</Button>
					</CardBody>
					<Modal isOpen={item2isOpen} onClose={item2onClose} size="xl">
						<ModalOverlay />

						<ModalContent>
							<ModalHeader>
								<Heading>Exercises</Heading>
							</ModalHeader>
							<ModalBody>
								<Text py="5">
									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Deadlift")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Deadlift</Text>
									</Flex>

									<br></br>
									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Pull/Chin Ups")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Pull/Chin Ups</Text>
									</Flex>

									<br></br>
									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Lat-Pull Down")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Lat-Pull Down</Text>
									</Flex>
									<br></br>

									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Rows")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Rows</Text>
									</Flex>

									<br></br>
									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Bicep Curl")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Bicep Curl</Text>
									</Flex>
								</Text>
							</ModalBody>
							<ModalFooter>
								<Button
									bg="red.400"
									textColor="white"
									mr={4}
									mb={4}
									_hover={{ bg: "red.500" }}
									onClick={item2onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Card>

				{/*Legs*/}
				<Card maxW="sm" height={500}>
					<CardBody textAlign="center">
						<Stack my="6" spacing="2">
							<Heading textAlign="center" size="md">
								Legs
							</Heading>
							<Text textAlign="center">
								Leg exercises are a type of strength training that focus on the
								muscles of the lower body, including the quadriceps, hamstrings,
								glutes, and calves. These exercises can be classified into two main
								categories: compound exercises, which involve multiple joints and
								muscle groups, and isolation exercises, which target specific
								muscles. Some common leg exercises include squats, lunges,
								deadlifts, leg press, and calf raises.
							</Text>
						</Stack>
						<Button variant="solid" colorScheme="red" onClick={item3onOpen}>
							View Workout
						</Button>
					</CardBody>
					<Modal isOpen={item3isOpen} onClose={item3onClose} size="xl">
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>
								<Heading>Exercises</Heading>
							</ModalHeader>
							<ModalBody>
								<Text py="5">
									<Flex>
										<Button
											variant="solid"
											height={7}
											onClick={() => handleAddItem("Barbell/Hack Squat")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Barbell/Hack Squat</Text>
									</Flex>
									<br></br>
									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Leg Press")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Leg Press</Text>
									</Flex>
									<br></br>
									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Leg Curl")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Leg Curl</Text>
									</Flex>
									<br></br>

									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Leg Extension")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Leg Extension</Text>
									</Flex>

									<br></br>
									<Flex>
										<Button
											variant="solid"
											width={0}
											height={7}
											onClick={() => handleAddItem("Calf Raises")}>
											<strong>
												<Text mt="-1">+</Text>
											</strong>
										</Button>
										<Text px="3">Calf Raises</Text>
									</Flex>
								</Text>
							</ModalBody>
							<ModalFooter>
								<Button
									bg="red.400"
									textColor="white"
									mr={4}
									mb={4}
									_hover={{ bg: "red.500" }}
									onClick={item3onClose}>
									Close
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Card>
			</Flex>
			<hr></hr>
			<Flex
				direction="column"
				align="center"
				justify="center"
				gap={3}
				py={10}
				px={{ base: 6, md: 0 }}>
				<Heading>Workout List</Heading>
				<Button onClick={handleClearList}>Clear List</Button>
				<CheckboxGroup>
					{exercises.length > 0 ? (
						exercises.map((exercise, index) => (
							<Checkbox key={index}>{exercise}</Checkbox>
						))
					) : (
						<Text>No workouts in list. Click on a card to add a new workout!</Text>
					)}
				</CheckboxGroup>
			</Flex>
		</Layout>
	);
};

export default WorkoutPlan;
