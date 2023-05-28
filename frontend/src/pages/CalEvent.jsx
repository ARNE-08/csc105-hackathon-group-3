import React from 'react'
import { Typography, Box, Grid, Tab, Tabs, } from '@mui/material'
import CalcuForm from '../components/CalcuForm'
import { useState, useEffect, useContext, useMemo } from 'react'
import GlobalContext from "../share/GlobalContext"
import CardLocation from "../components/CardLocation"
import Navbar from '../components/Navbar'
import CreateModal from '../components/CreateModal'
import CardContext from '../share/CardContext'
import { AxiosError } from "axios";
import Axios from '../share/AxiosInstance';

function CalEvent() {
	const { user, setUser } = useContext(GlobalContext);
	const { status, setStatus } = useContext(GlobalContext);
	const [cards, setCards] = useState([]);

	const [name, setName] = useState('')
	const [nameError, setNameError] = useState('')
	const [location, setLocation] = useState('')
	const [locationError, setLocationError] = useState('')
	const [contact, setContact] = useState('')
	const [contactError, setContactError] = useState('')
	const [description, setDescription] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	const [openAt, setOpenAt] = useState('')
	const [closeAt, setCloseAt] = useState('')
	const [dateStart, setDateStart] = useState('')
	const [dateEnd, setDateEnd] = useState('')
	const [category, setCategory] = useState('')
	const [categoryError, setCategoryError] = useState('')
	const [event_url, setEventUrl] = useState('')
	const [banner_url, setBannerUrl] = useState('')

	//! useEffect
	useEffect(() => {
		Axios.get("/getEvent")
			.then((response) => {
				const responseData = response.data;
				if (responseData.success) {
					setCards(responseData.data);
				} else {
					// Handle unsuccessful response
				}
			})
			.catch((error) => {
				// Handle the error
				console.error(error);
			});
	}, []);

	//! for Add new
	const [showFirstBox, setShowFirstBox] = useState(true);
	const [showSecondBox, setShowSecondBox] = useState(false);

	//! 1.)  Note Create Modal
	const handleFirstBoxClick = () => {
		if (!user) {
			setStatus({
				msg: 'You must login to create note',
				severity: 'error',
			});
		} else {
			setShowFirstBox(false);
			setShowSecondBox(true);
		}
		setTimeout(() => setStatus(), 1000);
	};

	const handleSecondBoxSubmit = () => {
		setShowFirstBox(true);
		setShowSecondBox(false);
	};

	const cardContextValue = useMemo(() => {
		return {
		  name, setName, nameError, location, setLocation, locationError, contact, setContact, contactError,
		  description, setDescription, descriptionError,
		  openAt, setOpenAt, closeAt, setCloseAt, dateStart, setDateStart, dateEnd, setDateEnd,
		  category, setCategory, categoryError, event_url, setEventUrl, banner_url, setBannerUrl
		};
	  }, []);


	//! to map CardLocation
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Grid container bgcolor={"#8FBDD3"} spacing={2} sx={{ margin: "0 auto", display: "flex", justifyContent: "center", alignItem: "center", flexDirection: {xs: "column", md: "row"} }}  >
				<Navbar />
				<Grid item
					style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: 15 }}
					xs={12}
					md={5}
					bgcolor={"white"}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					justifyContent={"center"}
					height={"100%"}
					marginTop={4.5}
				>
					<div style={{ overflowX: 'auto', maxWidth: '100%' }}>
						<CalcuForm />
					</div>
				</Grid>

				{/* right */}
				<Grid item xs={12} md={7} bgcolor={"transparent"} padding={"20px"} display={"flex"} flexDirection={"column"} marginTop={3} >
					<Box sx={{ display: "block", bgcolor: "white", borderRadius: "5px", marginBottom: "10px" }}  >
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="auto"
						>
							<Tab label="SELL" sx={{ width: "33%" }} />
							<Tab label="DONATE" sx={{ width: "33%" }} />
							<Tab label="EVENT" sx={{ width: "33%" }} />
						</Tabs>
					</Box>

					{showFirstBox && (
						<Box
							onClick={handleFirstBoxClick}
							bgcolor={"#2C2639"}
							width={"100%"}
							height={"50px"}
							borderRadius={"15px"}
							border={"3px solid black"}
							// boxShadow={"-6px 5px 1px rgba(255, 255, 255, 1)"}
							display={'flex'}
							alignItems={"center"}
							marginBottom={2}
							sx={{
								cursor: 'pointer',
								'&:hover': {
									transform: 'scale(1.05)',
									transition: 'all 0.1s ease-in-out',
								}
							}}
						>
							<Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "white", marginLeft: "19px" }} >+&nbsp; Add New Card</Typography>
						</Box>
					)}

					<CardContext.Provider value={cardContextValue}>
						{showSecondBox && (
							<CreateModal handleSubmit={handleSecondBoxSubmit} />
					)}
					</CardContext.Provider>

					<div style={{ overflowX: 'auto', maxWidth: '100%' }}>
						<div style={{ display: 'flex', gap: '10px' }}>


					<Box width={"85%"} height={"100%"} display={"flex"}  gap={3} >
						{cards.map((cards) => (
							<CardLocation
								key={cards.id} // Add key prop
								name={cards.name}
								location={cards.location}
								contact={cards.contact}
								description={cards.description}
								openAt={cards.openAt}
								closeAt={cards.closeAt}
								date_start={cards.date_start}
								date_end={cards. date_end}
								event_url={cards.event_url}
								banner_url={cards.banner_url}
							/>
						))}

						{/* <CardLocation
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
						/> */}

					</Box>
					</div>
					</div>
				</Grid>
			</Grid>
		</>
	)
}

export default CalEvent
