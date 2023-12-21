// Import necessary dependencies
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

// Create a default theme
const defaultTheme = createTheme();

// Define the SignIn component
const SignIn = () => {
  // Use Formik for form management
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Validation schema using Yup
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    // Handle form submission
    onSubmit: (values) => {
      console.log(values); // Placeholder for handling form submission
    },
  });

  // Render the component
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Enter your credentials to sign in.
            <Link to="/" variant="body2" style={{ color: "black" }}>
              <CloseIcon />
            </Link>
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              type="password"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              {...formik.getFieldProps("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize",
                  backgroundColor: "black",
                }}
              >
                Continue
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
