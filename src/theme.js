import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: `'Satoshi-Regular', sans-serif`,
		satoshiVariable: `'Satoshi-Variable', sans-serif`,
		satoshiVariableItalic: `'Satoshi-VariableItalic', sans-serif`,
		satoshiLight: `'Satoshi-Light', sans-serif`,
		satoshiLightItalic: `'Satoshi-LightItalic', sans-serif`,
		satoshiRegular: `'Satoshi-Regular', sans-serif`,
		satoshiItalic: `'Satoshi-Italic', sans-serif`,
		satoshiMedium: `'Satoshi-Medium', sans-serif`,
		satoshiMediumItalic: `'Satoshi-MediumItalic', sans-serif`,
		satoshiBold: `'Satoshi-Bold', sans-serif`,
		satoshiBoldItalic: `'Satoshi-BoldItalic', sans-serif`,
		satoshiBlack: `'Satoshi-Black', sans-serif`,
		satoshiBlackItalic: `'Satoshi-BlackItalic', sans-serif`,
	},

	colors: {
		orange: "#F68537",
	},

	styles: {
		global: {
			body: {
				fontFamily: "satoshiRegular",
				fontColor: "white",
				// background: "black",
				// paddingInline: "20px",
			},
		},
	},
});

export default theme;
