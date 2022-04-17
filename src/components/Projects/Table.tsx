import React from "react"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useActions } from "react-redux-actions-hook"
import { Grid, CircularProgress, Box } from "@mui/material"

import { Card } from "./Card"

import { projectsFetch, usersFetch } from "../../actions"
import { useUsers, useProjects } from "../../hooks"

export const Table = () => {
  const users = useUsers()
  const projects = useProjects()

  const getUsers = useActions(usersFetch)
  const getProjects = useActions(projectsFetch)
  
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
    getProjects()
  }, [])
  
  if (users.error || projects.error) {
    navigate("../error")
  }

  if (users.loading || projects.loading) {
    return <CircularProgress/>
  }

  return (
    <Grid container spacing={2}>{
      projects.items.map(({ owner, ...other }) => {
        const ownerData = users.items.find(user => user.id === owner)
        
        return (
          <Grid item xs={12} md={3} key={other.id}>
            <Card {...other} ownerName={"Not found"}/>
          </Grid>
        )
      })
    }</Grid>
  )
}