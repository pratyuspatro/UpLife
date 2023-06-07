import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo_transparent.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  return (
    /* <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          UpLife
        </Typography>
      </Box>

      <Box 
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to UpLife, the Social Media for productive!
        </Typography>
        <Form />
      </Box>
      <Box
       width="100%"
       backgroundColor={theme.palette.background.alt}
       p="1rem 6%"
       textAlign="center"
     >*/
    <Box>
      <Box sx={{ flexGrow: 1 }} color={theme.palette.primary.main}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h2"
              color="textSecondary"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              UpLife
            </Typography>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button color="inherit" onClick={() => navigate("/admin")}>
              Admin Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        display="flex"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        alignItems="center"
        justifyContent="center"
        p={3}
      >
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={2}
        >
          <Typography variant="h2" fontWeight="bold" mb={2}>
            Welcome to UpLife
          </Typography>
          <Typography variant="body1" textAlign="center" mb={2}>
            Connect with people, discover stories, and explore a wide range of
            content shared by other users.
          </Typography>
        </Box>

        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={logo}
            alt="Social Media"
            style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
          />
        </Box>
      </Box>
      {/* <Box
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={2}
      >
      <Form />
      </Box>
    </Box> */}
      <footer>
        <Box
          width="100%"
          bgcolor={theme.palette.primary.main}
          py={2}
          textAlign="center"
        >
          <Typography variant="body2" color="textSecondary">
            &copy; 2023 Uplife. All rights reserved.
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};

export default LoginPage;
