import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  InputAdornment,
} from "@mui/material";
import backgroundImage from "../assets/background.jfif"; // Replace with your actual image
import linkedinLogo from "../assets/linkedin.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const inputFields = [
  { placeholder: "virajdhimmar@gmail.com", type: "email" },
  { placeholder: "pass123456", type: "password" },
];

const LoginPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid
      container
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflowY: "auto",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      {/* Left Side (Text Section) */}
      {!isSmallScreen && (
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            padding: isSmallScreen ? "10vw" : "5vw",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          <Box sx={{ maxWidth: isSmallScreen ? "90%" : "500px" }}>
            <Typography variant="h4" fontWeight={700}>
              myCampus.com
            </Typography>
            <Typography variant="h3" fontWeight={700} mt={3}>
              ONE PLATFORM <br /> FOR ALL <br /> PLACEMENT NEEDS
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              sx={{ maxWidth: "450px", opacity: 0.9 }}
            >
              A single platform for students, colleges, and recruiters.
              Simplified job postings, easy applications, and a smooth placement
              experience for everyone.
            </Typography>
          </Box>
        </Grid>
      )}

      {/* Right Side (Login Form, No Background) */}
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: { xs: "90vw", sm: "80vw", md: "40vw" }, // Responsive width
            aspectRatio: "3 / 4", // Keeps form proportional
            padding: "4vw",
            borderRadius: 3,
            backgroundColor: "white",
            boxShadow: 3,
            textAlign: "center",
            color: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ml: { xs: 0, md: "14vw" }, // Adjusts margin left
            mr: { xs: 0, md: "2vw" }, // Adds slight right margin
            p: { xs: 2, md: 4 },
          }}
        >
          {/* Heading */}
          <Typography variant="h4" mt={7} fontWeight={700}>
            Welcome back!
          </Typography>
          <Typography variant="body2" mt={1} mb={12} sx={{ opacity: 0.5 }}>
            Description should be displayed here!
          </Typography>

          {inputFields.map((field, index) => (
            <TextField
              key={index}
              fullWidth
              placeholder={field.placeholder}
              type={field.type}
              variant="outlined"
              margin="normal"
              sx={{ maxWidth: "85%", height: "30px", mb: 1 }} // Reduced width & height
              InputProps={{
                sx: { height: "40px" },
                startAdornment: (
                  <InputAdornment position="start">
                    {field.type === "email" ? <EmailIcon /> : <LockIcon />}
                  </InputAdornment>
                ),
              }}
            />
          ))}

          {/* Forgot Password */}
          <Typography
            variant="body2"
            textAlign="right"
            sx={{
              mt: 1,
              mr: "10%",
              textAlign: "right",
              cursor: "pointer",
              color: "black",
            }}
          >
            Forgot password?
          </Typography>

          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              maxWidth: "85%", // Same width as text boxes
              height: "30px", // Same height as text boxes
              mt: 2,
              py: 1.5,
              borderRadius: "8px",
              bgcolor: "black",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Log in
          </Button>

          {/* Divider */}
          <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.5)" }}>
            or sign in with
          </Divider>

          {/* LinkedIn Login Button */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              maxWidth: "85%", // Same width as text boxes
              height: "30px", // Same height as text boxes
              py: 1.5,
              fontSize: "16px",
              borderRadius: "8px",
            }}
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              width="20"
              style={{ marginRight: "8px" }}
            />
            LinkedIn
          </Button>

          {/* Signup Option */}
          <Typography variant="body2" sx={{ mt: 18 }}>
            Don't have an account?{" "}
            <span
              style={{
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Sign up
            </span>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
