import React from "react";
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

const Navbar = ({ isAuthenticated, accountName }) => {
  const isTabletMobile = useMediaQuery("(max-width: 1075px)");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#2C2639", boxShadow: "none" }}
    >
      <Toolbar sx={{ backgroundColor: "transparent" }}>
        {/* <Box
          component="img"
          sx={{
            width: 306,
            marginTop: "150px",
            display: { xs: "inline-block", md: "none" },
          }}
          alt="Logo"
          src="../assets/Logo.png"
        /> */}
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
                  sx={{ width: "100%" }} // Set the width to 100%
                >
                  Home
                </Button>
                <Button
                  id="button2D"
                  component={Link}
                  to="/cal-event"
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ width: "100%" }} // Set the width to 100%
                >
                  Calculate / Events
                </Button>
                <Button
                  id="button3D"
                  component={Link}
                  to="/auth"
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ width: "100%" }} // Set the width to 100%
                >
                  {isAuthenticated ? accountName : "Sign In"}
                </Button>
              </div>
            </Drawer>
          </>
        ) : (
          <div>
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
            <Button id="button3" component={Link} to="/auth" color="inherit">
              {isAuthenticated ? accountName : "Sign In"}
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
