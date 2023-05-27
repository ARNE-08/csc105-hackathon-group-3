import React from 'react'
import { Typography, Box, Grid, Tab, Tabs, } from '@mui/material'
import CalcuForm from '../components/CalcuForm'
import { useState, useEffect, useContext } from 'react'
import GlobalContext from "../share/GlobalContext"
import CardLocation from "../components/CardLocation"

function CalEvent() {
	const { user, setUser } = useContext(GlobalContext);
	const { status, setStatus } = useContext(GlobalContext);

	const [link, setLink] = useState([]);
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	//! for Add new
	const [showFirstBox, setShowFirstBox] = useState(true);
	const [showSecondBox, setShowSecondBox] = useState(false);

	//! 1.)  Note Create Modal
	const handleFirstBoxClick = () => {
		// if (!user) {
		// 	setStatus({
		// 		msg: 'You must login to create note',
		// 		severity: 'error',
		// 	});
		// } else {
		// 	setShowFirstBox(false);
		// 	setShowSecondBox(true);
		// }

		setShowFirstBox(false);
		setShowSecondBox(true);

		setTimeout(() => setStatus(), 1000);
	};

	const handleSecondBoxSubmit = () => {
		setShowFirstBox(true);
		setShowSecondBox(false);
	};

	return (
		<Grid container spacing={2} sx={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItem: "center" }}  >
			<Grid item
				xs={5}
				bgcolor={"white"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<CalcuForm />
			</Grid>

			{/* right */}
			<Grid item xs={7} bgcolor={"#8FBDD3"} padding={"20px"} display={"flex"} flexDirection={"column"}  >
				<Box sx={{ display: "block", maxWidth: "80%", bgcolor: "white", borderRadius: "5px", marginBottom: "20px" }} marginTop={2} >
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons="auto"
					>
						<Tab label="SELL" sx={{width: "50%"}} />
						<Tab label="DONATE" sx={{width: "50%"}} />
					</Tabs>
				</Box>

				<Box width={"85%"} height={"100%"} display={"flex"} flexDirection={"row"} gap={2} >
					<CardLocation
						name={"โครงการ “วน” บริษัท ทีบีพีไอ จำกัด"}
						location={"http://bit.ly/37l4U2k"}
						contact={"http://bit.ly/37l4U2k"}
						description={"ถุงพลาสติกที่รับกลับมารีไซเคิล คือ ถุงหูหิ้ว ถุงพลาสติก หรือ ผลิตภัณฑ์ที่เป็นฟิล์มพลาสติกหุ้มบรรจุภัณฑ์ต่างๆ โดยวิธีการเชคพลาสติกคือ เมื่อเอานิ้วจิ้มพลาสติกแล้วพลาสติกจะยืดออก เช่น ถุงขนมปังฟาร์มเฮ้าส์ พลาสติกที่ห่อนมกล่องเป็นแพค 6 กล่อง ถุงน้ำตาลมิตรผลเป็นต้น โดยนำมาทำให้สะอาดและแห้งก่อนบริจาค เพื่อนำมาทำเป็นถุงพลาสติกใหม่ ที่ใช้หมุนเวียนอยู่ในระบบ ลดปริมาณขยะพลาสติกที่จะออกสู่สิ่งเเวดล้อม"}
						openAt={"00:00"}
						closeAt={"12:00"}
						date_start={"12/04/2022"}
						date_end={"12/04/2022"}
						event_url={"http://bit.ly/37l4U2k"}
						banner_url={"https://www.nostramap.com/wp-content/uploads/2022/11/1-300x300-3.webp"}
					/>
					<CardLocation
						name={"โครงการ “วน” บริษัท ทีบีพีไอ จำกัด"}
						location={"http://bit.ly/37l4U2k"}
						contact={"http://bit.ly/37l4U2k"}
						description={"ถุงพลาสติกที่รับกลับมารีไซเคิล คือ ถุงหูหิ้ว ถุงพลาสติก หรือ ผลิตภัณฑ์ที่เป็นฟิล์มพลาสติกหุ้มบรรจุภัณฑ์ต่างๆ โดยวิธีการเชคพลาสติกคือ เมื่อเอานิ้วจิ้มพลาสติกแล้วพลาสติกจะยืดออก เช่น ถุงขนมปังฟาร์มเฮ้าส์ พลาสติกที่ห่อนมกล่องเป็นแพค 6 กล่อง ถุงน้ำตาลมิตรผลเป็นต้น โดยนำมาทำให้สะอาดและแห้งก่อนบริจาค เพื่อนำมาทำเป็นถุงพลาสติกใหม่ ที่ใช้หมุนเวียนอยู่ในระบบ ลดปริมาณขยะพลาสติกที่จะออกสู่สิ่งเเวดล้อม"}
						openAt={"00:00"}
						closeAt={"12:00"}
						date_start={"12/04/2022"}
						date_end={"12/04/2022"}
						event_url={"http://bit.ly/37l4U2k"}
						banner_url={"https://www.nostramap.com/wp-content/uploads/2022/11/1-300x300-3.webp"}
					/>
				</Box>
				{/* {showFirstBox && (
						<Box
							onClick={handleFirstBoxClick}
							bgcolor={"white"}
							width={"85%"}
							height={"73px"}
							borderRadius={"15px"}
							boxShadow={"-6px 5px 1px rgba(255, 155, 29, 1)"}
							display={'flex'}
							alignItems={"center"}
							paddingLeft={"3%"}
							marginTop={3}
							marginBottom={2}
							sx={{
								cursor: 'pointer',
								'&:hover': {
									transform: 'scale(1.05)',
									transition: 'all 0.1s ease-in-out',
								}
							}}
						>
							<Box
								bgcolor={"black"}
								width={"60%"}
								height={"46px"}
								borderRadius={"15px"}
								display={"flex"}
								alignItems={"center"}
							>
								<Typography sx={{ fontFamily: "Ubuntu", fontWeight: "bold", fontSize: "16px", color: "white", marginLeft: "19px" }} >+    New Link</Typography>
							</Box>
						</Box>
					)} */}



			</Grid>
		</Grid>

		// <Box spacing={2} sx={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItem: "center" }}  >
		// 	<Box
		// 		bgcolor={"white"}
		// 		width={"40%"}
		// 		height={"100%"}
		// 		display={"flex"}
		// 		alignItems={"center"}
		// 		justifyContent={"center"}
		// 		sx={{
		// 			overflowX: "scroll",
		// 			// overflowY: "hidden",
		// 			whiteSpace: "nowrap",
		// 		}}
		// 	>
		// 		<CalcuForm />
		// 	</Box>
		// 	<Box
		// 		bgcolor={"white"}
		// 		width={"60%"}
		// 		height={"100%"}
		// 		display={"flex"}
		// 		alignItems={"center"}
		// 		justifyContent={"center"}
		// 	>
		// 		<Box>hello</Box>
		// 	</Box>
		// </Box>
	)
}

export default CalEvent
