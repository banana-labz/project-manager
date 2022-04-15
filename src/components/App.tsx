import React from "react"

import { ThemeProvider } from "@mui/material/styles"

import theme from "../style"
import { Typography } from "@mui/material"

const App = () => (
  <ThemeProvider theme={theme}>
    <Typography>Test App</Typography>
  </ThemeProvider>
)

export default App