import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import Calendar2 from "../assets/images/calendar2.svg";
import Chat from "../assets/images/chat.svg";
import SemiCircle from "../assets/images/semi-circle.svg";

const FeaturesSection = () => {
	return (
		<Box pos="relative">
			<Box
				pos="absolute"
				left="-15.18%"
				top="19.18%"
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
			<Flex
				justifyContent="space-between"
				paddingBlock={["100px", "170px"]}
				direction={["column-reverse", "row"]}
				gap={["50px", "0px"]}
			>
				<Box flex="1.1" ml={["0px", "40px"]} width="100%">
					<Image src={Calendar2} />
				</Box>

				<Flex flex="1" alignSelf="flex-end" flexDirection="column" mt={-5}>
					<Text
						color="#ffffff"
						fontSize={["40px", "55px"]}
						textAlign="right"
						lineHeight={["60px", "86px"]}
					>
						Let your customers know what time is available in a day!
					</Text>
					<Button
						mt="40px"
						borderRadius="37px"
						borderColor="#F68537"
						bg="#F68537"
						color="black"
						alignSelf="flex-end"
						paddingInline="50px"
						paddingBlock="28px"
						_hover={{
							background: " #FFD282",
						}}
					>
						Setup now
					</Button>
					{/* <ButtonComponent text="Setup now" alignSelf="flex-end" /> */}
				</Flex>
			</Flex>
			<Flex
				justifyContent="space-between"
				paddingBlock="20px"
				direction={["column", "row"]}
				gap={["40px", "0px"]}
			>
				<Flex flex="1" flexDirection="column">
					<Text
						color="#ffffff"
						fontSize={["40px", "55px"]}
						textAlign="left"
						lineHeight="70px"
						mt={["0px", "50px"]}
						width={["100%", "80%"]}
					>
						Send reminders, SMS and invoices to customers.{" "}
					</Text>
					<Button
						mt="40px"
						borderRadius="37px"
						borderColor="#F68537"
						bg="#F68537"
						color="black"
						alignSelf="flex-start"
						paddingInline="50px"
						paddingBlock="28px"
						_hover={{
							background: " #FFD282",
						}}
					>
						Setup now
					</Button>
				</Flex>
				<Box flex="1" marginInline={["0px", "50px"]} pos="relative">
					<Image src={Chat} />
					<Box
						pos="absolute"
						left={["-10px", "-50px"]}
						bottom="-20px"
						width={["70px", "full"]}
					>
						<Image src={SemiCircle} />
					</Box>
				</Box>
			</Flex>
			<Box
				pos="absolute"
				left="80.18%"
				bottom="35.18%"
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
		</Box>
	);
};

export default FeaturesSection;
