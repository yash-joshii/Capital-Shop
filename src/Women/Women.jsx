import React, { useState } from "react";
import {
  Box,
  Container,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Scrolltotop from "../Scrolltotop/Scrolltotop";
import Grid from "@mui/material/Grid2";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { styled } from "@mui/system";

function Women() {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState([0, 500]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };
  const [genres, setGenres] = React.useState({
    History: true,
    HorrerThriller: false,
    LoveStories: false,
    ScienceFriction: false,
    Biography: false,
  });
  const [brand, setBrand] = React.useState({
    Greenpublication: true,
    Redpublication: false,
    Shebapublication: false,
    Anondopublication: false,
    Rinkupublication: false,
  });

  const handleChanges = (event) => {
    setBrand({
      ...brand,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (event) => {
    setGenres({
      ...genres,
      [event.target.name]: event.target.checked,
    });
  };
  const { History, HorrerThriller, LoveStories, ScienceFriction, Biography } =
    genres;
  const {
    Greenpublication,
    Redpublication,
    Shebapublication,
    Anondopublication,
    Rinkupublication,
  } = brand;

  const products = [
    {
      id: 1,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest5.jpg.jpg",
    },

    {
      id: 2,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest6.jpg.jpg",
    },
    {
      id: 3,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest7.jpg.jpg",
    },
    {
      id: 4,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest8.jpg.jpg",
    },
    {
      id: 5,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest1.jpg.jpg",
    },

    {
      id: 6,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest2.jpg.jpg",
    },
    {
      id: 7,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest3.jpg.jpg",
    },
    {
      id: 8,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest4.jpg.jpg",
    },
    {
      id: 9,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      oldPrice: "$120.00",
      image: "/images/latest3.jpg.jpg",
    },
  ];
  const HoverIcons = styled(Stack)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s ease-in-out",
    visibility: "hidden",
    opacity: 0,
    zIndex: 2,
    background:"#fff",
  });

  // const roductCard = styled(Card)({
  //   position: "relative",
  //   overflow: "hidden",
  //   margin: "0 15px",
    
  // });

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
        aspectRatio: "1",
      }}
    >
      <Scrolltotop />
      <Box
        sx={{
          width: "100%",
          background: "#f3ead8",
          height: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "20px",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: "30px",
            fontFamily: "Jost, serif",
            mb: "0.5%",
          }}
        >
          Category
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "13%",
            justifyContent: "center",
          }}
        >
          <Typography
            to="/"
            component={Link}
            sx={{
              fontWeight: 300,
              fontSize: "12px",
              fontFamily: "Jost, serif",
              textDecoration: "none",
              color: "#727070",
              width: "19%",
            }}
          >
            Home
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography
            to="/Babycollection"
            component={Link}
            sx={{
              fontWeight: 300,
              fontSize: "12px",
              fontFamily: "Jost, serif",
              textDecoration: "none",
              color: "#727070",
              width: "30%",
              textAlign: "center",
            }}
          >
            Baby Fashion
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: "20px" }}>
        <Grid
          container
          spacing={1}
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 2, md: 3, lg: 3 }}>
            <Box
              sx={{
                width: "88%",
                aspectRatio: "1",
                border: "1px solid #d3d3d3",
              }}
            >
              <Box sx={{ width: "81%", margin: "9%" }}>
                {/* Category Dropdown */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel
                    sx={{
                      background: "#fff",
                      left: "8px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    Category
                  </InputLabel>
                  <Select
                    value={category}
                    onChange={handleCategoryChange}
                    sx={{
                      borderRadius: "40px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    <MenuItem
                      value="Category 1"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Category 1
                    </MenuItem>
                    <MenuItem
                      value="Category 2"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Category 2
                    </MenuItem>
                    <MenuItem
                      value="Category 3"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Category 3
                    </MenuItem>
                    <MenuItem
                      value="Category 4"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Category 4
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Type Dropdown */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel
                    sx={{
                      background: "#fff",
                      left: "8px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    Type
                  </InputLabel>
                  <Select
                    value={type}
                    onChange={handleTypeChange}
                    sx={{
                      borderRadius: "40px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    <MenuItem
                      value="Type 1"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Type 1
                    </MenuItem>
                    <MenuItem
                      value="Type 2"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Type 2
                    </MenuItem>
                    <MenuItem
                      value="Type 3"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Type 3
                    </MenuItem>
                    <MenuItem
                      value="Type 4"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Type 4
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Size Dropdown */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel
                    sx={{
                      background: "#fff",
                      left: "8px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    Size
                  </InputLabel>
                  <Select
                    value={size}
                    onChange={handleSizeChange}
                    sx={{
                      borderRadius: "40px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    <MenuItem
                      value="Very Extra Large"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      XXl
                    </MenuItem>
                    <MenuItem
                      value=" Extra Large"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Xl
                    </MenuItem>
                    <MenuItem
                      value="Large"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      lG
                    </MenuItem>
                    <MenuItem
                      value="Medium"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      M
                    </MenuItem>
                    <MenuItem
                      value="Small"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      S
                    </MenuItem>
                    <MenuItem
                      value="Extra small"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      XS
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Color Dropdown */}
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel
                    sx={{
                      background: "#fff",
                      left: "8px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    Color
                  </InputLabel>
                  <Select
                    value={color}
                    onChange={handleColorChange}
                    sx={{
                      borderRadius: "40px",
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    <MenuItem
                      value="Red"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Red
                    </MenuItem>
                    <MenuItem
                      value="Blue"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Blue
                    </MenuItem>
                    <MenuItem
                      value="Green"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Green
                    </MenuItem>
                    <MenuItem
                      value="Green"
                      sx={{
                        fontWeight: 500,
                        fontSize: "16px",
                        fontFamily: "Jost, serif",
                      }}
                    >
                      Yellow
                    </MenuItem>
                  </Select>
                </FormControl>

                {/* Filter by Price */}
                <Typography
                  variant="h6"
                  sx={{
                    mt: 3,
                    mb: 1,
                    fontWeight: 500,
                    fontSize: "16px",
                    fontFamily: "Jost, serif",
                  }}
                >
                  Filter by Price
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Slider
                    value={price}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={500}
                    sx={{ color: "red" }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>0</Typography>
                  <Typography>500</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel
                    component="legend"
                    sx={{
                      color: "black",
                      mt: 3,
                      mb: 1,
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    fliter by Genres
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={History}
                          onChange={handleChange}
                          name="History"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="History"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={HorrerThriller}
                          onChange={handleChange}
                          name="Horrer-Thriller"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Horrer-Thriller"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={LoveStories}
                          onChange={handleChange}
                          name="Love Stories"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="LoveStories"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ScienceFriction}
                          onChange={handleChange}
                          name="ScienceFriction"
                          sx={{
                            borderRadius: "50%",
                          }}
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Science Friction"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Biography}
                          onChange={handleChange}
                          name="Biography"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Biography"
                    />
                  </FormGroup>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex" }}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel
                    component="legend"
                    sx={{
                      color: "black",
                      mt: 3,
                      mb: 1,
                      fontWeight: 500,
                      fontSize: "16px",
                      fontFamily: "Jost, serif",
                    }}
                  >
                    fliter by Brand
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Greenpublication}
                          onChange={handleChanges}
                          name="Greenpublication"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Green publication"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Redpublication}
                          onChange={handleChanges}
                          name="Redpublication"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Red publication"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Shebapublication}
                          onChange={handleChanges}
                          name="Shebapublication"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Sheba publication"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Anondopublication}
                          onChange={handleChanges}
                          name="Anondopublication"
                          sx={{
                            borderRadius: "50%",
                          }}
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Anondo publication"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Rinkupublication}
                          onChange={handleChanges}
                          name="Rinkupublication"
                        />
                      }
                      componentsProps={{
                        typography: {
                          sx: {
                            color: "black",
                            fontWeight: 400,
                            fontSize: "16px",
                            fontFamily: "Jost, serif",
                          },
                        },
                      }}
                      label="Rinkupublication"
                    />
                  </FormGroup>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 10, md: 9, lg: 9 }}>
            <Box sx={{ p: 3 }}>
              <Grid
                container
                spacing={4}
                sx={{ justifyContent: "space-between" }}
              >
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                    <Card
                      sx={{
                        textAlign: "center",
                        boxShadow: "none",
                        width: "calc(100% - 20px)!important",
                        position: "relative",
                        "&:hover .hover-icons": {
                          opacity: 1,
                          visibility: "visible",
                          background: "white",
                        },
                      }}
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

                      <CardMedia
                        component="img"
                        alt={product.title}
                        height="300"
                        image={product.image}
                        title={product.title}
                        sx={{
                          transition: "transform 0.3s ease",
                      
                          "&:hover": {
                            transform: "scale(1.1)", 
                          },
                        }}
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "black",
                            transition: "color 0.1s ease",
                            "&:hover": {
                              color: "red",
                            },
                          }}
                        >
                          {product.title}
                        </Typography>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              color: "grey",
                              transition: "color 0.1s ease",
                              "&:hover": {
                                color: "black",
                              },
                            }}
                          >
                            {product.price}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              textDecoration: "line-through",
                              color: "#cebd9c",
                              ml: 2, // Add margin for spacing
                            }}
                          >
                            {product.oldPrice}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Women