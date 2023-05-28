import React from 'react'
import { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Grid, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CalcuForm() {
	const [weight1, setWeight1] = useState(0);
	const [weight2, setWeight2] = useState(0);
	const [weight3, setWeight3] = useState(0);
	const [weight4, setWeight4] = useState(0);
	const [weight5, setWeight5] = useState(0);
	const [weight6, setWeight6] = useState(0);
	const [weight7, setWeight7] = useState(0);
	const [weight8, setWeight8] = useState(0);
	const [weight9, setWeight9] = useState(0);
	const [weight10, setWeight10] = useState(0);
	const [weight11, setWeight11] = useState(0);
	const [totalPrice1, setTotalPrice1] = useState(0);
	const [totalPrice2, setTotalPrice2] = useState(0);
	const [totalPrice3, setTotalPrice3] = useState(0);
	const [totalPrice4, setTotalPrice4] = useState(0);
	const [totalPrice5, setTotalPrice5] = useState(0);
	const [totalPrice6, setTotalPrice6] = useState(0);
	const [totalPrice7, setTotalPrice7] = useState(0);
	const [totalPrice8, setTotalPrice8] = useState(0);
	const [totalPrice9, setTotalPrice9] = useState(0);
	const [totalPrice10, setTotalPrice10] = useState(0);
	const [totalPrice11, setTotalPrice11] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);


	const handle1Decrease = () => {
		setWeight1((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle2Decrease = () => {
		setWeight2((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle3Decrease = () => {
		setWeight3((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle4Decrease = () => {
		setWeight4((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle5Decrease = () => {
		setWeight5((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle6Decrease = () => {
		setWeight6((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle7Decrease = () => {
		setWeight7((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle8Decrease = () => {
		setWeight8((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle9Decrease = () => {
		setWeight9((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle10Decrease = () => {
		setWeight10((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};
	const handle11Decrease = () => {
		setWeight11((prevWeight) => (prevWeight > 0 ? prevWeight - 1 : 0));
	};


	const handle1Increase = () => {
		setWeight1((prevWeight) => prevWeight + 1);
	};
	const handle2Increase = () => {
		setWeight2((prevWeight) => prevWeight + 1);
	};
	const handle3Increase = () => {
		setWeight3((prevWeight) => prevWeight + 1);
	};
	const handle4Increase = () => {
		setWeight4((prevWeight) => prevWeight + 1);
	};
	const handle5Increase = () => {
		setWeight5((prevWeight) => prevWeight + 1);
	};
	const handle6Increase = () => {
		setWeight6((prevWeight) => prevWeight + 1);
	};
	const handle7Increase = () => {
		setWeight7((prevWeight) => prevWeight + 1);
	};
	const handle8Increase = () => {
		setWeight8((prevWeight) => prevWeight + 1);
	};
	const handle9Increase = () => {
		setWeight9((prevWeight) => prevWeight + 1);
	};
	const handle10Increase = () => {
		setWeight10((prevWeight) => prevWeight + 1);
	};
	const handle11Increase = () => {
		setWeight11((prevWeight) => prevWeight + 1);
	};


	useEffect(() => {
		const price1PerKg = 3; // Price per kg of paper
		const price2PerKg = 2; // Price per kg of can
		const price3PerKg = 3;
		const price4PerKg = 2;
		const price5PerKg = 2;
		const price6PerKg = 3;
		const price7PerKg = 2;
		const price8PerKg = 2;
		const price9PerKg = 2;
		const price10PerKg = 3;
		const price11PerKg = 2;

		// Calculate total price for paper
		const price1 = weight1 * price1PerKg;
		setTotalPrice1(price1);
		const price2 = weight2 * price2PerKg;
		setTotalPrice2(price2);
		const price3 = weight3 * price3PerKg;
		setTotalPrice3(price3);
		const price4 = weight4 * price4PerKg;
		setTotalPrice4(price4);
		const price5 = weight5 * price5PerKg;
		setTotalPrice5(price5);
		const price6 = weight6 * price6PerKg;
		setTotalPrice6(price6);
		const price7 = weight7 * price7PerKg;
		setTotalPrice7(price7);
		const price8 = weight8 * price8PerKg;
		setTotalPrice8(price8);
		const price9 = weight9 * price9PerKg;
		setTotalPrice9(price9);
		const price10 = weight10 * price10PerKg;
		setTotalPrice10(price10);
		const price11 = weight11 * price11PerKg;
		setTotalPrice11(price11);

		// Calculate total price for both paper and can
		const totalPrice = price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8 + price9 + price10 + price11;
		setTotalPrice(totalPrice);
	}, [weight1, weight2, weight3, weight4, weight5, weight6, weight7, weight8, weight9, weight10, weight11]);


	return (
		<Box width={400} height={"100%"} display={"flex"} flexDirection={"column"} padding={"10px"}>
				<Typography variant="h4" display={"flex"} sx={{ fontWeight: "bold", color: "black" }} >Let's calculate our Trash!</Typography>

			<Box bgcolor={"#8FBDD3"} sx={{marginBottom: "20px", borderRadius: "10px", height: "50px", width: "50%", marginTop: "30px" }} display={"flex"} alignItems={"center"} justifyContent={"center"} >
				<Typography variant="body-1" display={"flex"} sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold", color: "white" }} >Total Price: ฿{totalPrice.toFixed(2)}</Typography>
			</Box>
			{/* 1.) */}
			<Box bgcolor={"#8FD3C5"} sx={{marginBottom: "20px", borderRadius: "10px", height: "50px" }} display={"flex"} alignItems={"center"} >
				<Typography variant="h6" display={"flex"} sx={{ float: "left", marginLeft: "20px", fontWeight: "bold", color: "white" }} >Paper</Typography>
			</Box>
			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"} >
					<Button size="small" onClick={handle1Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight1} kg</Typography>
					<Button size="small" onClick={handle1Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >white/black</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice1.toFixed(2)}</Typography>
				</Grid>
			</Grid>

			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle2Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight2} kg</Typography>
					<Button size="small" onClick={handle2Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >book</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice2.toFixed(2)}</Typography>
				</Grid>
			</Grid>

			{/* 2.) */}
			<Box bgcolor={"#8FD3C5"} sx={{marginBottom: "20px", borderRadius: "10px", height: "50px", marginTop: "30px" }} display={"flex"} alignItems={"center"} >
				<Typography variant="h6" display={"flex"} sx={{ float: "left", marginLeft: "20px", fontWeight: "bold", color: "white" }} >Steel</Typography>
			</Box>
				<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle3Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight3} kg</Typography>
					<Button size="small" onClick={handle3Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >metal sheet</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice3.toFixed(2)}</Typography>
				</Grid>
			</Grid>

			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle4Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight4} kg</Typography>
					<Button size="small" onClick={handle4Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >wire rope</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice4.toFixed(2)}</Typography>
				</Grid>
			</Grid>

			{/* 3.) */}
			<Box bgcolor={"#8FD3C5"} sx={{marginBottom: "20px", borderRadius: "10px", height: "50px", marginTop: "30px" }} display={"flex"} alignItems={"center"} >
				<Typography variant="h6" display={"flex"} sx={{ float: "left", marginLeft: "20px", fontWeight: "bold", color: "white" }} >Glass</Typography>
			</Box>
				<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle5Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight5} kg</Typography>
					<Button size="small" onClick={handle5Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >beer bottle</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice5.toFixed(2)}</Typography>
				</Grid>
			</Grid>

			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle6Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight6} kg</Typography>
					<Button size="small" onClick={handle6Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >green bottle</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice6.toFixed(2)}</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle7Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight7} kg</Typography>
					<Button size="small" onClick={handle7Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >broken glass</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice7.toFixed(2)}</Typography>
				</Grid>
			</Grid>

			{/* 4.) */}
			<Box bgcolor={"#8FD3C5"} sx={{marginBottom: "20px", borderRadius: "10px", height: "50px", marginTop: "30px" }} display={"flex"} alignItems={"center"} >
				<Typography variant="h6" display={"flex"} sx={{ float: "left", marginLeft: "20px", fontWeight: "bold", color: "white" }} >Plastic</Typography>
			</Box>
				<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle8Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight8} kg</Typography>
					<Button size="small" onClick={handle8Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >PET</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice8.toFixed(2)}</Typography>
				</Grid>
			</Grid>

			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle9Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight9} kg</Typography>
					<Button size="small" onClick={handle9Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >foam</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice9.toFixed(2)}</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display={"flex"} flexDirection={"row"}>
					<Button size="small" onClick={handle10Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight10} kg</Typography>
					<Button size="small" onClick={handle10Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }} >plastic PE</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice10.toFixed(2)}</Typography>
				</Grid>
			</Grid>
			<Grid container alignItems="center" justifyContent="space-between">
				<Grid item display="flex" flexDirection="row">
					<Button size="small" onClick={handle11Decrease}>
						<RemoveIcon />
					</Button>
					<Typography variant="body1">{weight11} kg</Typography>
					<Button size="small" onClick={handle11Increase}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item>
					<Typography sx={{ fontWeight: "bold" }}>HDPE</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1">฿{totalPrice11.toFixed(2)}</Typography>
				</Grid>
			</Grid>


		</Box>
	)
}

export default CalcuForm
