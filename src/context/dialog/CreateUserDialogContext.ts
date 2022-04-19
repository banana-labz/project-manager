import { createContext, useContext } from "react"

import { DialogContext } from "./DialogContext"

import initial from "./initial"

export const CreateUserDialogContext = createContext<DialogContext>(initial)

export const useCreateUserDialogContext = () => (
  useContext(CreateUserDialogContext)
)