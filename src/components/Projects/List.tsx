import React from "react"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useActions } from "react-redux-actions-hook"
import { CircularProgress, Box } from "@mui/material"

import { filter } from "./filter"
import { Card } from "./Card"

import { projectsFetch, usersFetch } from "../../actions"
import { useUsers, useProjects } from "../../hooks"
type ListProps = {
  pattern: string
}

export const List = React.memo(({ pattern }: ListProps) => {
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
    return( 
      <Box sx={style.spinner}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Box sx={style.container}>
      <Card id={-1} name="Project" ownerName="Owner" description="Description"/>
      {filter(projects.items, pattern).map(({ owner, ...other }) => {
        const ownerData = users.items.find((user) => user.id === owner)
        return (
          <Card
            key={other.id}
            {...other}
            ownerName={ownerData?.name || "Not found"}
            action
          />
        )
      })}
    </Box>
  )
})

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  spinner: {
    alignSelf: "center"
  }
}