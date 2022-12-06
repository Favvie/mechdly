import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonComponent = ({ text }) => {
	return (
		<Button
			borderRadius="37px"
			borderColor="#F68537"
			bg="#F68537"
			color="black"
			paddingInline={12}
			paddingBlock={7}
			alignSelf="flex-end"
			_hover={{
				background: " #FFD282",
			}}
		>
			{text}
		</Button>
	);
};

export default ButtonComponent;
