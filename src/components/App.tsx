import React from "react"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"

import ProjectsPage from "../pages/Projects"
import theme from "../style"

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/projects"/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)

export default App