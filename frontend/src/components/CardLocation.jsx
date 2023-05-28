import React from 'react'
import { Box, Typography, Button, CardActions, CardContent, Card, CardMedia } from '@mui/material';
import { useEffect, useState, useContext } from "react";
import GlobalContext from '../share/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';


function CardLocation({ name, location, contact, description, openAt, closeAt, date_start, date_end, event_url, banner_url }) {
	const { status, setStatus } = useContext(GlobalContext);
	return (
		<Box>
				<Card sx={{ maxHeight: 300, width: "250px" }}>
					<CardMedia sx={{ height: 150 }} image={banner_url} title="banner" />
					<div style={{overflow: 'auto', width: "250px", height: "300px" }}>
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
					</div>
				</Card>

			<Card sx={{ width: "250px", height: "60px", borderRadius: "0px", backgroundColor: "#2C2639", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px" }}>
				<Typography sx={{fontSize: "12px", color: "white", fontWeight: "bold"}} >{date_start}  |  {date_end} </Typography>
				<Typography sx={{fontSize: "12px", color: "white", fontWeight: "bold"}} >{openAt}  -  {closeAt} </Typography>
			</Card>
		</Box>
	)
}

export default CardLocation