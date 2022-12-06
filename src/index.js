import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Fonts from "./assets/fonts/Fonts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Fonts />
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
