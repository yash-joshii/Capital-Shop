import "./Navbarfront.css";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function NavBarfront() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTogglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const handleToggleBlogDropdown = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
  };
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:600px) and (max-width:1200px)");
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const iconSize = isMobile ? "medium" : isTablet ? "medium" : "large";

  const [anchorElPage, setAnchorElPage] = useState(null);
  const [anchorElBlog, setAnchorElBlog] = useState(null);

  const openPage = Boolean(anchorElPage);
  const openBlog = Boolean(anchorElBlog);

  const handlePageOpen = (event) => {
    setAnchorElPage(event.currentTarget);
  };

  const handlePageClose = () => {
    setAnchorElPage(null);
  };

  const handleBlogOpen = (event) => {
    setAnchorElBlog(event.currentTarget);
  };

  const handleBlogClose = () => {
    setAnchorElBlog(null);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          borderBottom: "1px solid #d3d3d3",
          padding: "0px",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Grid container spacing={2}>
          <Grid size={6} sm={6} md={6} lg={6}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                color: "#000000",
                marginLeft: {
                  xs:"0%",
                  sm:"5%",
                  md:"20%",
                  lg:"20%",
                },
              }}
            >
              <Button
                sx={{
                  color: "#292621",
                  fontSize: { sm: ".6em", md: ".7rem" },
                  fontWeight: 500,
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                About Us
              </Button>
              <Button
                sx={{
                  color: "#292621",
                  fontSize: { sm: ".6em", md: ".7rem" },
                  fontWeight: 500,
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                Privacy
              </Button>
              <Button
                sx={{
                  color: "#292621",
                  fontSize: { sm: ".6em", md: ".7rem" },
                  fontWeight: 500,
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                FAQ
              </Button>
              <Button
                sx={{
                  color: "#292621",
                  fontSize: { sm: ".6em", md: ".7rem" },
                  fontWeight: 500,
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                Careers
              </Button>
            </Box>
          </Grid>
          <Grid size={6} sm={6} md={6} lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  borderRight: "1px Solid #d3d3d3",
                  width: { xs: "40%", sm: "15%", md: "15%", lg: "11%" },
                  marginTop: "1%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: '"Jost", sans-serif',
                    color: "#000",
                    fontSize: { sm: ".6rem", md: ".7rem" },
                    textAlign: "center",
                  }}
                >
                  My WishList
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRight: "1px Solid #d3d3d3",
                  width: { xs: "40%", sm: "21%", md: "20%", lg: "15%" },
                  marginTop: "1%",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: '"Jost", sans-serif',
                    color: "#000",
                    fontSize: { sm: ".6em", md: ".7rem" },
                    textAlign: "center",
                  }}
                >
                  Track Your Order
                </Typography>
              </Box>
              <Box sx={{ }}>
                {/* Social Media Icons */}
                <Box display="flex" alignItems="center" gap={0}>
                  <IconButton
                    href="#"
                    color="#74706B"
                    sx={{ "&:hover": { background: "transparent" } }}
                  >
                    <FacebookIcon
                      sx={{
                        fontSize: 16,
                        transition: "transform 0.6s, color 0.6s",
                        "&:hover": {
                          background: "none",
                          transform: "scaleX(-1)",
                          color: "red",
                        },
                      }}
                    />
                  </IconButton>
                  <IconButton
                    href="#"
                    color="#74706B"
                    sx={{ "&:hover": { background: "transparent" } }}
                  >
                    <InstagramIcon
                      sx={{
                        fontSize: 16,
                        transition: "transform 0.6s, color 0.6s",
                        "&:hover": {
                          background: "none",
                          transform: "scaleX(-1)",
                          color: "red",
                        },
                      }}
                    />
                  </IconButton>
                  <IconButton
                    href="#"
                    color="#74706B"
                    sx={{ "&:hover": { background: "transparent" } }}
                  >
                    <TwitterIcon
                      sx={{
                        fontSize: 16,
                        transition: "transform 0.6s, color 0.6s",
                        "&:hover": {
                          background: "none",
                          transform: "scaleX(-1)",
                          color: "red",
                        },
                      }}
                    />
                  </IconButton>
                  <IconButton
                    href="#"
                    color="#74706B"
                    sx={{ "&:hover": { background: "transparent" } }}
                  >
                    <LinkedInIcon
                      sx={{
                        fontSize: 16,
                        transition: "transform 0.6s, color 0.6s",
                        "&:hover": {
                          transform: "scaleX(-1)",
                          color: "red",
                        },
                      }}
                    />
                  </IconButton>
                  <IconButton
                    href="#"
                    color="#74706B"
                    sx={{ "&:hover": { background: "transparent" } }}
                  >
                    <YouTubeIcon
                      sx={{
                        fontSize: 16,
                        transition: "transform 0.6s, color 0.6s",
                        "&:hover": {
                          background: "transparent",
                          transform: "scaleX(-1)",
                          color: "red",
                        },
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <AppBar
        position="sticky"
        sx={{
          background: "#fff",
          padding: "15px",
          fontFamily: '"Jost", sans-serif',
          overflow: "hidden",
          padding: '0', margin: '0'
        }}
      >
        <Container
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "false",
              md: "100%",
              lg: "100%",
            },
            padding: 0,
            margin: 0,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                padding: '0', margin: '0'
              },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: { xs: "14%", sm: "0%", md: "0%", lg: "0%" },
              }}
            >
              <Grid item xs={12} sm={6} md={2} lg={4}>
                <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
                  <Box
                    component={Link}
                    to="/"
                    sx={{
                      marginTop: {
                        xs: "0px",
                        sm: "0px",
                        md: "8px",
                        lg: "0px",
                      },
                      height: {
                        xs: "40px",
                        sm: "45px",
                        md: "26px",
                        lg: "50px",
                      },
                      width: "auto",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={`${process.env.PUBLIC_URL}/Capitalshoplogo.png`}
                      alt="Logo"
                      sx={{
                        height: "100%",
                        width: "auto",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={8} lg={5}>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "flex",
                    },
                    "@media (max-width: 991px)": {
                      display: "none",
                    },
                    alignItems: "center",
                    gap: 2,
                    color: "#000000",
                    marginLeft: "0%",
                    paddingTop: "1%",
                  }}
                >
                  <Button
                    color="inherit"
                    component={NavLink}
                    to="/"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 600,
                      color: "#000000",
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    color="inherit"
                    component={NavLink}
                    to="/Men"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 600,
                      color: "#000000",
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                  >
                    Men
                  </Button>
                  <Button
                    color="inherit"
                    component={NavLink}
                    to="/Women"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 600,
                      color: "#000000",
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                  >
                    Women
                  </Button>
                  <Tooltip
                    title="new"
                    placement="top-end"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      background: "red",
                      color: "white",
                    }}
                  >
                    <Button
                      color="inherit"
                      component={NavLink}
                      to="/Babycollection"
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 600,
                        color: "#000000",
                        "&.active": {
                          color: "red",
                        },
                        "&:hover": {
                          color: "red",
                          background: "transparent",
                        },
                      }}
                    >
                      Baby Collection
                    </Button>
                  </Tooltip>
                  <Button
                    color="inherit"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 600,
                      color: "#000000",
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                    onMouseEnter={handlePageOpen}
                    aria-controls={openPage ? "category-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPage ? "true" : undefined}
                  >
                    Pages
                  </Button>

                  <Menu
                    id="category-menu"
                    anchorEl={anchorElPage}
                    open={openPage}
                    onClose={handlePageClose}
                    MenuListProps={{
                      "aria-labelledby": "category-button",
                      onMouseLeave: handlePageClose,
                    }}
                  >
                    <MenuItem
                      component={NavLink}
                      to="/Login"
                      color="#000000"
                      onClick={handlePageClose}
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 600,
                        "&.active": {
                          color: "red",
                        },
                      }}
                    >
                      Login
                    </MenuItem>
                    <MenuItem
                      component={NavLink}
                      to="/Cart"
                      color="#000000"
                      onClick={handlePageClose}
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 600,
                        "&.active": {
                          color: "red",
                        },
                      }}
                    >
                      Cart
                    </MenuItem>
                    <MenuItem
                      onClick={handlePageClose}
                      sx={{ fontFamily: '"Jost", sans-serif', fontWeight: 600 }}
                    >
                      Product Detail
                    </MenuItem>
                    <MenuItem
                      onClick={handlePageClose}
                      sx={{ fontFamily: '"Jost", sans-serif', fontWeight: 600 }}
                    >
                      Product Checkout
                    </MenuItem>
                  </Menu>
                  <Button
                    color="inherit"
                    component={NavLink}
                    to="/Blog"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 600,
                      color: "#000000",
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                    onMouseEnter={handleBlogOpen} 
                    aria-controls={openBlog ? "collection-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openBlog ? "true" : undefined}
                  >
                    Blog
                  </Button>

                  <Menu
                    id="collection-menu"
                    anchorEl={anchorElBlog}
                    open={openBlog}
                    onClose={handleBlogClose}
                    MenuListProps={{
                      "aria-labelledby": "collection-button",
                      onMouseLeave: handleBlogClose,
                    }}
                  >
                    <MenuItem
                      component={NavLink}
                      to="/Blog"
                      onClick={handleBlogClose}
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 600,
                        "&.active": {
                          color: "red",
                        },
                      }}
                    >
                      Blog
                    </MenuItem>
                    <MenuItem
                      onClick={handleBlogClose}
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 600,
                        "&.active": {
                          color: "red",
                        },
                      }}
                    >
                      Element
                    </MenuItem>
                    <MenuItem
                      onClick={handleBlogClose}
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 600,
                        "&.active": {
                          color: "red",
                        },
                      }}
                    >
                      Blog Detail
                    </MenuItem>
                  </Menu>
                  <Button
                    color="inherit"
                    component={NavLink}
                    to="Contact"
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 600,
                      color: "#000000",
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                  >
                    Contact
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={2} lg={3}>
                <Box
                  gap={1}
                  sx={{
                    marginLeft: "10%",
                    display: {
                      xs: "none",
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                    },
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    color="#000000"
                    sx={{
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                  >
                    <SearchIcon
                      fontSize={iconSize}
                      sx={{
                        "&:hover": {
                          color: "red",
                          background: "transparent",
                        },
                      }}
                    />
                  </IconButton>

                  <IconButton
                    component={NavLink}
                    to="/Login"
                    color="#000000"
                    sx={{
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                  >
                    <PersonOutlineOutlinedIcon fontSize={iconSize} />
                  </IconButton>

                  <IconButton
                    component={NavLink}
                    to="/Cart"
                    color="#000000"
                    sx={{
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
                      "&.active": {
                        color: "red",
                      },
                      "&:hover": {
                        color: "red",
                        background: "transparent",
                      },
                    }}
                  >
                    <ShoppingCartOutlinedIcon fontSize={iconSize} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
       position="sticky"
        sx={{ 
          display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
          "@media (max-width: 991px)": {
            display: "flex",
          },
          alignItems: "flex-end",
          flexDirection: "column",
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "0%",
          }, 
         
          background: "#4c4c4c",
          padding: "20px",
          position: "sticky",
          boxShadow: "0px 4px 2px -2px rgba(0,0,0,0.2)",
        }}
      >
        <Button
          onClick={handleToggleMenu}
          sx={{
            background: "black",
            color: "white",
            padding: "10px",
            width: "fit-content",
            "&:hover": {
              background: "#333",
            },
          }}
        >
          <Typography
            variant="span"
            component="div"
            sx={{
              fontFamily: "jost, sans-serif",
              float: "left",
              color: "#fff",
              fontWeight: "700",
              marginRight: "8px",
            }}
          >
            MENU
          </Typography>
          <MenuIcon />
        </Button>

        <Box
          sx={{
            marginRight: "auto",
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transition: "height 0.3s ease, opacity 0.3s ease",
            overflow: "hidden",
            marginTop: isMenuOpen ? "10px" : "0",
            backgroundColor: "transparent",
            color: "#fff",
            padding: isMenuOpen ? "15px" : "0px",
            width: "200px",
          }}
        >
          <Typography
            sx={{
              paddingBottom: "10px",
              textAlign: "left",
              fontFamily: "jost, sans-serif",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              paddingBottom: "10px",
              textAlign: "left",
              fontFamily: "jost, sans-serif",
            }}
          >
            Men
          </Typography>
          <Typography
            sx={{
              paddingBottom: "10px",
              textAlign: "left",
              fontFamily: "jost, sans-serif",
            }}
          >
            Women
          </Typography>
          <Typography
            sx={{
              paddingBottom: "10px",
              textAlign: "left",
              fontFamily: "jost, sans-serif",
            }}
          >
            Baby Collection
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleTogglePagesDropdown}
          >
            <Typography
              sx={{ paddingBottom: "10px", fontFamily: "jost, sans-serif" }}
            >
              Pages
            </Typography>
            {isPagesDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Box
            sx={{
              height: isPagesDropdownOpen ? "auto" : 0,
              opacity: isPagesDropdownOpen ? 1 : 0,
              visibility: isPagesDropdownOpen ? "visible" : "hidden",
              transition: "height 0.3s ease, opacity 0.3s ease",
              overflow: "hidden",
              paddingLeft: "10px",
            }}
          >
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Login
            </Typography>
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Cart
            </Typography>
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Product Details
            </Typography>
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Product Checkout
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleToggleBlogDropdown}
          >
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Blog
            </Typography>
            {isBlogDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
          <Box
            sx={{
              height: isBlogDropdownOpen ? "auto" : 0,
              opacity: isBlogDropdownOpen ? 1 : 0,
              visibility: isBlogDropdownOpen ? "visible" : "hidden",
              transition: "height 0.3s ease, opacity 0.3s ease",
              overflow: "hidden",
              paddingLeft: "10px",
            }}
          >
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Element
            </Typography>
            <Typography
              sx={{
                paddingBottom: "10px",
                textAlign: "left",
                fontFamily: "jost, sans-serif",
              }}
            >
              Blog Details
            </Typography>
          </Box>

          <Typography
            sx={{
              paddingBottom: "10px",
              textAlign: "left",
              fontFamily: "jost, sans-serif",
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
      <Box  className="discount"
        sx={{
          overflow: "hidden",
          backgroundColor: "#000000",
          color: "#fff",
          padding: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Typography
          sx={{
            marginRight: "5px",
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "jost, sans-serif",
            display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
          }}
        >
          Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
        </Typography>

        <Button
          href="#"
          sx={{
            
            color: "#cebd9c !important",
            fontWeight: 500,
            fontSize: "1rem",
            textTransform: "none",
            textDecoration: "underline",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </>
  );
}

export default NavBarfront;
