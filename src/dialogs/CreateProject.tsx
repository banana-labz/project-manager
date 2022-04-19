import React from "react"

import { useState } from "react"
import { useActions } from "react-redux-actions-hook"
import { Button, TextField } from "@mui/material"
import { Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

import { useUsers } from "../hooks"
import { projectsCreate } from "../actions"
import { useCreateProjectModalContext } from  "../context"

import service from "../services"

const initialName = ""
const initialDescription = ""
const initialOwner = ""

export const CreateProject = () => {
  const [name, setName] = useState<string>(initialName)
  const [description, setDescription] = useState<string>(initialDescription)
  const [owner, setOwner] = useState<string>(initialOwner)
  const { items: users, loading } = useUsers()
  const { isOpen, onClose } = useCreateProjectModalContext()
  //
  const createProject = useActions(projectsCreate)
  const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleSetOwner = (event: SelectChangeEvent) => {
    setOwner(event.target.value)
  }
  const handleSetDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }
  const handleClose = () => {
    setName(initialName)
    setDescription(initialDescription)
    setOwner(initialOwner)
    onClose()
  }
  const handleSave = () => {
    if (!loading && name && description && owner) {
      service.createProject(name, description, owner).then(createProject)
      handleClose()
    }
  }
  //

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>New project</DialogTitle>
      <DialogContent sx={style.content}>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={handleSetName}
        />
        <TextField
          label="Description"
          type="text"
          value={description}
          onChange={handleSetDescription}
        />
        <Select value={owner} onChange={handleSetOwner}>{
          users.map(({ name }, i) =>
            <MenuItem
              key={i}
              value={name}
              children={name}
            />
          )
        }</Select>
      </DialogContent>
      <DialogActions sx={style.actions}>
        <Button onClick={handleClose} variant="contained" color="error">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="success">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px"
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
    padding: "24px"
  }
}