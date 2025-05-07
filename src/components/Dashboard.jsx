import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
     <AppBar
  position="static"
  elevation={0}
  sx={{
    backgroundColor: "rgba(232, 232, 232, 0.09)", // semi-transparent white
    backdropFilter: "blur(10px)", // blur effect
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // subtle shadow
  }}
>
  <Toolbar>
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        fontWeight: 600,
        color: "black",
        display: "flex",
        alignItems: "center",
      }}
    >
      Todo-App
    </Typography>

    <Button
      variant="contained"
      component={RouterLink}
      to="/login"
      sx={{
        bgcolor: "black",
        borderRadius: "20px",
        px: 3,
        textTransform: "none",
        fontWeight: 600,
        "&:hover": {
          bgcolor: "#c33c30",
        },
      }}
    >
      Login
    </Button>
  </Toolbar>
</AppBar>

<Container maxWidth="lg">
  <Grid
    container
    spacing={4}
    sx={{
      mt: 12,
      height: "500px", // or any height you prefer
    }}
    
  >
    {/* Left: Text Section */}
    <Grid item xs={12} md={6} sx={{ height: "100%" , display: "flex", justifyContent: "space-between"}}>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 600, color: "#DB4C3F" }}
          gutterBottom
        >
          Clarity, finally.
        </Typography>
        <Typography variant="body1" sx={{  fontWeight:"700" }}>
          Join millions simplifying work and life with your own{" "}
          <span style={{ color: "#DB4C3F" }}>to-do app.</span>
        </Typography>
        <Typography sx={{fontWeight:"700"}}>
        Stay organized, Stay focused, Your day, your goals, made clear     ....!! 


        </Typography>
      </Box>
    </Grid>

    {/* Right: Image Section */}
    <Grid item xs={12} md={6} sx={{ height: "100%" }}>
      <Box
        component="img"
        src="https://i.pinimg.com/736x/c6/91/ad/c691ad5a68080a04f82eb41e00723a23.jpg"
        alt="Todo App Illustration"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </Grid>
  </Grid>
</Container>

    </Box>
  );
}

export default Dashboard;
