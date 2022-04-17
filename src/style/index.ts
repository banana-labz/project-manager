import "./base.css"

import { createTheme } from "@mui/material/styles"
import { palette } from "./palette"
import { breakpoints } from "./breakpoints"
import { typography } from "./typography"
import { shape } from "./shape"

const theme = createTheme({
  breakpoints,
  palette,
  typography,
  shape,
})

export default theme