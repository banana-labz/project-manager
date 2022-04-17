import { Reducer } from "redux"

import { AUsers, UsersActions } from "../actions"
import { User } from "../entities"

interface UsersState {
  loading: boolean,
  error: null | Error,
  items: User[]
}

const initialState: UsersState = {
  loading: true,
  error: null,
  items: []
}

export const updateUsers: Reducer<UsersState, AUsers> = (state = initialState, action) => {
  switch (action.type) {
    case UsersActions.FETCH_USERS_REQUEST:
      return { items: [], loading: true, error: null }
    case UsersActions.FETCH_USERS_SUCCESS:
      return { items: action.payload, loading: false, error: null }
    case UsersActions.FETCH_USERS_FAILURE:
      return { items: [], loading: false, error: action.payload }
    case UsersActions.USER_CREATE:
      return { ...state, items: [...state.items, action.payload] }
    default:
      return state
  }
}