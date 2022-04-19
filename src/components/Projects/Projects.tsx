import React from "react"

import { useState } from "react"
import { Box, Button } from "@mui/material"

import { List } from "./List"
import { Search } from "./Search"

import {
  useCreateProjectModalContext, 
  useEditProjectModalContext,
  useCreateUserModalContext
} from "../../context"

import { CreateProject } from "../../dialogs"
import { CreateUser } from "../../dialogs/CreateUser"


export const Projects = () => {
  const [searchPattern, setSearchPattern] = useState<string>("")

  const { onOpen: openCreateProjectModal } = useCreateProjectModalContext()
  const { onOpen: openCreateUserModal } = useCreateUserModalContext()

  return (
    <Box sx={style.container}>
      <Box sx={style.options}>
        <Search pattern={searchPattern} onChange={setSearchPattern}/>
        <Button variant="contained" onClick={openCreateProjectModal}>Create project</Button>
        <Button variant="contained" onClick={openCreateUserModal}>Create user</Button>
      </Box>
      <List pattern={searchPattern}/>
      <CreateProject/>
      <CreateUser/>
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