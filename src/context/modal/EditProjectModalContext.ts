import { createContext, useContext } from "react"

import { ModalContext } from "./ModalContext"

interface EditProjectModalContext extends ModalContext {
  id: number,
  setId: (id: number) => void
}

const initialContexet = {
  isOpen: false,
  onClose: () => { },
  onOpen: () => { },

  id: 0,
  setId: (i: number) => { }
}

export const EditProjectModalContext = createContext<EditProjectModalContext>(initialContexet)

export const useEditProjectModalContext = () => (
  useContext(EditProjectModalContext)
)