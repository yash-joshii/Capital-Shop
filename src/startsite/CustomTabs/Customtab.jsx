import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid2";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Customtab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const items = [
    {
      image: "/images/latest1.jpg.jpg",
      name: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: "/images/latest2.jpg.jpg",
      name: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: "/images/latest3.jpg.jpg",
      name: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: "/images/latest4.jpg.jpg",
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
    <Arrow onClick={onClick} position="left" sx={{ marginLeft: "1%" }}>
      <ArrowBackIosIcon sx={{ color: "rgba(32,69,112,0.3)" }} />
    </Arrow>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width:"100%",
          flexDirection:"column",
          justifyContent: "space-around",
          borderBottom: {
            xs: "none",  
            sm: "none",  
            md: "1px solid #d3d3d3",  
            lg: "1px solid #d3d3d3",  
          },
          borderColor: "",
        }}
      >
        <Grid container spacing={1}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <Box>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              display:'flex',
              marginLeft:'20%',
              color: "#000000",
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
              },
              fontWeight: "600",
              textAlign: "left",
              fontFamily: "Jost, sans-serif",
            }}
          >
            Trending This Week
          </Typography>
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}  sx={{
             
            }}>
  <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "red",
                 display:{
                  sm:"none",
                  xs:"none"
                 }
              
              },
            }}
            sx={{
              marginLeft: {
                xs: "16%",   
                sm: "16%",   
           
              },
            }}
          >
            <Tab
              label="Men"
              {...a11yProps(0)}
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.8rem",
                  md: ".9rem",
                  
                },
                fontFamily: "Jost, sans-serif",
                "&.Mui-selected": {
                  color: "red", 
                },
              }}
            />
            <Tab
              label="Women"
              {...a11yProps(1)}
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.8rem",
                  md: ".9rem",
                },
                fontFamily: "Jost, sans-serif",
                "&.Mui-selected": {
                  color: "red",
                },
              }}
            />
            <Tab
              label="Baby"
              {...a11yProps(2)}
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.8rem",
                  md: ".9rem",
                },
                fontFamily: "Jost, sans-serif",
                "&.Mui-selected": {
                  color: "red",
                },
              }}
            />
            <Tab
              label="Fashion"
              {...a11yProps(3)}
              sx={{
                fontSize: {
                  xs: "0.6rem",
                  sm: "0.8rem",
                  md: ".9rem",
                },
                fontFamily: "Jost, sans-serif",
                "&.Mui-selected": {
                  color: "red",
                },
              }}
            />
          </Tabs>
          </Grid>
        </Grid>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StyledBox>
          <Slider {...settings}>
            {items.map((item, index) => (
              <ProductCard
                key={index}
                sx={{
                  boxShadow: "none",
                  marginRight: "10px",
                  width: "calc(100% - 20px)!important",
                  "&:last-child": {
                    marginRight: "0",
                  },
                }}
              >
                {/* Hover Icons */}
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
                    <ShoppingCartIcon fontSize="medium" />
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
                />

                {/* Product Info */}
                <CardContent>
              <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                      textAlign:"center",
                      color: "black",
                      transition: "color 0.1s ease",
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StyledBox>
          <Slider {...settings}>
            {items.map((item, index) => (
              <ProductCard
                key={index}
                sx={{ boxShadow: "none", width: "calc(100% - 20px)!important" }}
              >
                {/* Hover Icons */}
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
                    <ShoppingCartIcon fontSize="medium" />
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
                      textAlign:"center",
                      color: "black",
                      transition: "color 0.1s ease",
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <StyledBox>
          <Slider {...settings}>
            {items.map((item, index) => (
              <ProductCard
                key={index}
                sx={{ boxShadow: "none", width: "calc(100% - 20px)!important" }}
              >
                {/* Hover Icons */}
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
                    <ShoppingCartIcon fontSize="medium" />
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
                      textAlign:"center",
                      color: "black",
                      transition: "color 0.1s ease",
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <StyledBox>
          <Slider {...settings}>
            {items.map((item, index) => (
              <ProductCard
                key={index}
                sx={{ boxShadow: "none", width: "calc(100% - 20px)!important" }}
              >
                {/* Hover Icons */}
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
                    <ShoppingCartIcon fontSize="medium" />
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
                      textAlign:"center",
                      color: "black",
                      transition: "color 0.1s ease",
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
      </CustomTabPanel>
    </Box>
  );
}

export default Customtab;
