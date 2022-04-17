import React from "react"

import { Box } from "@mui/material"

import { Header } from "./Header"

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header/>
    <Box sx={mainStyle}>
      {children}
    </Box>
  </>
)

const mainStyle = {
  padding: "20px",
}