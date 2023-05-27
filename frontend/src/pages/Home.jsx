import React from "react";
import Navbar from "../components/Navbar";
import { Typography, Grid, Box } from "@mui/material";
import imageSrc from "../assets/pic1.jpg";

import MultipleSelect from "../components/MultipleSelect";
import Table from "../components/Table";
import './Home.css'

function Home() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      >
        <Navbar />
        <Box
          sx={{
            position: "relative",
            marginTop: "40vh",
            color: "white",
            px: 2,
          }}
        >
          <Typography variant="h2" component="div" className="Hometext title">
            Join Us in Creating a Greener Future!
          </Typography>
          <Typography variant="body1" component="div" className="Hometext">
            Welcome to our website dedicated to waste separation and environmental consciousness. We invite you to become an active participant in building a sustainable future by practicing waste separation in your daily life.
          </Typography>
          <Box sx={{ marginTop: "10px" }}>
            <MultipleSelect />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          p: 2,
          color: "white",
          backgroundColor: "#8FBDD3",
          margin: "30px",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h4" component="div" className="Hometext title">
          How to separate this waste?
        </Typography>
        <ul>
          <li>Name:</li>
          <li>Steps:</li>
        </ul>
      </Box>
      <Box sx={{ margin: "30px" }}>
        <Table />
      </Box>
    </Box>
  );
}

export default Home;
