import React from 'react'
import { Box, Typography, Button, CardActions, CardContent, Card, CardMedia, TextField } from '@mui/material';
import { useEffect, useState, useContext } from "react";
import GlobalContext from '../share/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';
import CardContext from '../share/CardContext';


// function CreateModal({ handleSubmit, name, location, contact, description, openAt, closeAt, dateStart, dateEnd, category, eventUrl, bannerUrl }) {
function CreateModal({  }) {
	const [name, setName] = useState('')
	const [nameError, setNameError] = useState('')
	const [location, setLocation] = useState('')
	const [locationError, setLocationError] = useState('')
	const [contact, setContact] = useState('')
	const [contactError, setContactError] = useState('')
	const [description, setDescription] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	// const [deadline, setDeadline] = useState(null)
	// const [todoTime, setodoTime] = useState(null)
	const [openAt, setOpenAt] = useState('')
	const [closeAt, setCloseAt] = useState('')
	const [dateStart, setDateStart] = useState('')
	const [dateEnd, setDateEnd] = useState('')
	const [category, setCategory] = useState('')
	const [categoryError, setCategoryError] = useState('')
	const [eventUrl, setEventUrl] = useState('')
	const [bannerUrl, setBAnnerUrl] = useState('')
	const [newLink, setNewLink] = useState({


	});
	const [error, setError] = useState({});
	const { setStatus } = useContext(GlobalContext);

	const handleSubmit = async () => {
		// console.log(deadline)
		// console.log(todoTime)
		if (!validateForm()) return;
		// console.log(status)
		// console.log(todoTime);
		// const formattedDate = deadline ? deadline.toISOString().split('T')[0] : null;
		// const formattedTime = todoTime ? todoTime.toISOString().split('T')[1].split('.')[0] : null;
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
				eventUrl,
				bannerUrl,
				deadline: formattedDate,
				time: formattedTime,
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
				title: '',
				description: '',
				url: ''
			});
			setError({});
		}, 500);
		handleSubmit();
	};

	const handleChange = (e) => {
		setNewLink({
			...newLink,
			[e.target.name]: e.target.value,
		});
	};
	const handleCancel = () => {
		navigate('/cal-event')
	}

	return (
		<Box marginBottom={2}>
			<TextField
					required
					size="small"
					className='textfieldCreate'
					id="title"
					name="title"
					label="Title"

					variant="outlined"
					sx={{ color: "red", width: "100%", height: "40px", marginBottom: "6px", backgroundColor: "white", borderRadius: "15px" }}
					value={newLink.title}
					onChange={handleChange}
					error={!!error.title}
					helperText={error.title}
			/>
			<Card sx={{ maxWidth: 800, height: "50px", borderRadius: "0px", backgroundColor: "#2C2639", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<Typography sx={{fontSize: "15px", color: "white", fontWeight: "bold"}} >{date_start}  |  {date_end} </Typography>
				<Typography sx={{fontSize: "15px", color: "white", fontWeight: "bold"}} >{openAt}  -  {closeAt} </Typography>
			</Card>
		</Box>
	)
}

export default CreateModal
