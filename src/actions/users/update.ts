import { ActionCreator } from "redux"

import { UsersActions } from "./types"

import { User } from "../../entities"

type AUsersCreate = { type: UsersActions.USER_CREATE, payload: User }

export const usersCreate: ActionCreator<AUsersCreate> = user => ({
  type: UsersActions.USER_CREATE,
  payload: user
})

export type AUsersUpdate = AUsersCreate // | ...