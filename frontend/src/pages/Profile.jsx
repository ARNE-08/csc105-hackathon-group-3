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
  const [userCard, setUserCard] = useState([])

  const [profileUser, setProfileUser] = useState([])

  useEffect(() => {
    Axios.get("/profile")
      .then((response) => {
        const responseData = response.data;
        // console.log(response.data)
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

    Axios.get("/userEvent")
      .then((response) => {
        const responseData = response.data;
        // console.log(response.data)
        if (responseData.success) {
          setUserCard(responseData.data);
          // console.log(responseData.data)
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
    <>
      <Box class="profileBG">

        <Box sx={{ backgroundColor: "#2C2639" }}>
          <Navbar />
        </Box>

        <Grid container>
          <Grid item xs={12} sm={4}>
            <div className="UserInform">
              <Box sx={{ height: "100vh", marginLeft: '50px' }}>

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
              {userCard.map((event) => (
                <Box sx={{ padding: "30px", marginBottom: '50px' }}>
                  <CardProfile name={event.name} location={event.location} contact={event.contact} description={event.description} 
                  openAt={event.openAt} closeAt={event.closeAt} date_start={event.date_start} date_end={event.date_end} event_url={event.event_url} banner_url={event.banner_url}/>
                </Box>
              ))}
              {/* <Box sx={{ padding: "30px", marginBottom: '50px' }}>
                <CardProfile />
              </Box>

              <Box sx={{ padding: "30px", marginBottom: '50px' }}>
                <CardProfile />
              </Box> */}


            </Box>
          </Grid>
        </Grid>

      </Box>
    </>
  );
}

export default Profile;
