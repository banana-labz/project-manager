import React from "react"

import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"

import ProjectsPage from "../pages/Projects"
import ErrorPage from "../pages/Error"

import store from "../store"
import theme from "../style"

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/projects"/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="error" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
)
 
export default App