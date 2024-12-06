import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Scrolltotop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  //first way
  // const handleScroll = () => {
  //     if (window.pageYOffset > 300) {
  //         setShowScrollTopButton(true);
  //     } else {
  //         setShowScrollTopButton(false)
  //     }
  //   };
  // useEffect(()=> {
  //     window.addEventListener('scroll', handleScroll);
  // return () => {
  //   window.removeEventListener('scroll', handleScroll);
  // };

  // },[])
  //alternate way
  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.5; // 50% of the screen height
    if (window.pageYOffset > scrollThreshold) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollTopButton && (
        <Box
          sx={{
            position: "sticky",
            bottom: "20px",
            right: "20px",
            display: "flex",
            justifyContent: "flex-end",
            zIndex: 1000,
          }}
        >
          <IconButton
            onClick={scrollTop}
            sx={{
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                backgroundColor: "darkred",
              },
              position: "fixed",
              right: "20px",
              bottom: "20px",
              animation: "moveUpDown 2s ease-in-out infinite",
              "@keyframes moveUpDown": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          >
            <ArrowForwardIosIcon
              fontSize="medium"
              sx={{
                transform: "rotate(-90deg)", 
              }}
            />
          </IconButton>
        </Box>
      )}
    </>
  );
}

export default Scrolltotop;
