import React from 'react'
import NavBarfront from './reusecomponent/headercomponent/NavBarfront'
import Footer from './reusecomponent/footercomponent/Footer'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';

function Layout() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    //   overflow: 'hidden', 
      p: 0,              
      m: 0,              
      w: '100%',        
    }}
  >
    <NavBarfront />
    <Box sx={{ flex: 1, overflow: 'auto' }}>
      <Outlet />
    </Box>
    <Footer />
  </Box>
  )
}

export default Layout