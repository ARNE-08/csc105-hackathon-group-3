import React from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import imageSrc from "../assets/profilepic1.jpg";

function Profile() {
  return (
    <>
      <Box sx={{ backgroundColor: "black" }}>
        <Navbar />
      </Box>

      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "white", height: "100vh" }}>
            <Box
              sx={{
                position: "relative",
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
                width: "40vh",
                borderRadius: "50%",
                margin: "auto",
                marginTop: "20px",
              }}
            ></Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
              >
                fullname :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
              >
                lastname :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
              >
                company :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
              >
                email :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
              >
                tel :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
              >
                url :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "50px",
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              backgroundColor: "#BE8C63",
              width: "90%",
              height: "50vh",
              margin: "auto",
              marginTop: "50px",
              borderRadius: "20px",
              marginBottom: "20px",
            
            }}
          ></Box>

          <Box
            sx={{
              backgroundColor: "#BE8C63",
              width: "90%",
              height: "50vh",
              margin: "auto",
              marginTop: "50px",
              borderRadius: "20px",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
