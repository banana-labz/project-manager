import { createContext, useContext } from "react"

import { ModalContext } from "./ModalContext"

import initialEditProjectModalContext from "./initial"

export const EditProjectModalContext = createContext<ModalContext>(initialEditProjectModalContext)

export const useEditProjectModalContext = () => (
  useContext(EditProjectModalContext)
)