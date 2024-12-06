import React, { useState } from "react";
import "./Landpage.css";
import NavBarfront from "../reusecomponent/headercomponent/NavBarfront";
import Footer from "../reusecomponent/footercomponent/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Container, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Customtab from "./CustomTabs/Customtab";

import { Link, NavLink } from "react-router-dom";
import Scrolltotop from "../Scrolltotop/Scrolltotop";

const BackgroundCard = styled(({ backgroundImage, ...other }) => (
  <Card {...other} />
))(({ backgroundImage }) => ({
  minWidth: 275,
  aspectRatio: 1,
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 0,
    opacity: 1,
  },
}));
const isMobile = window.innerWidth < 768;
const items = [
  {
    image: "/images/latest5.jpg.jpg",
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    originalPrice: "$120.00",
  },
  {
    image: "/images/latest6.jpg.jpg",
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    originalPrice: "$120.00",
  },
  {
    image: "/images/latest7.jpg.jpg",
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    originalPrice: "$120.00",
  },
  {
    image: "/images/latest8.jpg.jpg",
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    originalPrice: "$120.00",
  },
];

const StyledBox = styled(Box)({
  width: "80%",
  margin: "0 auto",
  position: "relative",
  overflow: "hidden",
});

const ProductCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  margin: "0 15px",
  "&:hover .hover-icons": {
    opacity: 1,
    visibility: "visible",
    background: "white",
  },
});

const HoverIcons = styled(Stack)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "all 0.3s ease-in-out",
  visibility: "hidden",
  opacity: 0,
  zIndex: 2,
});

const Arrow = styled(IconButton)(({ position }) => ({
  position: "absolute",
  top: "40%",
  [position]: "0px",
  zIndex: 2,
  color: "#000",
}));

const NextArrow = ({ onClick }) => (
  <Arrow
    onClick={onClick}
    position="right"
    sx={{ color: "rgba(32,69,112,0.3)" }}
  >
    <ArrowForwardIosIcon />
  </Arrow>
);

const PrevArrow = ({ onClick }) => (
  <Arrow onClick={onClick} position="left">
    <ArrowBackIosIcon sx={{ color: "rgba(32,69,112,0.3)" }} />
  </Arrow>
);

function Landpage() {
  const customPrevArrow = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          position: "absolute",
          top: "50%",
          left: "15px",
          zIndex: 2,
          transform: "translateY(-50%)",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          display: isMobile ? "none" : "block",
        }}
      >
        <span style={{ fontSize: "30px", color: "#000" }}>❮</span>
      </button>
    );

  const customNextArrow = (onClickHandler, hasNext, label) =>
    hasNext && (
      <Button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          position: "absolute",
          top: "50%",
          right: "15px",
          zIndex: 2,
          transform: "translateY(-50%)",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "30px", color: "#000" }}>❯</span>
      </Button>
    );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    isFinite,
    centerMode: true,
    centerPadding: "0%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "0%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <Container
      className="landingpage"
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
        margin: "0px",
      }}
    >
      <Scrolltotop />

      {/* <NavBarfront /> */}

      <Carousel
        className="slider"
        showIndicators={false}
        renderArrowPrev={isMobile ? () => null : customPrevArrow}
        renderArrowNext={isMobile ? () => null : customNextArrow}
        showThumbs={false}
        showStatus={false}
        swipeable={isMobile}
        autoPlay
        infiniteLoop
      >
        <Box
          className="slider-1"
          sx={{
            position: "relative",
            height: { xs: "310px", sm: "580px", md: "600px", lg: "600px" },
          }}
        >
          <Box
            alignItems="left"
            gap={1}
            sx={{
              marginLeft: "10%",
              display: {
                xs: "flex",
                sm: "none",
                md: "none",
                lg: "none",
              },
              position: { xs: "absolute" },
              top: { xs: "0%" },
              right: { xs: "4%" },
            }}
          >
            <IconButton
              sx={{
                color: "red",
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <SearchIcon
                fontSize="medium"
                sx={{
                  color: "red",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              />
            </IconButton>

            <IconButton
              sx={{
                color: "red",
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <PersonOutlineOutlinedIcon fontSize="medium" />
            </IconButton>

            <IconButton
              sx={{
                color: "red",
                position: "relative",
                "&::before": {
                  content: '"1"',
                  position: "absolute",
                  fontSize: "12px",
                  top: "2px",
                  left: "34px",
                  width: "14px",
                  height: "13px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "#fff",
                },
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <ShoppingCartOutlinedIcon fontSize="medium" />
            </IconButton>
          </Box>
          <img
            src="/h1_hero1.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <Box
            className="slider-1-leftside"
            sx={{
              display: {
                xs: "Flex",
                sm: "Flex",
                md: "Flex",
                lg: "Flex",
              },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "column",
              },
              alignContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
              position: "absolute",
              top: {
                xs: "27%",
                sm: "30%",
                md: "35%",
                lg: "31%",
              },
              left: {
                xs: "4%",
                sm: "3%",
                md: "0%",
                lg: "10%",
              },
            }}
          >
            <Box className="slider-1-title">
              <Typography
                variant="h2"
                component="div"
                sx={{
                  fontFamily: "Clicker Script, cursive",
                  color: "#ff2020",
                  fontSize: {
                    xs: "21px",
                    sm: "22px",
                    md: "32px",
                    lg: "38px",
                  },
                  lineHeight: "1.2",
                  fontWeight: "200",
                  marginBottom: "1px",
                }}
              >
                Fashion sale
              </Typography>
              <Typography
                variant="span"
                sx={{
                  fontFamily: '"Jost", sans-serif',
                  width: "100%",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3.4375rem",
                  },
                  fontWeight: 500,
                  color: "#292621",
                  lineHeight: 1.3,
                  marginBottom: "2px",

                  animation: "bounce 1.5s ease-in-out infinite",
                  "@keyframes bounce": {
                    "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                    "40%": { transform: "translateY(-20px)" },
                    "60%": { transform: "translateY(-10px)" },
                  },
                }}
              >
                Minimal Menz Style
              </Typography>
            </Box>
            <Box
              component="div"
              className="description"
              sx={{
                color: "#74706b",
                fontSize: {
                  xs: ".9rem",
                  sm: "1rem",
                  md: "1.125rem",
                  lg: "1.125rem",
                },
                fontWeight: 400,
                marginBottom: "31px",
                whiteSpace: "normal",

                animation: "slideUp 1s ease-in-out forwards",
                "@keyframes slideUp": {
                  "0%": {
                    transform: "translateY(100px)",
                    opacity: 0,
                  },
                  "100%": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{ marginBottom: "30px", mt: "20px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                natus?
              </Typography>
              <Button
                sx={{
                  border: "none",
                  color: "#fff",
                  backgroundColor: "black",
                  padding: {
                    xs: "8px",
                    sm: "16px",
                    md: "16px",
                  },
                  width: {
                    xs: "20%",
                    sm: "33%",
                    md: "33%",
                  },
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },
                  fontWeight: 400,
                  "&:hover": {
                    color: "#000",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          className="slider-2"
          sx={{
            position: "relative",
            height: { xs: "310px", sm: "580px", md: "600px", lg: "600px" },
          }}
        >
          <Box
            alignItems="left"
            gap={1}
            sx={{
              marginLeft: "10%",
              display: {
                xs: "flex",
                sm: "none",
                md: "none",
                lg: "none",
              },
              position: { xs: "absolute" },
              top: { xs: "0%" },
              right: { xs: "4%" },
            }}
          >
            <IconButton
              sx={{
                color: "red",
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <SearchIcon
                fontSize="medium"
                sx={{
                  color: "red",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              />
            </IconButton>

            <IconButton
              sx={{
                color: "red",
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <PersonOutlineOutlinedIcon fontSize="medium" />
            </IconButton>

            <IconButton
              sx={{
                color: "red",
                position: "relative",
                "&::before": {
                  content: '"1"',
                  position: "absolute",
                  fontSize: "12px",
                  top: "2px",
                  left: "34px",
                  width: "14px",
                  height: "13px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "#fff",
                },
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              <ShoppingCartOutlinedIcon fontSize="medium" />
            </IconButton>
          </Box>
          <img
            src="/h1_hero2.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            className="slider-2-rightside"
            sx={{
              display: {
                xs: "Flex",
                sm: "Flex",
                md: "Flex",
                lg: "Flex",
              },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "column",
              },
              alignContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
              position: "absolute",
              top: {
                xs: "27%",
                sm: "30%",
                md: "35%",
                lg: "31%",
              },
              right: {
                xs: "4%",
                sm: "3%",
                md: "0%",
                lg: "10%",
              },
            }}
          >
            <Box className="slider-2-title">
              <Typography
                variant="h2"
                component="div"
                sx={{
                  fontFamily: "Clicker Script, cursive",
                  color: "#ff2020",
                  fontSize: {
                    xs: "21px",
                    sm: "22px",
                    md: "32px",
                    lg: "38px",
                  },
                  lineHeight: "1.2",
                  fontWeight: "200",
                  marginBottom: "1px",
                }}
              >
                Fashion sale
              </Typography>
              <Typography
                variant="span"
                sx={{
                  fontFamily: '"Jost", sans-serif',
                  width: "100%",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3.4375rem",
                  },
                  fontWeight: 500,
                  color: "#292621",
                  lineHeight: 1.3,
                  marginBottom: "2px",

                  animation: "bounce 1.5s ease-in-out infinite",
                  "@keyframes bounce": {
                    "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                    "40%": { transform: "translateY(-20px)" },
                    "60%": { transform: "translateY(-10px)" },
                  },
                }}
              >
                Minimal Women Style
              </Typography>
            </Box>
            <Box
              component="div"
              className="description"
              sx={{
                color: "#74706b",
                fontSize: {
                  xs: ".9rem",
                  sm: "1rem",
                  md: "1.125rem",
                  lg: "1.125rem",
                },
                fontWeight: 400,
                marginBottom: "31px",
                whiteSpace: "normal",

                animation: "slideUp 1s ease-in-out forwards",
                "@keyframes slideUp": {
                  "0%": {
                    transform: "translateY(100px)",
                    opacity: 0,
                  },
                  "100%": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{ marginBottom: "30px", mt: "20px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                natus?
              </Typography>
              <Button
                sx={{
                  border: "none",
                  color: "#fff",
                  backgroundColor: "black",
                  padding: {
                    xs: "8px",
                    sm: "16px",
                    md: "16px",
                  },
                  width: {
                    xs: "20%",
                    sm: "33%",
                    md: "33%",
                  },
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },
                  fontWeight: 400,
                  "&:hover": {
                    color: "#000",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Carousel>

      <Box
        className="cards"
        sx={{
          padding: {
            xs: "0px",
            sm: "30px",
            md: "40px",
            lg: "60px",
          },
          pl: {
            xs: "22px",
            sm: "0px",
            md: "0px",
            lg: "0px",
          },

          mb: {
            xs: "20px",
            sm: "30px",
            md: "0px",
            lg: "0px",
          },
          mt: {
            xs: "20px",
            sm: "30px",
            md: "0px",
            lg: "0px",
          },
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "90%",
              lg: "82%",
              xl: "80%",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <Card
              sx={{
                width: {
                  xs: "95%",
                  sm: "95%",
                  md: "100%",
                  lg: "100%",
                },
                aspectRatio: {
                  xs: "1",
                },
              }}
            >
              <BackgroundCard
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                backgroundImage="/images/items1.jpg.jpg"
              >
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "jost, sans-serif",
                      fontWeight: "700",
                      fontStyle: "25px",
                      color: "#fff",
                    }}
                  >
                    Men's Fashion
                  </Typography>
                  <CardActions
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Button
                      size="small"
                      sx={{ color: "#CEBD9C" }}
                      component={Link}
                      to="/"
                    >
                      Shop Now
                    </Button>
                  </CardActions>
                </CardContent>
              </BackgroundCard>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <Card
              sx={{
                width: {
                  xs: "95%",
                  sm: "95%",
                  md: "100%",
                  lg: "100%",
                },
                aspectRatio: {
                  xs: "1",
                },
              }}
            >
              <BackgroundCard
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                backgroundImage="/images/items2.jpg.jpg"
              >
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "jost, sans-serif",
                      fontWeight: "700",
                      fontStyle: "25px",
                      color: "#fff",
                    }}
                  >
                    Women's Fashion
                  </Typography>
                  <CardActions
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Button
                      size="small"
                      sx={{ color: "#CEBD9C" }}
                      component={Link}
                      to="/"
                    >
                      Shop Now
                    </Button>
                  </CardActions>
                </CardContent>
              </BackgroundCard>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <Card
              sx={{
                width: {
                  xs: "95%",
                  sm: "95%",
                  md: "100%",
                  lg: "100%",
                },
                aspectRatio: {
                  xs: "1",
                },
              }}
            >
              <BackgroundCard
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                backgroundImage="/images/items3.jpg.jpg"
              >
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "jost, sans-serif",
                      fontWeight: "700",
                      fontSize: {
                        xs: "25px",
                        sm: "25px",
                        md: "25px",
                        lg: "25px",
                      },
                      color: "#fff",
                    }}
                  >
                    Baby Fashion
                  </Typography>
                  <CardActions
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Button
                      size="small"
                      sx={{ color: "#CEBD9C" }}
                      component={Link}
                      to="/"
                    >
                      Shop Now
                    </Button>
                  </CardActions>
                </CardContent>
              </BackgroundCard>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Customtab />
      </Box>

      <Box
        className="custom-testimonial"
        sx={{
          color: "#000",
          background: "#f3ead8",
          minHeight: {
            xs: "0vh",
            sm: "0vh",
            md: "0vh",
            lg: "0vh",
          },
          marginBottom: "10%",
          width: "100%",
          pt: "60px",
          pb: "60px",
        }}
      >
        <Box
          className="testimonial-slider"
          sx={{
            background: "#f3ead8",
            minHeight: {
              xs: "0vh",
              sm: "0vh",
              md: "0vh",
              lg: "0vh",
            },
            width: "73%",
            marginLeft: "11.5%",
          }}
        >
          <Carousel
            className="slider"
            showIndicators={false}
            renderArrowPrev={customPrevArrow}
            renderArrowNext={customNextArrow}
            showThumbs={false}
            showStatus={false}
            autoPlay
            infiniteLoop
          >
            <div>
              <div className="testimonial-title">
                <h2>Customer Testimonial</h2>
              </div>
              <div className="testimonial-description">
                <p>
                  Everybody is different, which is why we offer styles for every
                  body. Laborum fuga incidunt laboriosam voluptas iure, delectus
                  dignissimos facilis neque nulla earum
                </p>
              </div>
              <div className="customer-profile">
                <div className="customer-img">
                  <img src="/images/founder-img.png.png" alt="dcsdcds" />
                </div>
                <div className="customer-role">
                  <span>petey cruiser</span>
                  <p>design by developer</p>
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-title">
                <h2>Customer Testimonial</h2>
              </div>
              <div className="testimonial-description">
                <p>
                  Everybody is different, which is why we offer styles for every
                  body. Laborum fuga incidunt laboriosam voluptas iure, delectus
                  dignissimos facilis neque nulla earum
                </p>
              </div>
              <div className="customer-profile">
                <div className="customer-img">
                  <img src="/images/founder-img.png.png" alt="dcsdcds" />
                </div>
                <div className="customer-role">
                  <span>petey cruiser</span>
                  <p>design by developer</p>
                </div>
              </div>
            </div>
          </Carousel>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        {/* Title */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: '"Jost", sans-serif',
          }}
        >
          You May Like
        </Typography>

        <StyledBox>
          <Slider {...settings}>
            {items.map((item, index) => (
              <ProductCard
                key={index}
                sx={{ boxShadow: "none", width: "calc(100% - 20px)!important" }}
              >
                <HoverIcons className="hover-icons" direction="row" spacing={2}>
                  <IconButton
                    sx={{
                      background: "transparent",
                      borderRadius: "0px",
                      "&:hover": {
                        background: "red",
                        color: "white",
                        borderRadius: "0px",
                      },
                    }}
                  >
                    <ShoppingCartIcon
                      fontSize="medium"
                      sx={{
                        background: "transparent",
                        borderRadius: "0px",
                      }}
                    />
                  </IconButton>
                  <IconButton
                    sx={{
                      background: "transparent",
                      borderRadius: "0px",
                      "&:hover": {
                        background: "red",
                        color: "white",
                        borderRadius: "0px",
                      },
                    }}
                  >
                    <FavoriteBorderIcon fontSize="medium" />
                  </IconButton>
                  <IconButton
                    sx={{
                      background: "transparent",
                      borderRadius: "0px",
                      "&:hover": {
                        background: "red",
                        color: "white",
                        borderRadius: "0px",
                      },
                    }}
                  >
                    <ZoomInIcon fontSize="medium" />
                  </IconButton>
                </HoverIcons>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="300"
                  image={item.image}
                  alt={item.name}
                  // sx={{

                  //   "&:hover": {
                  //     transform: "scale(1.1)",
                  //   },
                  // }}
                />

                {/* Product Info */}
                <CardContent>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                      color: "black",
                      transition: "color 0.1s ease",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{
                        color: "grey",
                        transition: "color 0.1s ease",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                    >
                      {item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: "line-through", color: "#cebd9c" }}
                    >
                      {item.originalPrice}
                    </Typography>
                  </Typography>
                </CardContent>
              </ProductCard>
            ))}
          </Slider>
        </StyledBox>
      </Box>

      <Box
        sx={{
          background: "#F6F6F6",
          width: "100%",
          aspectRatio: "4/2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center ",
        }}
      >
        <Box sx={{}}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "34px",
              display: "flex",
              justifyContent: "center",
              fontWeight: "500",
              lineHeight: "1.4",
              margin: "20px",
              fontFamily: '"Jost", sans-serif',
            }}
          >
            Latest News
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              background: "#F6F6F6",
            }}
          >
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: 0,
                margin: 0,
                width: "100%",
              }}
            >
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                  },
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#f5f5f5;",
                    maxWidth: 473,
                    border: "none",
                    borderRadius: "0px",
                    boxShadow: "none",
                    overflow: "visible",
                    marginLeft: { sm: "1%", md: "1%" },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/images/blog1.jpg.jpg"
                    sx={{
                      height: "63%",
                      width: "94%",
                      marginLeft: { xs: "3%" },
                    }}
                  />
                  <CardContent sx={{ background: "#F6F6F6" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        color: "#74706B",
                        fontSize: "0.75rem",
                        textAlign: "left",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    >
                      Fashion Tips
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        lineHeight: "1.9",
                        textAlign: "left",
                        fontFamily: '"Jost", sans-serif',
                        "&:hover": {
                          color: "red",
                          cursor: "pointer",
                        },
                      }}
                    >
                      What Curling Irons Are The Best Ones
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        textAlign: "left",
                        fontSize: "0.9rem",
                        lineHeight: "1.9",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    >
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus..
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ background: "#F6F6F6" }}>
                    <Button
                      size="small"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#000000",
                        background: "#F6F6F6",
                        textDecoration: "underline",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                  },
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#f5f5f5;",
                    maxWidth: 473,
                    border: "none",
                    borderRadius: "0px",
                    boxShadow: "none",
                    overflow: "visible",
                    marginBottom: { xs: "4%" },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/images/blog2.jpg.jpg"
                    sx={{
                      height: "63%",
                      width: "94%",
                      marginLeft: { xs: "3%" },
                    }}
                  />
                  <CardContent sx={{ background: "#F6F6F6" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        color: "#74706B",
                        fontSize: "12px",
                        textAlign: "left",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    >
                      Fashion Tips
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "1.3",
                        textAlign: "left",
                        fontFamily: '"Jost", sans-serif',
                        "&:hover": {
                          color: "red",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        textAlign: "left",
                        lineHeight: "1.9",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    >
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus..
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ background: "#F6F6F6" }}>
                    <Button
                      size="small"
                      sx={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#000000",
                        background: "#F6F6F6",
                        textDecoration: "underline",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 12, md: 12, lg: 4 }}
                sx={{
                  display: {
                    xs: "flex",
                    sm: "flex",
                  },
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                  },
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#f5f5f5;",
                    maxWidth: 473,
                    border: "none",
                    borderRadius: "0px",
                    boxShadow: "none",
                    overflow: "visible",
                    marginLeft: { sm: "1%", md: "1%" },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/images/blog3.jpg.jpg"
                    sx={{
                      height: "63%",
                      width: "94%",
                      marginLeft: { xs: "3%" },
                    }}
                  />
                  <CardContent sx={{ background: "#F6F6F6" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        color: "#74706B",
                        fontSize: "12px",
                        textAlign: "left",
                        fontFamily: '"Jost", sans-serif',
                      }}
                    >
                      Fashion Tips
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        fontSize: "17px",
                        fontWeight: "700",
                        lineHeight: "1.9",
                        textAlign: "left",
                        fontFamily: '"Jost", sans-serif',
                        "&:hover": {
                          color: "red",
                          cursor: "pointer",
                        },
                      }}
                    >
                      What Curling Irons Are The Best Ones
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        color: "text.secondary",
                        textAlign: "left",
                        lineHeight: "1.9",
                      }}
                    >
                      Consectetur adipisicing elit. Laborum fuga incidunt
                      laboriosam voluptas iure, delectus..
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ background: "#F6F6F6" }}>
                    <Button
                      size="small"
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#000000",
                        background: "#F6F6F6",
                        textDecoration: "underline",
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background: "#fff",
          aspectRatio: "8/1",
          padding: "40px",
        }}
      >
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              sx={{
                width: "100%",
                borderRight: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "1px solid #d3d3d3",
                },
                animation: "slideUp 1s ease-in-out forwards",
                "@keyframes slideUp": {
                  "0%": {
                    transform: "translateY(100px)",
                    opacity: 0,
                  },
                  "100%": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  borderRadius: "0px",
                  backgroundColor: "#f6f6f6",
                  padding: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <LocalShippingOutlinedIcon sx={{ fontSize: 85 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                Fast & Free Delivery
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "14px", textAlign: "center" }}
              >
                Free delivery on all orders
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              sx={{
                width: "100%",
                borderRight: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "1px solid #d3d3d3",
                },
                animation: "slideUp 1.4s ease-in-out forwards",
                "@keyframes slideUp": {
                  "0%": {
                    transform: "translateY(100px)",
                    opacity: 0,
                  },
                  "100%": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  borderRadius: "0px",
                  backgroundColor: "#f6f6f6",
                  padding: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <PaymentOutlinedIcon sx={{ fontSize: 85 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                Secure Payment
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "14px", textAlign: "center" }}
              >
                Free delivery on all orders
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              sx={{
                width: "100%",
                borderRight: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "1px solid #d3d3d3",
                },
                animation: "slideUp 1.6s ease-in-out forwards",
                "@keyframes slideUp": {
                  "0%": {
                    transform: "translateY(100px)",
                    opacity: 0,
                  },
                  "100%": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  borderRadius: "0px",
                  backgroundColor: "#f6f6f6",
                  padding: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <MonetizationOnOutlinedIcon sx={{ fontSize: 85 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                Money Back Guarantee
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "14px", textAlign: "center" }}
              >
                Free delivery on all orders
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
            <Box
              sx={{
                width: "100%",
                animation: "slideUp 1.8s ease-in-out forwards",
                "@keyframes slideUp": {
                  "0%": {
                    transform: "translateY(100px)",
                    opacity: 0,
                  },
                  "100%": {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  borderRadius: "0px",
                  backgroundColor: "#f6f6f6",
                  padding: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <HeadsetMicOutlinedIcon sx={{ fontSize: 85 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                Online Support
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "14px", textAlign: "center" }}
              >
                Free delivery on all orders
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Footer /> */}
    </Container>
  );
}

export default Landpage;
