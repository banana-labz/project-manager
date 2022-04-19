import React from "react"

import { useState } from "react"
import { Box, Button } from "@mui/material"

import { List } from "./List"
import { Search } from "./Search"

import {
  useCreateProjectDialogContext, 
  useCreateUserDialogContext
} from "../../context"

import { CreateProject, EditProject, CreateUser } from "../../dialogs"

export const Projects = () => {
  const [searchPattern, setSearchPattern] = useState<string>("")

  const { onOpen: openCreateProjectDialog } = useCreateProjectDialogContext()
  const { onOpen: openCreateUserDialog } = useCreateUserDialogContext()

  return (
    <Box sx={style.container}>
      <Box sx={style.options}>
        <Search pattern={searchPattern} onChange={setSearchPattern}/>
        <Button variant="contained" onClick={openCreateProjectDialog}>Create project</Button>
        <Button variant="contained" onClick={openCreateUserDialog}>Create user</Button>
      </Box>
      <List pattern={searchPattern}/>
      <CreateProject/>
      <EditProject/>
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