import React from "react"

import { useState } from "react"
import { Box, Button } from "@mui/material"

import { List } from "./List"
import { Search } from "./Search"

import { useSwitch } from "../../hooks"
import { CreateProject } from "../../dialogs"
import { Routes } from "react-router-dom"

export const Projects = () => {
  const [searchPattern, setSearchPattern] = useState<string>("")

  const [isCreateProjectModalOpen, openCreateProjectModal , closeCreateProjectModal] = useSwitch(false)
  const [isEditProjectModalOpen, openEditProjectModal , closeEditProjectModal] = useSwitch(false)
  const [isCreateUserModalOpen, openCreateUserModal , closeCreateUserModal] = useSwitch(false)

  return (
    <Box sx={style.container}>
      <Box sx={style.options}>
        <Search pattern={searchPattern} onChange={setSearchPattern}/>
        <Button variant="contained" onClick={openCreateProjectModal}>Create project</Button>
        <Button variant="contained">Create user</Button>
      </Box>
      <List pattern={searchPattern}/>
      <CreateProject open={isCreateProjectModalOpen} onClose={closeCreateProjectModal}/>
    </Box>
  )
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px"
  },
  options: {
    display: "flex",
    flexDirection: "row",
    gap: "10px"
  },
  list: {

  }
}