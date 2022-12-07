import "./css/App.css";
import { Box } from "@chakra-ui/react";
import Nav from "./components/Nav";

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";

function App() {
	return (
		<Box
			paddingInline={["5%", "130px"]}
			maxW="1600px"
			m="auto"
			// backgroundColor="#030100"
			height="100%"
			// overflow="hidden"
		>
			<Nav />
			{/* hero section */}
			<HeroSection />
			<FeaturesSection />
			<ServicesSection />
			<ReviewSection />
			<Footer />
		</Box>
	);
}

export default App;
