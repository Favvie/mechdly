{
	/* <Box
				color="white"
				flex="1"
				width="694px"
				height="658px"
				borderRadius="40px"
				// bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
				// backdropFilter="auto"
				// backdropBlur="21px"
				border="30px"
				borderColor="blue.200"
			>
				<Box border="30px" borderColor="blue.200">
					<Text fontSize="40px" textAlign="center">
						Fri 10th Nov, 2022
					</Text>
					<VStack spacing="100px">
						<Flex spacing={10} justifyContent="space-between">
							<Box>Mo</Box>
							<Box>Tu</Box>
							<Box>We</Box>
							<Box>Th</Box>
							<Box>Fr</Box>
							<Box>Sa</Box>
							<Box>Su</Box>
						</Flex>
						<Flex spacing={10} justifyContent="space-between">
							<Box>29</Box>
							<Box>30</Box>
							<Box>1</Box>
							<Box>2</Box>
							<Box>3</Box>
							<Box>4</Box>
							<Box>5</Box>
						</Flex>
						<Flex spacing={10} justifyContent="space-between">
							<Box>6</Box>
							<Box>7</Box>
							<Box>8</Box>
							<Box>9</Box>
							<Box>10</Box>
							<Box>11</Box>
							<Box>12</Box>
						</Flex>
						<Flex spacing={10} justifyContent="space-between">
							<Box>13</Box>
							<Box>14</Box>
							<Box>15</Box>
							<Box>16</Box>
							<Box>17</Box>
							<Box>18</Box>
							<Box>19</Box>
						</Flex>
					</VStack>
					<Box>Mercedez Benz C300 Servicing</Box>
					<HStack>
						<Box>Emeka & Sons Automobile</Box>
						<Box>Download Invoice</Box>
					</HStack>
				</Box>
			</Box> */
}
<Flex
	direction="column"
	color="white"
	width="694px"
	height="658px"
	border="2px"
	borderColor=" #FFD282"
	borderRadius="40px"
	bgGradient="radial(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)"
	p="58px"
	align="center"
>
	<Text textAlign="center" color="#F5F5F5" fontSize="40px">
		Fri 10th Nov, 2022
	</Text>
	{/* <Center> */}
	<Flex justifyContent="space-evenly">
		<Box>Su</Box>
		<Spacer />
		<Box>Mo</Box>
		<Spacer />
		<Box>Tu</Box>
		<Spacer />
		<Box>We</Box>
		<Spacer />
		<Box>Th</Box>
		<Spacer />
		<Box>Fr</Box>
		<Spacer />
		<Box>Sa</Box>
		<Spacer />
		<Box>Su</Box>
		<Spacer />
	</Flex>
	{/* </Center> */}
</Flex>;
