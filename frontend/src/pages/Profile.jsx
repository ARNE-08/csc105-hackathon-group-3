import React from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography, Button } from "@mui/material";
import imageSrc from "../assets/profilepic1.jpg";
import CardProfile from "../components/CardProfile";


function Profile() {
  return (
    <>
    <Box sx={{backgroundColor: '#8FBDD3'}}>
      <Box sx={{ backgroundColor: "#2C2639" }}>
        <Navbar />
      </Box>

      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box sx={{ height: "100vh" }}>
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
                marginTop: "70px",
              }}
            ></Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
                color={'white'}
              >
                fullname :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid white",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                    backgroundColor: "#8FBDD3",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
                color={'white'}
              >
                lastname :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid white",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                    backgroundColor: "#8FBDD3",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
                color={'white'}
              >
                company :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid white",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                    backgroundColor: "#8FBDD3",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
                color={'white'}
              >
                email :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid white",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                    backgroundColor: "#8FBDD3",
                  }}
                />
              </Typography>

              <Typography
                variant="h6"
                component="div"
                className="Hometext title"
                margin={"10px"}
                color={'white'}
              >
                tel :
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid white",
                    width: "100%",
                    height: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "black",
                    outline: "none",
                    marginBottom: "10px",
                    backgroundColor: "#8FBDD3",
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              
              width: "90%",
              height: "60vh",
              margin: "auto",
              marginTop: "30px",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <Box sx={{ padding: "30px" }}>
              <CardProfile />
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
              }}
            >
              
            </Box>
          </Box>

          <Box
            sx={{
              
              width: "90%",
              height: "60vh",
              margin: "auto",
              marginTop: "30px",
              marginBottom: "50px",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <Box sx={{ padding: "30px" }}>
              <CardProfile />
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
              }}
            >
              
            </Box>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </>
  );
}

export default Profile;
