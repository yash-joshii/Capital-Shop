import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CheckIcon from "@mui/icons-material/Check";

function Signup() {
  const [participants, setParticipants] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [price, setPrice] = useState({
    currency: "AUD",
    oldPrice: "40",
    newPrice: "33",
  });
  const [activeCurrency, setActiveCurrency] = useState("AUD");
  const handleCurrencyChange = (currency) => {
    const prices = {
      USD: { oldPrice: "50", newPrice: "30" },
      MXN: { oldPrice: "65", newPrice: "25" },
      GBP: { oldPrice: "68", newPrice: "28" },
      EUR: { oldPrice: "79", newPrice: "29" },
      CAD: { oldPrice: "41", newPrice: "31" },
      AUD: { oldPrice: "83", newPrice: "33" },
      BRL: { oldPrice: "42", newPrice: "32" },
    };

    setPrice({ currency, ...prices[currency] });
    setActiveCurrency(currency);
  };
  const handleChange = (event) => {
    setParticipants(event.target.value);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const card = (
    <React.Fragment>
      <Box sx={{ padding: "15px" }}>
        <Box>
          <Typography variant="h6" sx={{ fontSize: "20px", fontWeight: 500 }}>
            Basic
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body2"
            sx={{ mt: 1, color: "#666666", fontSize: "16px" }}
          >
            Host engaging webinars with a flexible, pay-as-you-go plan that fits
            your business.
          </Typography>

          {/* Starting Price */}
          <Typography
            variant="body2"
            sx={{ mt: 2, color: "#666666", fontSize: "14px" }}
          >
            Starting at...
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mt={1}>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              mr: 1,
              fontSize: "30px",
              fontWeight: 700,
              color: "#666666",
            }}
          >
            {price.currency}
            {price.newPrice}
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            {price.currency}
            {price.newPrice}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="caption"
            sx={{ mt: 1, color: "#666666", fontSize: "14px" }}
          >
            <Box component="span" sx={{ display: "block" }}>
              /organizer per month (billed annually) +
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              $149/event
            </Box>
          </Typography>
          <Typography
            variant="caption"
            sx={{ mt: 1, color: "#666666", fontSize: "14px" }}
          >
            <Box component="span" sx={{ display: "block" }}>
              Pay for only the webinars you host
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              5 channel pages
            </Box>
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: "#1fb71f", fontWeight: 300, fontSize: "14px" }}
          >
            Save -43%
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", margin: "10%" }}>
          <Button
            variant="contained"
            sx={{
              fontSize: "1rem",
              padding: "0.8em 2em",
              backgroundColor: "#000",

              borderLeft: "3px solid yellow",
              borderBottom: "3px solid yellow",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "bolder",
              transition:
                "transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              boxShadow: "-1px 1px 0px 0px yellow",
              "&:hover": {
                backgroundColor: "#000",
                transform: "translate(5px, -5px)",
                boxShadow: "-2px 2px 0px 0px yellow",
              },
            }}
          >
            Buy Now
          </Button>
        </Box>

        <Box>
          <Typography variant="body2" fontWeight="bold">
            Everything in Phone System and CX plus:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, display: "flex", alignItems: "center", gap: "3px" }}
          >
            <CheckIcon color="success" /> AI Chat Analysis, supervisor
            analytics, real-time and historical reports
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, display: "flex", alignItems: "center", gap: "3px" }}
          >
            <CheckIcon color="success" /> Agent dashboard and softphone
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, display: "flex", alignItems: "center", gap: "3px" }}
          >
            <CheckIcon color="success" /> Skills assignment, tag and priority
            management
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, display: "flex", alignItems: "center", gap: "3px" }}
          >
            <CheckIcon color="success" /> Call wrap up, auto queue callback and
            auto dialer
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, display: "flex", alignItems: "center", gap: "3px" }}
          >
            <CheckIcon color="success" /> Monitor and coach agents, co-browsing,
            call dispositions
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );

  return (
    <Container
      sx={{
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
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, sm: 1, md: 1, lg: 1 }}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
              },
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                },
                "@media (max-width: 991px)": {
                  display: "none",
                },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 0,
                color: "#000000",
                marginLeft: "0%",
                paddingTop: "1%",
                marginTop: "70%",
              }}
            >
              {["USD", "MXN", "GBP", "EUR", "CAD", "AUD", "BRL"].map(
                (currency) => (
                  <Button
                    key={currency}
                    color="inherit"
                    component="div"
                    onClick={() => handleCurrencyChange(currency)}
                    sx={{
                      border: "1px solid #d3d3d3",
                      borderRadius: "0px",
                      p: "10%",

                      fontWeight: 550,
                      color: "#000000",
                      backgroundColor:
                        activeCurrency === currency ? "yellow" : "transparent",
                      "&:hover": { backgroundColor: "yellow" },
                    }}
                  >
                    {currency}
                  </Button>
                )
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 11, md: 11, lg: 11 }}>
            <Box
              className="smdropdown"
              sx={{
                padding: "20px",
                width: "100%",
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                },

                justifyContent: "center",
              }}
            >
              <FormControl variant="outlined" sx={{ width: "35%" }}>
                <InputLabel>Currency</InputLabel>
                <Select
                  value={participants}
                  onChange={handleChange}
                  label="Currency"
                  sx={{
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e0e0e0",
                    },
                  }}
                >
                  {["USD", "MXN", "GBP", "EUR", "CAD", "AUD", "BRL"].map(
                    (currency) => (
                      <MenuItem
                        key={currency}
                        value={currency}
                        onClick={() => handleCurrencyChange(currency)}
                        sx={{
                          overflow: "hidden",
                          border: "1px solid #d3d3d3",
                          borderRadius: "0px",
                          p: "10%",
                          fontWeight: 400,
                          color: "#000000",
                          backgroundColor:
                            activeCurrency === currency
                              ? "yellow"
                              : "transparent",
                          "&:hover": { backgroundColor: "yellow" },
                        }}
                      >
                        {currency}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box
              className="price"
              sx={{
                marginTop: "4%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                className="price-title"
                sx={{
                  gap: "14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "2%",
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  Plans & pricing
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontSize: "1.3rem", textAlign: "center" }}
                >
                  Pick a plan or start free today -- no credit card required
                </Typography>
              </Box>
              <Box className="description" sx={{ width: "80%" }}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    fontWeight: "400",
                    fontSize: "1.1rem",
                    marginBottom: { xs: "17%", sm: "17%", md: "3%", lg: "3%" },
                    textAlign: "center",
                    lineHeight: "1.4",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  perferendis, quae corrupti quia error ex nesciunt reiciendis?
                  Recusandae, a! Dolor enim similique ex unde accusamus autem
                  fuga molestias placeat natus? perferendis, quae corrupti quia
                  error nesciunt
                </Typography>
              </Box>
              <Box
                className="cards"
                sx={{
                  width: "90%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  mb: "4%",
                }}
              >
                <Grid container spacing={5}>
                  <Grid
                    size={{ xs: 12, sm: 6, md: 3, lg: 4 }}
                    sx={{
                      width: {
                        xs: "95% !important",
                        sm: "44% !important",
                        md: "44% !important",
                        lg: "30% !important",
                      },
                    }}
                  >
                    <Box
                      variant="outlined"
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "30vw",
                          lg: "22vw",
                        },
                        marginLeft: {
                          xs: "3%",
                          sm: "3%",
                          md: "0%",
                          lg: "0%",
                        },
                        padding: 3,
                        border: "1px solid #e0e0e0",
                        borderRadius: "4px",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "40px",
                          background: "yellow",
                          padding: "2%",
                          position: "absolute",
                          top: "-5%",
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "#000000",
                            fontWeight: "550",
                            textAlign: "center",
                          }}
                        >
                          Most Popular in Region
                        </Typography>
                      </Box>
                      <Box sx={{ width: "100%", textAlign: "left" }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "500",
                            textAlign: "left",
                            mb: "5%",
                          }}
                        >
                          Grouped Product Plan
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "#666666",
                            fontWeight: "550",
                            textAlign: "left",
                          }}
                        >
                          Select participants
                        </Typography>
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel>500-800</InputLabel>
                          <Select
                            value={participants}
                            onChange={handleChange}
                            label="500-800"
                            sx={{
                              borderRadius: "4px",
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#e0e0e0",
                              },
                            }}
                          >
                            <MenuItem value="500-800">500-800</MenuItem>
                            <MenuItem value="800-1000">800-1000</MenuItem>
                            <MenuItem value="1000-1500">1000-1500</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "10%",
                          position: "relative",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            fontSize: "1rem",
                            padding: "0.8em 2em",
                            backgroundColor: "#000",

                            borderLeft: "3px solid yellow",
                            borderBottom: "3px solid yellow",
                            borderRadius: "10px",
                            color: "#fff",
                            fontWeight: "bolder",
                            transition:
                              "transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                            boxShadow: "-1px 1px 0px 0px yellow",
                            "&:hover": {
                              backgroundColor: "#000",
                              transform: "translate(5px, -5px)",
                              boxShadow: "-2px 2px 0px 0px yellow",
                            },
                          }}
                        >
                          Buy Now
                        </Button>
                      </Box>

                      {isAccordionOpen && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "12%",
                            left: 0,
                            width: "85%",
                            backgroundColor: "#fff",
                            padding: 2,
                            zIndex: 1,
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{ color: "#666666", mb: 1 }}
                          >
                            Available add-ons:
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#666666" }}>
                            Toll-Free Numbers & Call Me (provided by OpenVoice){" "}
                            <br />
                            USA=$29 & Euro=€31/month
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "#666666", mt: 1 }}
                          >
                            Toll-Free Numbers & Call Me (provided by OpenVoice){" "}
                            <br />
                            USA=$29 & Euro=€31/month
                          </Typography>
                        </Box>
                      )}
                      <Button
                        onClick={toggleAccordion}
                        sx={{
                          borderTop: "1px solid #d3d3d3",
                          mt: isAccordionOpen ? 20 : 0,
                          textTransform: "none",
                          color: "#666666",
                          fontWeight: "700",
                          width: "100%",
                          borderRadius: "0px",
                          ":hover": {
                            background: "transparent",
                          },
                        }}
                      >
                        {isAccordionOpen ? "Close Add-Ons -" : "See Add-Ons +"}
                      </Button>
                    </Box>
                  </Grid>

                  <Grid
                    size={{ xs: 12, sm: 6, md: 3, lg: 4 }}
                    sx={{
                      width: {
                        xs: "100% !important",
                        sm: "46% !important",
                        md: "50% !important",
                        lg: "30% !important",
                      },
                      marginLeft: {
                        xs: "5%",
                        sm: "5%",
                        md: "0%",
                        lg: "0%",
                      },
                      padding: {
                        xs: "0px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        width: {
                          xs: "90vw",
                          sm: "40vw",
                          md: "30vw",
                          lg: "22vw",
                        },
                        aspectRatio: {
                          xs: "1/2.3",
                          sm: "2 / 6.4",
                          md: "2 / 4.6",
                          lg: "2 / 6",
                          xl: "2 / 4.6",
                        },
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {card}
                    </Card>
                  </Grid>

                  <Grid
                    size={{ xs: 12, sm: 6, md: 3, lg: 4 }}
                    sx={{
                      width: {
                        xs: "100% !important",
                        sm: "60% !important",
                        md: "50% !important",
                        lg: "30% !important",
                      },
                      marginLeft: {
                        xs: "5%",
                        sm: "5%",
                        md: "0%",
                        lg: "0%",
                      },
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        width: {
                          xs: "90vw",
                          sm: "40vw",
                          md: "30vw",
                          lg: "22vw",
                        },
                        aspectRatio: {
                          xs: "1/2.3",
                          sm: "2 / 6.4",
                          md: "2 / 4.6",
                          lg: "2 / 6",
                          xl: "2 / 4.2",
                        },
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {card}
                    </Card>
                  </Grid>

                  <Grid
                    size={{ xs: 12, sm: 6, md: 3, lg: 12 }}
                    sx={{
                      width: {
                        xs: "0%",
                        sm: "0%",
                        md: "50% !important",
                        lg: "67% !important",
                      },
                      marginLeft: {
                        xs: "5%",
                        sm: "5%",
                        md: "0",
                        lg: "auto",
                      },
                      padding: {
                        xs: "0px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        width: {
                          xs: "90vw",
                          sm: "40vw",
                          md: "30vw",
                          lg: "22vw",
                        },
                        aspectRatio: {
                          xs: "1/2.3",
                          sm: "2 / 6.4",
                          md: "2 / 4.6",
                          lg: "2 / 6",
                          xl: "2 / 4.6",
                        },
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {card}
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Signup;
