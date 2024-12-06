import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import Grid from "@mui/material/Grid2";
function Footer() {
  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        padding: "0 !important",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "0px 0",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            fontFamily: '"Jost", sans-serif',
          }}
        >
          <Box
            className="footer-newlettersection"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "120%",
              borderBottom: "1px solid #5f5d5d",
              borderImageSlice: 1,
              padding: {
                xs: "9px",
                sm: "30px",
                md: "40px",
                lg: "50px",
              },
            }}
          >
            <Grid container spacing={1} sx={{ width: "87%" }}>
              <Grid
                size={{ xs: 12, md: 12, lg: 4 }}
                sx={{
                  display: "flex",
                  justifyContent: {
                    md: "flex-start",
                    lg: "center",
                  },
                }}
              >
                <Box className="newlettertitle">
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      textAlign: "left",
                      fontWeight: "700",
                      mb: "10px",
                    }}
                  >
                    Subscribe Newsletter
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: '"Jost", sans-serif' }}
                  >
                    Subscribe newsletter to get 5% on all products.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 12, lg: 4 }}
                sx={{
                  width: {
                    xs: "92%",
                    sm: "50%%",
                    md: "100%",
                    lg: "35%",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "0px",
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Enter your email"
                    sx={{
                      width: "300px",
                      background: "#fff",
                      borderRadius: "5px",
                      marginRight: "10px",
                      fontFamily: '"Jost", sans-serif',
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#e63946",
                      "&:hover": { backgroundColor: "#d62839" },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 12, lg: 4 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  width: {
                    xs: "30% !important",
                    sm: "19% !important",
                    md: "11% !important",
                    lg: "15% !important",
                  },
                }}
              >
                <Box
                  className="footer-social"
                  sx={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <FacebookIcon
                    fontSize="large"
                    sx={{
                      color: "#708090",
                      transition: "transform 0.6s, color 0.6s",
                      "&:hover": {
                        transform: "scaleX(-1)",
                        color: "red",
                      },
                    }}
                  />
                  <InstagramIcon
                    fontSize="large"
                    sx={{
                      color: "#708090",
                      transition: "transform 0.6s, color 0.6s",
                      "&:hover": {
                        transform: "scaleX(-1)",
                        color: "red",
                      },
                    }}
                  />
                  <YouTubeIcon
                    fontSize="large"
                    sx={{
                      color: "#708090",
                      transition: "transform 0.6s, color 0.6s",
                      "&:hover": {
                        transform: "scaleX(-1)",
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          className="footer-middlesection"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "45px",
            borderBottom: "1px solid #5f5d5d",
            borderImageSlice: 1,
            flexDirection: "column",
            width: "126%",
          }}
        >
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: 0,
              margin: 0,
            }}
          >
            <Grid
              size={{ xs: 12, sm: 12, md: 3, lg: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                // width:'15% !important',
              }}
            >
              <Box
                className="footer-logo"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  // width:'15% !important',
                }}
              >
                <img
                  src={"/images/logo2_footer.png.png"}
                  alt="Logo"
                  style={{ height: "50px", cursor: "pointer" }}
                />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 9, lg: 9 }}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                // width:'15% !important',
              }}
            >
              <Grid
                container
                spacing={1}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: 0,
                  margin: 0,
                  width: "80%",
                }}
              >
                <Box sx={{ fontFamily: '"Jost", sans-serif' }}>
                  <List>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        color: "white",
                        fontSize: "20px",
                        fontWeight: 400,
                      }}
                    >
                      Shop Men
                    </Typography>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Clothing Fashion
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Winter
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Summer
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Formal
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Casual
                    </ListItem>
                  </List>
                </Box>
                <Box sx={{ fontFamily: '"Jost", sans-serif' }}>
                  <List>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        color: "white",
                        fontSize: "20px",
                        fontWeight: 400,
                      }}
                    >
                      Shop Women
                    </Typography>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Clothing Fashion
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Winter
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Summer
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Formal
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Casual
                    </ListItem>
                  </List>
                </Box>
                <Box sx={{ fontFamily: '"Jost", sans-serif' }}>
                  <List>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        color: "white",
                        fontSize: "20px",
                        fontWeight: 400,
                      }}
                    >
                      Baby Collection
                    </Typography>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Clothing Fashion
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Winter
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Summer
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Formal
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Casual
                    </ListItem>
                  </List>
                </Box>
                <Box sx={{ fontFamily: '"Jost", sans-serif' }}>
                  <List>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        color: "white",
                        fontSize: "20px",
                        fontWeight: 400,
                      }}
                    >
                      Quick Links
                    </Typography>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Clothing Fashion
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Winter
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Summer
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Formal
                    </ListItem>
                    <ListItem
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#696969",
                        lineHeight: 2.5,
                        listStyleType: "none",
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      Casual
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          className="footer-lowersection"
          sx={{
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontFamily: '"Jost", sans-serif',
            }}
          >
            <Box
              className="lowersection-leftside"
              sx={{
                fontFamily: '"Jost", sans-serif',
              }}
            >
              <p>Copyright &copy;2024 All rights reserved</p>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
