import React from "react"

import { Button } from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

import { ModalProps } from "./ModalProps"

export const CreateUser = ({ open, onClose }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle id="alert-dialog-title">
        New project
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This is like the content of dialog, you know, yeah.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="error">
          Cancel
        </Button>
        <Button onClick={onClose} variant="contained" color="success">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}