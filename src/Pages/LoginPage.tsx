import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Form from "../Components/Form";
import backgroundImage from "../assets/background.jfif";

const LoginPage = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{marginLeft: "5vw", marginBottom: "8vh"}}>
          <Typography
            width="90%" 
            variant="h3"
            fontWeight={700}
            align="left"
            gutterBottom
            fontFamily={"'Roboto'"}
          >
            START YOUR JOURNEY WITH US
          </Typography>
        </Box>
      </Grid>

      <Grid item={true} xs={4} />
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: "1.5vw" }}>
          <Form
            title="Welcome back!"
            fields={[
              { name: "email", label: "Email", type: "email" },
              { name: "password", label: "Password", type: "password" },
            ]}
            onSubmit={(data: { [key: string]: any }) => {
              console.log(data);
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
