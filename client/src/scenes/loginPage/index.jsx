import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import logo from "../../images/logo_transparent.png";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
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
      {/* Header */}
      <Box
        width="100%"
        bgcolor={theme.palette.primary.main}
        py={2}
        textAlign="center"
      >
        <Typography variant="h2" color="textSecondary">
          UpLife
        </Typography>
      </Box>

      {/* Content */}
      <Box
        display="flex"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        alignItems="center"
        justifyContent="center"
        p={3}
      >
        {/* Left section */}
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

        {/* Image section */}
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

        {/* Right section */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={2}
        >
          <Form />
        </Box>
      </Box>

      {/* Footer */}
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
    </Box>
    //</Box>
    //</Box>
  );
};

export default LoginPage;
