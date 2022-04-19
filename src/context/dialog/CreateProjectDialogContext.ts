import { createContext, useContext } from "react"

import { DialogContext } from "./DialogContext"

import initial from "./initial"

export const CreateProjectDialogContext = createContext<DialogContext>(initial)

export const useCreateProjectDialogContext = () => (
  useContext(CreateProjectDialogContext)
)