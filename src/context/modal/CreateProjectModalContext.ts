import { createContext, useContext } from "react"

import { ModalContext } from "./ModalContext"

import initialCreateProjectModalContext from "./initial"

export const CreateProjectModalContext = createContext<ModalContext>(initialCreateProjectModalContext)

export const useCreateProjectModalContext = () => (
  useContext(CreateProjectModalContext)
)