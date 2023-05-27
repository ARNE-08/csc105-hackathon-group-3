import React from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState, useContext } from "react";
import GlobalContext from '../share/GlobalContext';

import { AxiosError } from "axios";
import Axios from "../share/AxiosInstance";

function Login({ setIsLogin }) {
  const { user, setUser } = useContext(GlobalContext);
  const { status, setStatus } = useContext(GlobalContext);

  const [username, setusername] = useState('')
  const [usernameError, setusernameError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      const response = await Axios.post('/login', {
        username,
        password,
      });
      // console.log(response.data.success)
      if (response.data.success) {
        setUser(true);
        setStatus({
          msg: 'Login successful',
          severity: 'success'
        });
        navigate('/home');
        // navigateToHome();
      }
    } catch (e) {
      setusername('');
      setPassword('');
      if (e instanceof AxiosError) {
        if (e.response)
          return setStatus({
            msg: e.response.data.error,
            severity: 'error',
          });
      }
      return setStatus({
        msg: e.message,
        severity: 'error',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!username) {
      setusernameError('Username is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    return isValid;
  };

  const handleClick = () => {
    setIsLogin(false)
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    // class="Form"
    >
      <Grid item xs={12} display={{ xs: "none", sm: "block" }}>
        <Box
          component="img"
          sx={{
            width: '525px',
          }}
        //   alt="Logo"
        //   src="/src/assets/LOGO-plannerableStraight.png"
        />
      </Grid>
      <Grid item xs={12} display={{ xs: "block", sm: "none" }}>
        <Box
          component="img"
          sx={{
            width: '80%',
          }}
        //   alt="Logo"
        //   src="/src/assets/LOGO-plannerableStraight.png"
        />
      </Grid>
      <Grid item xs={12} justifyContent="center"
        alignItems="center" display={{ xs: "none", sm: "block" }}>
        <Box class="FormBox">
          <Box class="closenav">
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

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailOutlineRoundedIcon sx={{ position: 'relative', bottom: '45px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm mail"
              id="input-with-sx"
              label="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              error={usernameError !== ''}
              helperText={usernameError}

              sx={{ width: '250px', position: 'relative', bottom: '50px' }}
              variant="standard"
              required />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockOutlinedIcon sx={{ position: 'relative', bottom: '15px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError !== ''}
              helperText={passwordError}

              sx={{ width: '250px', position: 'relative', bottom: '20px' }}
              variant="standard"
              required
            />
          </Box>

          <Box class="Loginnav">
            <button class="loginBut" onClick={handleSubmit}>Login</button>
          </Box>

          <Box class='noacc' onClick={handleClick}>
            <Typography variant="p" class="RegisText">
              Don't have an account?
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} justifyContent="center"
        alignItems="center" display={{ xs: "block", sm: "none" }}>
        <Box class="FormBox1">
          <Box class="closenav1">
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

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailOutlineRoundedIcon sx={{ position: 'relative', bottom: '55px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm mail"
              id="input-with-sx"
              label="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              error={usernameError !== ''}
              helperText={usernameError}
              // value={email}
              sx={{ width: '200px', position: 'relative', bottom: '60px' }}
              variant="standard"
              required />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockOutlinedIcon sx={{ position: 'relative', bottom: '25px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError !== ''}
              helperText={passwordError}
              // value={email}
              sx={{ width: '200px', position: 'relative', bottom: '30px' }}
              variant="standard"
              required
            />
          </Box>

          <Box class="Loginnav">
            <button class="loginBut" onClick={handleSubmit}>Login</button>
          </Box>

          <Box class='noacc' onClick={handleClick}>
            <Typography variant="p" class="RegisText">
              Don't have an account?
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;