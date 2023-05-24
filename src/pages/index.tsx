import type { NextPage } from "next";
import {
	Text,
	Flex,
	Heading,
	Box,
	Container,
	Button,
	Stack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalHeader,
	ModalFooter,
	useDisclosure,
	Image
} from "@chakra-ui/react";
import Layout from "@/components/layout";

const Home: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size="xl">
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>
						<Heading textDecor="underline">About Us</Heading>
					</ModalHeader>
					<ModalBody>
						<Text fontSize="lg">
							NutriFit is a comprehensive health and wellness app designed to help
							users achieve their fitness and nutrition goals. The app offers a range
							of features and tools to help users track their meals, monitor their
							daily calorie intake, and maintain a healthy lifestyle.
							<br />
							<br />
							With NutriFit, users can create personalized meal plans based on their
							individual dietary needs and preferences. The app includes a vast
							database of recipes that users can choose from and customize to fit
							their unique taste and nutrition requirements. Users can also track
							their macronutrient and micronutrient intake, monitor their water
							intake, and log their daily physical activity.
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							bg="red.300"
							textColor="white"
							mr={4}
							mb={4}
							_hover={{ bg: "red.400" }}
							onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Layout title="Home">
				<Flex flexDir="column" align="center" justify="center" px={{ base: 2, md: 16 }}>
					<Container maxW={"3xl"}>
						<Stack
							as={Box}
							align="center"
							justify="center"
							textAlign="center"
							spacing={{ base: 7, md: 10 }}
							py={{ base: 8, md: 28 }}>
							<Heading
								fontWeight="bold"
								fontSize={{ base: "5xl", md: "6xl" }}
								lineHeight={"110%"}>
								Organize Your Life With
								<br />
								<Text as={"span"} color={"red.300"}>
									NutriFit
								</Text>
							</Heading>
							<Text color={"black.500"} fontSize="2xl">
								Revitalize your health with NutriFit - the ultimate organization
								tool for a happier, healthier you!
							</Text>
							<Stack
								direction={"column"}
								spacing={2}
								align={"center"}
								alignSelf={"center"}
								position={"relative"}>
								<Button
									onClick={onOpen}
									fontSize="lg"
									colorScheme={"red"}
									bg={"red.400"}
									rounded={"full"}
									px={8}
									py={6}
									_hover={{
										bg: "red.300"
									}}>
									Learn More
								</Button>
							</Stack>
						</Stack>
					</Container>
				</Flex>
			</Layout>
		</>
	);
};

export default Home;
