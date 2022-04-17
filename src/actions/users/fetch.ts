import { ActionCreator } from "redux"

import { UsersActions } from "./types"

import { User } from "../../entities"

type AUsersRequest = { type: UsersActions.FETCH_USERS_REQUEST }
type AUsersSuccess = { type: UsersActions.FETCH_USERS_SUCCESS, payload: User[] }
type AUsersFailure = { type: UsersActions.FETCH_USERS_FAILURE, payload: Error | null }

export const usersRequest: ActionCreator<AUsersRequest> = () => ({
  type: UsersActions.FETCH_USERS_REQUEST
})
export const usersSuccess: ActionCreator<AUsersSuccess> = users => ({
  type: UsersActions.FETCH_USERS_SUCCESS,
  payload: users
})
export const usersFailure: ActionCreator<AUsersFailure> = error => ({
  type: UsersActions.FETCH_USERS_FAILURE,
  payload: error
})

export type AUsersFetch = AUsersRequest | AUsersSuccess | AUsersFailure