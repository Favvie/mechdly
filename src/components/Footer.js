import React from "react";
import {
	Box,
	Button,
	Heading,
	HStack,
	Icon,
	Image,
	Text,
	VStack,
	FormControl,
	Input,
	Flex,
	Spacer,
	Stack,
} from "@chakra-ui/react";
import Logo from "../assets/images/Mechdly-logo.svg";

import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { CgInstagram } from "react-icons/cg";

const Footer = () => {
	return (
		<Box color="white" mt="85px">
			<Flex
				justifyContent="space-between"
				mb="42px"
				direction={["column", "row"]}
			>
				<Box width="180px">
					<Image src={Logo} alt="mechdly logo" cursor="pointer" />
				</Box>
				<Stack spacing={["10px", "40px"]} direction={["column", "row"]}>
					<Text fontSize={["33px"]} fontWeight="700" mt={["40px", "0px"]}>
						Ready for your setup?
					</Text>
					<Button
						borderRadius="37px"
						borderColor="#F68537"
						bg="#F68537"
						color="black"
						paddingInline="45px"
						paddingBlock="28px"
						alignSelf="flex-start"
						_hover={{
							background: " #FFD282",
						}}
					>
						Get started
					</Button>
				</Stack>
			</Flex>
			<Box borderTop="1px" borderColor="#FFD282" mb="60px"></Box>

			{/* second layer footer */}
			<Flex justifyContent="space-between" direction={["column", "row"]}>
				<Box flex="2">
					<Heading fontSize={["40px", "50px"]} width={["100%", "70%"]}>
						Subscribe to our newsletter!
					</Heading>
					<HStack
						border="2px"
						borderColor="#FFD282"
						borderRadius="40px"
						bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)"
						pl="20px"
						mt="35px"
					>
						<FormControl>
							<Input
								type="email"
								border="none"
								placeholder="Email address"
								_placeholder={{ color: "white", fontSize: ["15px", "20px"] }}
							/>
						</FormControl>
						<Button
							borderRadius="37px"
							borderColor="#F68537"
							bg="#F68537"
							color="black"
							paddingInline="50px"
							paddingBlock="28px"
							alignSelf="flex-start"
							_hover={{
								background: " #FFD282",
							}}
						>
							Sign up
						</Button>
					</HStack>
				</Box>
				<Spacer />
				<Flex
					gap={["50px", "100px"]}
					direction={["column", "row"]}
					pt={["70px", "0px"]}
				>
					<VStack align="left">
						<Heading fontSize="20px">Company</Heading>
						<Text textAlign="left">About Us</Text>
						<Text textAlign="left">Partners & Affiliates</Text>
					</VStack>

					<VStack align="left">
						<Heading fontSize="20px">Products</Heading>
						<Text>How it Works</Text>
						<Text>Features</Text>
						<Text>Pricing</Text>
					</VStack>

					<VStack align="left">
						<Heading fontSize="20px">Support</Heading>
						<Text>Contact us</Text>
						<Text>FAQs</Text>
						<Text>Privacy</Text>
						<Text>Terms</Text>
					</VStack>
				</Flex>
			</Flex>

			{/* third layer footer */}
			<Flex
				justifyContent="space-between"
				paddingBlock="40px"
				pt="100px"
				direction={["column", "row"]}
				gap={["20px", "0px"]}
			>
				<HStack spacing="20px">
					<Icon as={FiTwitter} cursor="pointer" />
					<Icon as={FiFacebook} cursor="pointer" />
					<Icon as={CgInstagram} cursor="pointer" />
					<Icon as={FiLinkedin} cursor="pointer" />
				</HStack>

				<Text>
					{" "}
					&copy; 2022. FixBot Technologies Limited. All Rights Reserved.
				</Text>
			</Flex>
		</Box>
	);
};

export default Footer;
