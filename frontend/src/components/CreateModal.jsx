import React from 'react'
import { Box, Typography, Button, CardActions, CardContent, Card, CardMedia, TextField } from '@mui/material';
import { useEffect, useState, useContext } from "react";
import GlobalContext from '../share/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';
import CardContext from '../share/CardContext';
import { AxiosError } from "axios";
import Axios from '../share/AxiosInstance';


function CreateModal({ handleSubmit }) {
	const { name, setName } = React.useContext(CardContext)
	const { nameError, setNameError } = React.useContext(CardContext)
	const { location, setLocation } = React.useContext(CardContext)
	const { locationError, setLocationError } = React.useContext(CardContext)
	const { contact, setContact } = React.useContext(CardContext)
	const { contactError, setContactError } = React.useContext(CardContext)
	const { description, setDescription } = React.useContext(CardContext)
	const { descriptionError, setDescriptionError } = React.useContext(CardContext)
	// const [deadline, setDeadline] = useState(null)
	// const [todoTime, setodoTime] = useState(null)
	const { openAt, setOpenAt } = React.useContext(CardContext)
	const { closeAt, setCloseAt } = React.useContext(CardContext)
	const { dateStart, setDateStart } = React.useContext(CardContext)
	const { dateEnd, setDateEnd } = React.useContext(CardContext)
	const { category, setCategory } = React.useContext(CardContext)
	const { categoryError, setCategoryError } = React.useContext(CardContext)
	const { event_url, setEventUrl } = React.useContext(CardContext)
	const { banner_url, setBannerUrl } = React.useContext(CardContext)

	const [newLink, setNewLink] = useState({});

	const [error, setError] = useState({});
	const { setStatus } = useContext(GlobalContext);

	const submit = async () => {
		if (!validateForm()) return;
		// console.log(status)
		try {
			const response = await Axios.post('/addEvent', {
				name,
				location,
				contact,
				description,
				openAt,
				closeAt,
				dateStart,
				dateEnd,
				category,
				event_url,
				banner_url,
			});
			if (response.data.success) {
				setStatus({
					msg: 'To-do list has been created',
					severity: 'success'
				});
				navigate('/cal-event');
			}
			else {
				console.log(response.data.error)
				setStatus({
					msg: response.data.error,
					severity: 'error'
				});
			}
		} catch (e) {
			if (e instanceof AxiosError)
				if (e.response)
					return setStatus({
						msg: e.response.data.error,
						severity: 'error',
					});
			return setStatus({
				msg: e.message,
				severity: 'error',
			});
		}
	}
	const validateForm = () => {
		let isValid = true;
		if (!name) {
			setNameError('Name is required');
			isValid = false;
		}
		if (!location) {
			setLocationError('Location is required');
			isValid = false;
		}
		if (!contact) {
			setContactError('Contact is required');
			isValid = false;
		}
		if (!description) {
			setDescriptionError('Description is required');
			isValid = false;
		}
		if (!category) {
			setCategoryError('Category is required');
			isValid = false;
		}
		if (!deadline) {
			setStatus({
				msg: 'Deadline is required',
				severity: 'error'
			});
			isValid = false;
		}
		if (!todoTime) {
			setStatus({
				msg: 'Time is required',
				severity: 'error'
			});
			isValid = false;
		}
		return isValid;
	}

	//! when close modal => reset info
	const resetAndClose = () => {
		setTimeout(() => {
			setNewLink({
				name: '',
				description: '',
				url: ''
			});
			setError({});
		}, 500);
		handleSubmit();
	};

	return (
		<Box height={"450px"} marginBottom={2} bgcolor={"white"} borderRadius={"15px"} padding={"10px"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} boxShadow={"-2px 2px 1px rgba(0, 0, 0, 0.1)"}  >
			<Box width={"85%"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} >
				<Typography sx={{fontWeight: "bold"}} >Create Location</Typography>
				<TextField
					required
					size="small"
					type={"text"}
					value={name}
					label="Name"
					variant="outlined"
					sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
					onChange={(e) => setName(e.target.value)}
					error={nameError !== ""}
					/>
				 <Button variant='contained' onClick={submit} sx={{ left: "5px"}} >Submit</Button>
			</Box>
			<Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} gap={2} >
				<Box width={"40%"} height={"90%"}  >
					<TextField
						required
						size="small"
						type={"text"}
						value={location}
						label="Loaction"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setLocation(e.target.value)}
						error={locationError !== ""}
					/>
					<TextField
						required
						size="small"
						type={"text"}
						value={contact}
						label="Contact"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setContact(e.target.value)}
						error={contactError !== ""}
					/>
					<TextField
						required
						size="small"
						type={"text"}
						value={description}
						label="Description"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setDescription(e.target.value)}
						error={descriptionError !== ""}
					/>
					<TextField
						required
						size="small"
						type={"text"}
						value={category}
						label="Category"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setCategory(e.target.value)}
						error={categoryError !== ""}
					/>
					<TextField
						size="small"
						type={"text"}
						value={event_url}
						label="Event Url"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
					/>

				</Box>

				<Box width={"40%"} height={"90%"}  >
					<TextField
						size="small"
						type={"text"}
						value={banner_url}
						label="Banner Url"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setBannerUrl(e.target.value)}
					/>
					<TextField
						size="small"
						type={"text"}
						value={openAt}
						label="Open At"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setOpenAt(e.target.value)}
					/>
					<TextField
						size="small"
						type={"text"}
						value={closeAt}
						label="Close At"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setCloseAt(e.target.value)}
					/>
					<TextField
						size="small"
						type={"text"}
						value={dateStart}
						label="Date Start"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setDateStart(e.target.value)}
					/>
					<TextField
						size="small"
						type={"text"}
						value={dateEnd}
						label="Date End"
						variant="outlined"
						sx={{ width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
						onChange={(e) => setDateEnd(e.target.value)}
					/>

				</Box>
			</Box>
		</Box>
	)
}

export default CreateModal
