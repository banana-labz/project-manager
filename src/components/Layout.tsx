import React from "react"

import { Box } from "@mui/material"
import { CSSProperties } from "@mui/styled-engine"

import { Header } from "./Header"


type LayoutProps = {
  children: React.ReactNode,
  padding?: CSSProperties["padding"]
}

export const Layout = ({ padding, children }: LayoutProps) => (
  <>
    <Header/>
    <Box sx={{ padding: padding || "20px" }}>
      {children}
    </Box>
  </>
)