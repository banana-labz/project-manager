import { combineReducers } from "redux"

import { updateProjects } from "./projects"
import { updateUsers } from "./users"

export const reducer = combineReducers({
  projects: updateProjects,
  users: updateUsers
})