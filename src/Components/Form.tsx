import React from "react";
import {
  Box,
  TextField as MuiTextField,
  Button,
  Typography,
} from "@mui/material";

interface FormField {
  name: string;
  label: string;
  type: string;
}

interface FormProps {
  title: string;
  fields: FormField[];
  onSubmit: Function;
}

const Form = (props: FormProps) => {
  const [formData, setFormData] = React.useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    //e.preventDefault();
    //onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "30vw",
        height: "90vh",
        backgroundColor: "#FFFFFF",
        borderRadius: "24px"
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontFamily={'"Roboto"'}
        fontWeight={700}
        position={"relative"}
        top={"8vh"}
      >
        {props.title}
      </Typography>
      {props.fields.map((field) => (
        <MuiTextField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          variant="outlined"
          fullWidth
          sx={{ position: "relative", top: "15vh" }}
          margin="normal"
          onChange={handleChange}
        />
      ))}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ position: "relative", top: "20vh" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
