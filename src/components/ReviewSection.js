import React from "react";
import { Box, Flex, Heading, Text, Circle, Image } from "@chakra-ui/react";
import Meme from "../assets/images/memehead.png";

const ReviewSection = () => {
	return (
		<Box paddingBlock="50px" pos="relative">
			<Box
				pos="absolute"
				left="-30.18%"
				top="-7.18%"
				bottom="-7.18%"
				filter="auto"
				blur="200px"
				opacity="0.4"
			>
				<Box
					width="500px"
					height="500px"
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
					width="500px"
					height="500px"
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
			<Text
				color="white"
				textAlign="center"
				fontSize={["33px", "38px"]}
				letterSpacing={["1px", "2px"]}
				width={["100%", "55%"]}
				m="auto"
				lineHeight="50px"
			>
				WHAT OTHER MECHANICS SAY ABOUT THE EXPERIENCE
			</Text>
			<Flex wrap="wrap" gap="20px" justifyContent="space-evenly" pt="70px">
				<Flex
					direction="column"
					bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
					border="2px"
					borderColor="#ffd282"
					borderRadius="40px"
					paddingInline="50px"
					paddingBlock="20px"
					width="400px"
					height={["350px", "330px"]}
					gap={["20px", "10px"]}
				>
					<Circle
						size="60px"
						bg="#FFD282;
"
						alignSelf="flex-end"
						color="black"
					>
						<Image src={Meme} />
					</Circle>

					<Heading color="white" fontSize="30px" marginBlock="10px">
						Emeka and Sons
					</Heading>
					<Text color="white" fontSize="18px" fontWeight="thin">
						A great platform for my business. Was not getting enought time for
						my customers until I was introduced to mechdly.
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
					height="330px"
					gap="10px"
				>
					<Circle
						size="60px"
						bg="#FFD282;
"
						alignSelf="flex-end"
						color="black"
					>
						{/* <Icon as={TbCalendarTime} /> */}
						<Image src={Meme} />
					</Circle>

					<Heading color="white" fontSize="30px" marginBlock="10px">
						Sam Automobile
					</Heading>
					<Text color="white" fontSize="18px" fontWeight="thin">
						Everything is organized now, clients are happy and I am happy.
						Superb platform!
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
					height="330px"
					gap="10px"
				>
					<Circle
						size="60px"
						bg="#FFD282;
"
						alignSelf="flex-end"
						color="black"
					>
						{/* <Icon as={TbCalendarTime} /> */}
						<Image src={Meme} />
					</Circle>

					<Heading color="white" fontSize="30px" marginBlock="10px">
						Chima's Fixes
					</Heading>
					<Text color="white" fontSize="18px" fontWeight="thin">
						Happy I took the advice, this is the level of professionality my
						clients want to see. Goes hand in hand with my skills. Love it!
					</Text>
				</Flex>
			</Flex>
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
					width="500px"
					height="500px"
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
					width="500px"
					height="500px"
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
		</Box>
	);
};

export default ReviewSection;
