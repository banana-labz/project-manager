import { createContext, useContext } from "react"

import { ModalContext } from "./ModalContext"

import initialCreateUserModalContext from "./initial"

export const CreateUserModalContext = createContext<ModalContext>(initialCreateUserModalContext)

export const useCreateUserModalContext = () => (
  useContext(CreateUserModalContext)
)