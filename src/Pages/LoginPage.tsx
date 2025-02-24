import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import backgroundImage from "../assets/background.jfif"; // Replace with your actual image

const inputFields = [
  { placeholder: "virajdhimmar@gmail.com", type: "email" },
  { placeholder: "pass123456", type: "password" },
];

const LoginPage = () => {
  return (
    <Grid
      container
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left Side (Text Section) */}
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          padding: "5vw",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            myCampus.com
          </Typography>
          <Typography variant="h3" fontWeight={700} mt={3}>
            ONE PLATFORM <br /> FOR ALL <br /> PLACEMENT NEEDS
          </Typography>
          <Typography variant="body1" mt={2} sx={{ maxWidth: "450px", opacity: 0.9 }}>
            A single platform for students, colleges, and recruiters. Simplified job postings, 
            easy applications, and a smooth placement experience for everyone.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side (Login Form, No Background) */}
      <Grid
        item
        xs={6}
        sx={{
          display:"flex",
          alignItems: "right",
          justifyContent: "right",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            p: 4,
            borderRadius: 3,
            backgroundColor: "white", // Solid White Background
            boxShadow: 3, // Adds a slight shadow
            textAlign: "center",
            color: "black",
            marginRight:2,
            minHeight:"400px",
          }}
        >
          {/* Heading */}
          <Typography variant="h5" mt={7} fontWeight={700}>
            Welcome back!
          </Typography>
          <Typography variant="body2" mt={1} mb={6.5} sx={{ opacity: 0.8 }}>
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
            />
          ))}

          {/* Forgot Password */}
          <Typography
            variant="body2"
            textAlign="right"
            sx={{ mt: 1, cursor: "pointer", color: "white" }}
          >
            Forgot password?
          </Typography>

          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: "16px",
              borderRadius: "8px",
              bgcolor: "black",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Log in
          </Button>

          {/* Divider */}
          <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.5)" }}>or sign in with</Divider>

          {/* LinkedIn Login Button */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              py: 1.5,
              fontSize: "16px",
              borderRadius: "8px",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              width="20"
              style={{ marginRight: "8px" }}
            />
            LinkedIn
          </Button>

          {/* Signup Option */}
          <Typography variant="body2" sx={{ mt: 12 }}>
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
