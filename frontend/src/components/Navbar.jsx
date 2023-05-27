import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  IconButton,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import Logo from "../assets/RecycleJourney2.svg";
import GlobalContext from "../share/GlobalContext";
import Cookies from "js-cookie";

const Navbar = ({ isAuthenticated, accountName }) => {
  const isTabletMobile = useMediaQuery("(max-width: 1075px)");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const { user, setUser } = useContext(GlobalContext)
  const { isAuthorize, setIsAuthorize } = useContext(GlobalContext)

  console.log(user)
  console.log(isAuthorize)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    Cookies.remove('userToken');
    // setIsAuthorize(false)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ backgroundColor: "transparent" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "600" }}
          id="LogoName"
        >
          RecycleJourney
        </Typography>
        {isTabletMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              PaperProps={{
                sx: { width: "275px", backgroundColor: "#8FBDD3" },
              }}
            >
              <div
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Button
                  id="button1D"
                  component={Link}
                  to="/"
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ width: "100%" }}
                >
                  Home
                </Button>
                <Button
                  id="button2D"
                  component={Link}
                  to="/cal-event"
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ width: "100%" }}
                >
                  Calculate / Events
                </Button>
                {isAuthorize ? (
                  <div>
                    <Button
                      id="button4D"
                      component={Link}
                      to="/profile"
                      color="inherit"
                      onClick={handleDrawerToggle}
                      sx={{ width: "100%" }}
                    >
                      Profile
                    </Button>
                    <Typography>{user}</Typography>
                    <Button
                      id="button3"
                      color="inherit"
                      onClick={handleLogout}
                      sx={{ width: "90%" }}
                    >
                      Log out
                    </Button>
                  </div>
                ) : (
                  <Button
                    id="button3"
                    component={Link}
                    to="/auth"
                    color="inherit"
                    onClick={handleDrawerToggle}
                    sx={{ width: "90%" }}
                  >
                    Sign in
                  </Button>
                )}
              </div>
            </Drawer>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button id="button1" component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button
              id="button2"
              component={Link}
              to="/cal-event"
              color="inherit"
            >
              Calculate / Events
            </Button>
            {isAuthorize ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                  id="button4"
                  component={Link}
                  to="/profile"
                  color="inherit"
                  sx={{ marginRight: "10px" }}
                >
                  Profile
                </Button>
                <Typography>{user}</Typography>
                <Button
                  id="button3"
                  color="inherit"
                  onClick={handleLogout}
                  sx={{ marginLeft: "10px" }}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Button
                id="button3"
                component={Link}
                to="/auth"
                color="inherit"
                sx={{ marginLeft: "10px" }}
              >
                Sign in
              </Button>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
