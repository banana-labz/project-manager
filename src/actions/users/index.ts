import { Dispatch } from "redux"

import { AUsersFetch } from "./fetch"
import { AUsersUpdate } from "./update"

import { usersRequest, usersSuccess, usersFailure } from "./fetch"

import service from "../../services"

export { UsersActions } from "./types"

export type AUsers = AUsersFetch | AUsersUpdate

export const usersFetch = () => (dispatch: Dispatch<AUsers>) => {
  dispatch(usersRequest())
  service.getAllUsers()
    .then(data => dispatch(usersSuccess(data)))
    .catch(err => dispatch(usersFailure(err)))
}

export { usersCreate } from "./update"