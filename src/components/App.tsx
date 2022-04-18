import React from "react"

import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"

import store from "../store"
import ProjectsPage from "../pages/Projects"
import theme from "../style"

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/projects"/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
)
 
export default App