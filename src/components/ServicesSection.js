import { Box, Flex, Heading, Text, Circle, Stack } from "@chakra-ui/react";
import React from "react";
import {
	CalendarIcon,
	CreditCardIcon,
	BellIcon,
	ClipboardIcon,
	MailIcon,
} from "../assets/icons/Icons";

const ServicesSection = () => {
	return (
		<Box marginBlock="100px" pos="relative">
			<Box
				pos="absolute"
				left="13.18%"
				top="18.18%"
				bottom="-7.18%"
				filter="auto"
				blur="200px"
				opacity="0.4"
			>
				<Box
					width="400px"
					height="400px"
					pos="absolute"
					left="-7.18%"
					right="-7.18%"
					top="-7.18%"
					bottom="-7.18%"
					bgGradient="radial(77.11% 77.11% at 64.45% 37.03%, #FFFFFB 0%, rgba(255, 254, 244, 0.94238) 1.95%, rgba(255, 251, 219, 0.74684) 9.24%, rgba(255, 249, 196, 0.56902) 17.08%, rgba(255, 246, 176, 0.41564) 25.29%, rgba(255, 244, 160, 0.28668) 33.96%, rgba(255, 243, 146, 0.18178) 43.24%, rgba(255, 242, 136, 0.10085) 53.33%, rgba(255, 241, 129, 0.04367) 64.65%, rgba(255, 240, 124, 0.01017) 78.22%, rgba(255, 240, 123, 0) 100%)"
					transform="rotate(-81.02deg)"
					bgBlendMode="overlay"
					overflow="hidden"
				></Box>
				<Box
					width="400px"
					height="400px"
					pos="absolute"
					left="-7.18%"
					right="-7.18%"
					top="-7.18%"
					bottom="-7.18%"
					bgGradient="radial(69.33% 69.33% at 64% 34.6%, #FFDA69 0%, #FFCE72 17.82%, #FFC876 34.93%, #FFC775 35.67%, #FB9942 66%, #FA872F 80.94%, #FFA15F 100%)"
					transform="rotate(-81.02deg)"
					bgBlendMode="overlay"
					overflow="hidden"
				></Box>
			</Box>
			<Text
				color="white"
				textAlign="center"
				mb="90px"
				fontSize={["30px", "35px"]}
				fontWeight="500"
			>
				SERVICES WE OFFER
			</Text>
			<Flex wrap="wrap" gap="30px" justifyContent="space-evenly">
				<Flex
					direction="column"
					bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
					border="2px"
					borderColor="#ffd282"
					borderRadius="40px"
					paddingInline="50px"
					paddingBlock="20px"
					width="370px"
					height="300px"
					gap="10px"
				>
					<Circle
						size="55px"
						bg="#FFD282;
"
						alignSelf="center"
						color="black"
					>
						<CalendarIcon fontSize="40px" fill="transparent" />
					</Circle>

					<Heading color="white" fontSize="33px">
						Scheduling
					</Heading>
					<Text pb="60px" color="white" fontSize="18px">
						Let your clients choose the most efficient time to meet with you and
						fix their car issues.
					</Text>
				</Flex>
				<Flex
					direction="column"
					bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
					border="2px"
					borderColor="#ffd282"
					borderRadius="40px"
					paddingInline="50px"
					paddingBlock="20px"
					width="370px"
					height="300px"
					gap="10px"
				>
					<Circle
						size="55px"
						bg="#FFD282;
"
						alignSelf="center"
						color="black"
					>
						<CreditCardIcon fontSize="40px" fill="transparent" />{" "}
					</Circle>

					<Heading color="white" fontSize="33px">
						Payment gateway
					</Heading>
					<Text pb="60px" color="white" fontSize="18px">
						An efficient payment system worthy of your services.
					</Text>
				</Flex>
				<Flex
					direction="column"
					bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
					border="2px"
					borderColor="#ffd282"
					borderRadius="40px"
					paddingInline="50px"
					paddingBlock="20px"
					width="370px"
					height="300px"
					gap="10px"
				>
					<Circle
						size="55px"
						bg="#FFD282;
"
						alignSelf="center"
						color="black"
					>
						<ClipboardIcon fontSize="40px" fill="transparent" />{" "}
					</Circle>

					<Heading color="white" fontSize="33px">
						Generalize invoice
					</Heading>
					<Text pb="60px" color="white" fontSize="18px">
						Get your receipts and invoices for payment proof.
					</Text>
				</Flex>

				<Stack spacing="50px" mt="20px" direction={["column", "row"]}>
					<Flex
						direction="column"
						bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
						border="2px"
						borderColor="#ffd282"
						borderRadius="40px"
						paddingInline="50px"
						paddingBlock="20px"
						width="370px"
						height="300px"
						gap="10px"
					>
						<Circle
							size="55px"
							bg="#FFD282;
"
							alignSelf="center"
							color="black"
						>
							<BellIcon fontSize="40px" fill="transparent" />
						</Circle>

						<Heading color="white" fontSize="33px">
							Send Reminders
						</Heading>
						<Text pb="60px" color="white" fontSize="18px">
							Let’s remind you and your clients about the upcoming meetings
							before time.
						</Text>
					</Flex>
					<Flex
						direction="column"
						bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
						border="2px"
						borderColor="#ffd282"
						borderRadius="40px"
						paddingInline="50px"
						paddingBlock="20px"
						width="370px"
						height="300px"
						gap="10px"
					>
						<Circle
							size="55px"
							bg="#FFD282;
"
							alignSelf="center"
							color="black"
						>
							<MailIcon fontSize="40px" fill="transparent" />
						</Circle>

						<Heading color="white" fontSize="33px">
							Send SMS
						</Heading>
						<Text pb="60px" color="white" fontSize="18px">
							Stay on the loop with all your business activities with our SMS
							notifications.
						</Text>
					</Flex>
				</Stack>
			</Flex>
		</Box>
	);
};

export default ServicesSection;
