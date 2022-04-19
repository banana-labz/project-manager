import React from "react"

import { useState, useEffect } from "react"
import { useActions } from "react-redux-actions-hook"
import { Button, TextField } from "@mui/material"
import { Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

import { useUsers, useProjects } from "../hooks"
import { projectsEdit } from "../actions"
import { useEditProjectDialogContext } from  "../context"

import service from "../services"

const initialName = ""
const initialDescription = ""
const initialOwner = ""

export const EditProject = () => {
  const [name, setName] = useState<string>(initialName)
  const [description, setDescription] = useState<string>(initialDescription)
  const [owner, setOwner] = useState<string>(initialOwner)
  const { items: projects } = useProjects()
  const { items: users } = useUsers()
  const { isOpen, onClose, id } = useEditProjectDialogContext()
  //
  useEffect(() => {
    if (isOpen) {
      const project = projects.find(project => project.id === id)
      if (project) {
        setName(project.name)
        setDescription(project.description)

        const user = users.find(user => user.id === project.owner)
        if (user) {
          setOwner(user.name)
        }
      }
    }
  }, [isOpen])
  //
  const editProject = useActions(projectsEdit)
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
    if (id && name && description && owner) {
      service.editProject({ id, name, description, owner }).then(editProject)
      handleClose()
    }
  }
  //

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit project</DialogTitle>
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
          multiline
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