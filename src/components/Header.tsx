import React from "react"

import { AppBar, Button, Toolbar } from "@mui/material"

import { useNavigate } from "react-router"

export const Header = () => {
  const navigate = useNavigate()
  const handleClickLogo = () => {
    navigate("/")
    // -> home
  }
  return (
    <AppBar position="static">
      <Toolbar sx={style.toolbar}>
        <Button onClick={handleClickLogo} sx={style.logo}>
          Logo
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const style = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color:"white",
    cursor: "pointer"
  }
}