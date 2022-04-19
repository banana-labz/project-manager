import React, { useEffect } from "react"


import { useState } from "react"
import { useActions } from "react-redux-actions-hook"
import { Button, InputLabel, TextField, FormControl, FormHelperText, Input } from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

import { useUsers } from "../hooks"
import { useCreateUserModalContext } from  "../context"
import { usersCreate } from "../actions"

import service from "../services"

const initialName = ""
const initialEmail = ""

export const CreateUser = () => {
  const [name, setName] = useState<string>(initialName)
  
  const [email, setEmail] = useState<string>(initialEmail)
  const [emailError, setEmailError] = useState<null | string>(null)
  //test@mail.com this one is not unique 
  const { isOpen, onClose } = useCreateUserModalContext()
  //
  const createUser = useActions(usersCreate)
  const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError(!event.target.validity.valid ? "Invalid email" : null)
    setEmail(event.target.value)
  }
  const handleClose = () => {
    setName(initialName)
    setEmail(initialEmail)
    setEmailError(null)
    onClose()
  }
  const handleSave = () => {
    service.isEmailUnique(email).then(isUnique => {
      if (!isUnique) {
        setEmailError("Email is not unique")
        return
      }
      
      if (name && email && !emailError) {
        service.createUser(name, email).then(createUser)
        handleClose()
      }
    })
  }
  //
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>New user</DialogTitle>
      <DialogContent sx={style.content}>
        <TextField 
          label="Name"
          placeholder="Svetlana"
          variant="outlined"
          value={name}
          onChange={handleSetName}
        />
        <TextField
          id="email-input"
          label="Email"
          type="email"
          placeholder="your_email@mail.com"
          value={email}
          error={!!emailError}
          helperText={emailError}
          onChange={handleSetEmail}
        />
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
    gap: "10px",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
    padding: "24px"
  },
}