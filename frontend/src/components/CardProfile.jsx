import React from 'react'
import { Box, Typography, Button, CardActions, CardContent, Card, CardMedia } from '@mui/material';
import { useEffect, useState, useContext } from "react";
import GlobalContext from '../share/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';


function CardProfile({ name, location, contact, description, openAt, closeAt, date_start, date_end, event_url, banner_url }) {
	const { status, setStatus } = useContext(GlobalContext);
	return (
		<>
			<div style={{ maxHeight: 300, overflow: 'auto' }}>
				<Card sx={{ maxWidth: 800 }}>
					<CardMedia sx={{ height: 150 }} image={banner_url} title="banner" />
					<CardContent sx={{ padding: "20px" }} >
						<Typography gutterBottom variant="h6" component="div" sx={{fontWeight:"bold"}} >
							{name}
						</Typography>
						<hr />
						<Typography gutterBottom variant="body2" component="div">
						Location: &nbsp;
							<Link href={location} target="_blank" >
								 {location}
							</Link>
						</Typography>
						<hr />
						<Typography gutterBottom variant="body2" component="div">
						Contact:  &nbsp;
							<Link href={contact} target="_blank" >
								 {contact}
							</Link>
						</Typography>
						<hr />
						<Typography gutterBottom variant="body2" component="div">
						 Event url: &nbsp;
							<Link href={event_url} target="_blank" >
									{event_url}
							</Link>
						</Typography>
						<hr />

						<Typography color="text.secondary" sx={{ fontSize: "12px" }} >
							{description}
						</Typography>
					</CardContent>

				</Card>

			</div>
			<Card sx={{ maxWidth: 800, height: "50px", borderRadius: "0px", backgroundColor: "#2C2639", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<Typography sx={{fontSize: "15px", color: "white", fontWeight: "bold"}} >{date_start}  |  {date_end} </Typography>
				<Typography sx={{fontSize: "15px", color: "white", fontWeight: "bold"}} >{openAt}  -  {closeAt} </Typography>
			</Card>
		</>
	)
}

export default CardProfile