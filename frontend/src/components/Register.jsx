import React from "react";
// import { Box } from '@mui/material'
import { Box, Typography, Grid, TextField, Button, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AxiosError } from "axios";
import Axios from "../share/AxiosInstance";
import GlobalContext from "../share/GlobalContext";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import "./Register.css";

function Register({ setIsLogin }) {
  const { user } = useContext(GlobalContext);
  const { status, setStatus } = useContext(GlobalContext)

  const [open, setOpen] = useState(false)
  const [fullname, setFullname] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [lastname, SetLastname] = useState("");
  const [lastnameError, SetLastnameError] = useState("");
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [tel, setTel] = useState("");
  const [telError, setTelError] = useState("");
  const [profile_picture, setProfile_picture] = useState("https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [profilePicture, setProfilePicture] = useState("")
  const [profilePictureError, setprofilePictureError] = useState("")

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleSubmitPicture = () => {
    if (!validateProfile()) return;
    setProfile_picture(profilePicture)
    handleCloseModal()
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const response = await Axios.post("/register", {
        fullname,
        lastname,
        company_organization: company,
        email,
        password,
        tel,
        profile_picture
      });
      // console.log("work")
      if (response.data.success) {
        setIsLogin(true);
        setStatus({
          msg: "Create account successfully",
          severity: "success",
        });
      } else {
        console.log(response.data.error);
        setStatus({
          msg: response.data.error,
          severity: "error",
        });
      }
    } catch (e) {
      setPassword("");
      if (e instanceof AxiosError)
        if (e.response)
          return setStatus({
            msg: e.response.data.error,
            severity: "error",
          });
      return setStatus({
        msg: e.message,
        severity: "error",
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    //check user
    if (!fullname) {
      setFullnameError("Fullname is required");
      isValid = false;
    }
    if (!lastname) {
      SetLastnameError("Lastname is required");
      isValid = false;
    }
    if (!company) {
      setCompanyError("Company/Organization is required");
      isValid = false;
    }
    //check email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (!tel) {
      setTelError("Telephone number is required");
      isValid = false;
    }
    // Check privacy policy checkbox
    const privacyPolicyChecked = document.querySelector(
      "#privacyPolicyCheckbox"
    ).checked;
    if (!privacyPolicyChecked) {
      setStatus({
        msg: "Please agree to the privacy policy",
        severity: "error",
      });
      isValid = false;
    }
    return isValid;
  };

  const validateProfile = () => {
    let isValid = true;
    //check user
    if (!profilePicture) {
      setprofilePictureError("url is required");
      isValid = false;
    }
    return isValid;
  };


  const handleClick = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      // class="Form"
      >
        {/* <Grid item xs={12} display={{ xs: "none", sm: "block" }}>
        <Typography sx={{color: "white", fontFamily: "'Poppins', sans serif", fontSize: "3em", fontWeight: "700"}}>
          RecycleJourney
        </Typography>
      </Grid>
      <Grid item xs={12} display={{ xs: "block", sm: "none" }}>
      <Typography sx={{color: "white", fontFamily: "'Poppins', sans serif", fontSize: "3em", fontWeight: "700"}}>
          RecycleJourney
        </Typography>
      </Grid> */}

        <Grid
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          display={{ xs: "none", sm: "block" }}
        >
          <Box class="RegisBox">
            <Box class="closeregis">
              <nav>
                <NavLink replace to="/" className="inactive-link">
                  {({ isActive }) =>
                    isActive ? (
                      <p className="active-link">Home</p>
                    ) : (
                      <button class="closeButton">
                        <Box class="closeIcon">
                          <ArrowBackRoundedIcon />
                        </Box>
                      </button>
                    )
                  }
                </NavLink>
              </nav>
            </Box>

            <div className="flexForRegis">
              <div className="leftSide">
                <Box
                  class="RegisProfile"
                  component='img'
                  alt="Logo"
                  src={profile_picture}
                />
                <Button onClick={handleOpenModal}>
                  <AddCircleIcon sx={{ color: "#1B3C76", fontSize: "30px", position: "absolute", bottom: "70px", left: "90px" }} />
                </Button>
                <Box class="Regisnav">
                  <button class="SignupBut" onClick={handleSubmit}>
                    Sign up
                  </button>
                </Box>

                <Box class="noacc directtologin" onClick={handleClick}>
                  <Typography variant="p" class="goToLogin">
                    Already have an account?
                  </Typography>
                </Box>
              </div>
              <div className="rightSide">
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    // class="InputForm pass"
                    id="input-with-sx"
                    label="Fullname"
                    type={"text"}
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    error={fullnameError !== ""}
                    helperText={fullnameError}
                    sx={{ width: "250px", marginBottom: "20px" }}
                    variant="standard"
                    required
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    // class="InputForm pass"
                    id="input-with-sx"
                    label="Lastname"
                    type={"text"}
                    value={lastname}
                    onChange={(e) => SetLastname(e.target.value)}
                    error={lastnameError !== ""}
                    helperText={lastnameError}
                    sx={{ width: "250px", marginBottom: "20px" }}
                    variant="standard"
                    required
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    // class="InputForm pass"
                    id="input-with-sx"
                    label="Company / Organization"
                    type={"text"}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    error={companyError !== ""}
                    helperText={companyError}
                    sx={{ width: "250px", marginBottom: "20px" }}
                    variant="standard"
                    required
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    // class="InputForm mail"
                    id="input-with-sx"
                    label="Email"
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError !== ""}
                    helperText={emailError}
                    sx={{ width: "250px", marginBottom: "20px" }}
                    variant="standard"
                    required
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    // class="InputForm pass"
                    id="input-with-sx"
                    label="Password"
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError !== ""}
                    helperText={passwordError}
                    sx={{ width: "250px", marginBottom: "20px" }}
                    variant="standard"
                    required
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    // class="InputForm pass"
                    id="input-with-sx"
                    label="Telephone number"
                    type={"text"}
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    error={telError !== ""}
                    helperText={telError}
                    sx={{ width: "250px", marginBottom: "20px" }}
                    variant="standard"
                    required
                  />
                </Box>

                <FormGroup
                  sx={{ position: "relative", bottom: "-20px" }}
                >
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        id="privacyPolicyCheckbox"
                        sx={{
                          color: "action.active",
                          "&.Mui-checked": {
                            color: "#1B3C76",
                          },
                        }}
                      />
                    }
                    label="Agree to privacy policies"
                  />
                </FormGroup>
              </div>
            </div>

          </Box>
        </Grid>

        {/* <Grid
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        display={{ xs: "block", sm: "none" }}
      >
        <Box class="RegisBox1">
          <Box class="closeregis1">
            <nav>
              <NavLink replace to="/" className="inactive-link">
                {({ isActive }) =>
                  isActive ? (
                    <p className="active-link">Home</p>
                  ) : (
                    <button class="closeButton">
                      <Box class="closeIcon">
                        <ArrowBackRoundedIcon />
                      </Box>
                    </button>
                  )
                }
              </NavLink>
            </nav>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Person2OutlinedIcon
              sx={{
                position: "relative",
                bottom: "70px",
                color: "action.active",
                mr: 1,
                my: 0.5,
              }}
            />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Username"
              type={"text"}
              // value={email}
              sx={{ width: "200px", position: "relative", bottom: "75px" }}
              variant="standard"
              required
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <MailOutlineRoundedIcon
              sx={{
                position: "relative",
                bottom: "40px",
                color: "action.active",
                mr: 1,
                my: 0.5,
              }}
            />
            <TextField
              // class="InputForm mail"
              id="input-with-sx"
              label="Email"
              type={"email"}
              // value={email}
              sx={{ width: "200px", position: "relative", bottom: "45px" }}
              variant="standard"
              required
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockOutlinedIcon
              sx={{
                position: "relative",
                bottom: "10px",
                color: "action.active",
                mr: 1,
                my: 0.5,
              }}
            />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Password"
              type={"password"}
              // value={email}
              sx={{ width: "200px", position: "relative", bottom: "15px" }}
              variant="standard"
              required
            />
          </Box>

          <FormGroup sx={{ position: "relative", bottom: "-20px" }}>
            <FormControlLabel
              required
              control={
                <Checkbox
                  id="privacyPolicyCheckbox"
                  sx={{
                    color: "action.active",
                    "&.Mui-checked": {
                      color: "#7560A2",
                    },
                  }}
                />
              }
              label="Agree to term and policies"
            />
          </FormGroup>

          <Box class="Regisnav">
            <button class="loginBut" onClick={handleSubmit}>
              Signup
            </button>
          </Box>

          <Box class="noacc directtologin" onClick={handleClick}>
            <Typography variant="p" class="RegisText">
              Already have an account?
            </Typography>
          </Box>
        </Box>
      </Grid> */}
      </Grid>
      <Modal open={open} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', p: 4, width: 400, borderRadius: "20px" }}>
          <TextField
            label="Profile Picture URL"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            error={profilePictureError !== ''}
            helperText={profilePictureError}
            // onChange={handleProfilePictureChange} 
            fullWidth />
          <Button onClick={handleSubmitPicture}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Register;
