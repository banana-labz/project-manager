import { createContext, useContext } from "react"

import { DialogContext } from "./DialogContext"

export const EditProjectDialogContext = createContext<DialogContext & { id: number, setId: (id: number) => void }>({
  isOpen: false,
  onClose: () => { },
  onOpen: () => { },
  id: 0,
  setId: (i: number) => { }
})

export const useEditProjectDialogContext = () => (
  useContext(EditProjectDialogContext)
)