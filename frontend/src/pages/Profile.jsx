import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Box, Grid, Typography, Button } from "@mui/material";
// import imageSrc from "../assets/profilepic1.jpg";
import CardProfile from "../components/CardProfile";
import "./Profile.css";
import GlobalContext from "../share/GlobalContext";

import { AxiosError } from "axios";
import Axios from "../share/AxiosInstance";

function Profile() {
  const { user, setUser } = useContext(GlobalContext)
  const { status, setStatus } = useContext(GlobalContext)

  const [profileUser, setProfileUser] = useState([])

  useEffect(() => {
    Axios.get("/profile")
      .then((response) => {
        const responseData = response.data;
        console.log(response.data)
        if (responseData.success) {
          setProfileUser(responseData.data);
          console.log(responseData.data)
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            return setStatus({
              msg: error.response.data.error,
              severity: 'error',
            });
          }
        }
        return setStatus({
          msg: error.message,
          severity: 'error',
        });
      });
  }, []);

  return (
    <div class="profileBG">
      <Box sx={{ backgroundColor: '#8FBDD3' }}>
        <Box sx={{ backgroundColor: "#2C2639" }}>
          <Navbar />
        </Box>

        <Grid container>
          <Grid item xs={12} sm={4}>
            <div className="UserInform">
              <Box sx={{ height: "100vh" }}>
                {/* <Box
                sx={{
                  position: "relative",
                  backgroundImage: {profileUser.profile_picture},
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "40vh",
                  width: "40vh",
                  borderRadius: "50%",
                  margin: "auto",
                  marginTop: "70px",
                }}
              ></Box> */}
                <div className="ProfileBorder">
                  <Box
                    class="ProfilePagePicture"
                    component='img'
                    alt="Logo"
                    src={profileUser.profile_picture}
                  />
                </div>

                <div className="UserInformBox">
                  <Box sx={{ margin: "20px" }}>
                    <Typography
                      variant="h6"
                      component="div"
                      className="Hometext title"
                      margin={"10px"}
                      color={'white'}
                      sx={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      fullname :
                      <Typography
                        sx={{ fontFamily: "'Poppins', sans-serif" }}
                      >{profileUser.fullname}</Typography>
                      {/* <input
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
                  /> */}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="div"
                      className="Hometext title"
                      margin={"10px"}
                      color={'white'}
                      sx={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      lastname :
                      <Typography
                        sx={{ fontFamily: "'Poppins', sans-serif" }}
                      >{profileUser.lastname}</Typography>

                      {/* <input
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
                  /> */}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="div"
                      className="Hometext title"
                      margin={"10px"}
                      color={'white'}
                      sx={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      company :
                      <Typography
                        sx={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {profileUser.company_organization}</Typography>

                      {/* <input
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
                  /> */}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="div"
                      className="Hometext title"
                      margin={"10px"}
                      color={'white'}
                      sx={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      email :
                      <Typography
                        sx={{ fontFamily: "'Poppins', sans-serif" }}
                      >{profileUser.email}</Typography>

                      {/* <input
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
                  /> */}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="div"
                      className="Hometext title"
                      margin={"10px"}
                      color={'white'}
                      sx={{ fontFamily: "'Poppins', sans-serif" }}

                    >
                      tel :
                      <Typography
                        sx={{ fontFamily: "'Poppins', sans-serif" }}
                      >{profileUser.tel}</Typography>

                      {/* <input
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
                  /> */}
                    </Typography>
                  </Box>
                </div>
              </Box>
            </div>
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
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ backgroundColor: "white", right: "10px" }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ backgroundColor: "white" }}
                >
                  Delete
                </Button>
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
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ backgroundColor: "white", right: "10px" }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ backgroundColor: "white" }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Profile;
