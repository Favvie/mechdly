import React from "react";
import Calendar from "../assets/images/calendarx.svg";
import Ball from "../assets/images/circle.svg";
import ButtonComponent from "./ButtonComponent";
import {
	Box,
	Flex,
	Heading,
	Text,
	VStack,
	Image,
	Button,
} from "@chakra-ui/react";

const HeroSection = () => {
	return (
		<Flex
			gap="30px"
			direction={["column", "row"]}
			mt={["50px", "135px"]}
			pos="relative"
		>
			<Box
				pos="absolute"
				left="80.18%"
				top="-7.18%"
				bottom="-7.18%"
				filter="auto"
				blur="200px"
				opacity="0.4"
			>
				<Box
					width="815.83px"
					height="815.83px"
					pos="absolute"
					left="-7.18%"
					right="-7.18%"
					top="-7.18%"
					bottom="-7.18%"
					bgGradient="radial(77.11% 77.11% at 64.45% 37.03%, #FFFFFB 0%, rgba(255, 254, 244, 0.94238) 1.95%, rgba(255, 251, 219, 0.74684) 9.24%, rgba(255, 249, 196, 0.56902) 17.08%, rgba(255, 246, 176, 0.41564) 25.29%, rgba(255, 244, 160, 0.28668) 33.96%, rgba(255, 243, 146, 0.18178) 43.24%, rgba(255, 242, 136, 0.10085) 53.33%, rgba(255, 241, 129, 0.04367) 64.65%, rgba(255, 240, 124, 0.01017) 78.22%, rgba(255, 240, 123, 0) 100%)"
					transform="rotate(-81.02deg)"
					bgBlendMode="overlay"
				></Box>
				<Box
					width="815.83px"
					height="815.83px"
					pos="absolute"
					left="-7.18%"
					right="-7.18%"
					top="-7.18%"
					bottom="-7.18%"
					bgGradient="radial(69.33% 69.33% at 64% 34.6%, #FFDA69 0%, #FFCE72 17.82%, #FFC876 34.93%, #FFC775 35.67%, #FB9942 66%, #FA872F 80.94%, #FFA15F 100%)"
					transform="rotate(-81.02deg)"
					bgBlendMode="overlay"
				></Box>
			</Box>
			<VStack flex="1" spacing="40px">
				<Heading
					color="white"
					fontWeight="normal"
					fontSize={["40px", "55px"]}
					mt="10px"
				>
					Schedule, <br />
					Make Payments, & Send invoice to your customers.
				</Heading>
				<Text
					color="white"
					fontSize={["15px", "25px"]}
					fontWeight="normal"
					lineHeight="40px"
					width={["100%", "37vw"]}
				>
					Efficiently and professionally run your business and with your clients
					eliminating the complaints of your customers so you can go back to
					work.
				</Text>
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
					Get Started now
				</Button>{" "}
				{/* <ButtonComponent text="Get Started now" /> */}
			</VStack>

			<Box width={["90%", "50vw"]} position="relative" zIndex={100}>
				<Image src={Calendar} />
				<Box
					position="absolute"
					bottom="-20px"
					right={["-30px", "-70px"]}
					width={["60px", "120px"]}
					zIndex={-10}
					filter="auto"
				>
					<Image src={Ball} />
				</Box>
			</Box>
		</Flex>
	);
};

export default HeroSection;
