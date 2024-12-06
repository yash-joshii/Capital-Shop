import React from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  return (
    <Container
      sx={{
        overflow: "hidden",
        padding: {
          xs: "0px",
          sm: "0px",
          md: "0px",
          lg: "0px",
        },
        maxWidth: {
          xs: "100%",
          sm: "false",
          md: "100%",
          lg: "100%",
        },
        background: "#fff",
        margin: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          p: "40px",
          width: "40%",
          aspectRatio: "6 / 5",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: "7%" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: 600,
              fontSize: "30px",
              fontFamily: "Jost, serif",
              textAlign: "center",
              mb: "10%",
            }}
          >
            Login
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              fontFamily: "Jost, serif",
            }}
          >
            Enter login details to get access
          </Typography>
        </Box>
        <Box>
          <Formik
            initialValues={{ email: "", password: "", rememberMe: false }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "38vw",
                    margin: "auto",
                  }}
                >
                  {/* Username / Email Field */}
                  <Grid container spacing={2}>
                    <Grid size={12}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          fontFamily: "Jost, serif",
                        }}
                      >
                        Username Or Email Address
                      </Typography>
                      <Field
                        as={TextField}
                        label="Username / Email address"
                        name="email"
                        variant="outlined"
                        fullWidth
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        sx={{
                          width: "100%",
                          fontWeight: 400,
                          fontSize: "16px",
                          fontFamily: "Jost, serif",
                        }}
                      />
                    </Grid>
                    <Grid size={12}>
                      {/* Password Field */}
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          fontSize: "16px",
                          fontFamily: "Jost, serif",
                        }}
                      >
                        Password
                      </Typography>

                      <Field
                        as={TextField}
                        label="Enter Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        sx={{ marginBottom: "20px", width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "5%",
                    }}
                  >
                    {/* Keep Me Logged In Checkbox */}
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          name="rememberMe"
                          sx={{
                              fontWeight: 400,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                            "&.Mui-checked": {
                              color: "red",
                            },
                          }}
                          checked={values.rememberMe}
                          onChange={handleChange}
                        />
                      }
                    
                      label="Keep Me Logged In"
                    />

                    {/* Forgot Password */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        component={Link}
                        to=""
                        sx={{
                          color: "red",
                          fontWeight: 400,
                          fontSize: "16px",
                          fontFamily: "Jost, serif",
                          textDecoration: "none",
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 400,
                          fontFamily: "Jost, serif",
                        }}
                      >
                        Don't have an account?
                      </Typography>

                      <Typography
                        component={Link}
                        to="/signup"
                        sx={{
                          color: "red",
                          fontWeight: 400,
                          fontSize: "16px",
                          fontFamily: "Jost, serif",
                          textDecoration: "none",
                        }}
                      >
                        Sign Up
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 400,
                          fontFamily: "Jost, serif",
                        }}
                      >
                        here
                      </Typography>
                    </Box>
                    {/* Submit Button */}
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{
                        marginTop: "20px",
                        background: "red",
                        borderRadius: "0px",
                      }}
                    >
                      login
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
