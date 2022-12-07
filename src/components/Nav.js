import React from "react";
import {
	Box,
	Button,
	Image,
	Flex,
	Spacer,
	ButtonGroup,
} from "@chakra-ui/react";
import Logo from "../assets/images/Mechdly-logo.png";
import ButtonComponent from "./ButtonComponent";

const Nav = () => {
	return (
		<Flex pt="6">
			<Box width="180px" mt="10px">
				<Image src={Logo} alt="Mechdly logo" />
			</Box>
			<Spacer />
			<ButtonGroup gap={10} display={["none", "flex"]}>
				<Button
					borderRadius="37px"
					border="2px"
					borderColor="rgba(246, 133, 55, 0.6)"
					bg="#321A09"
					color="white"
					paddingInline={12}
					paddingBlock={7}
					_hover={{
						background: "rgba(246, 133, 55, 0.6)",
					}}
				>
					Log in
				</Button>

				<ButtonComponent text="Get Started" />
			</ButtonGroup>
		</Flex>
	);
};

export default Nav;
