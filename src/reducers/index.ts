import { combineReducers } from "redux"

import { updateProjects } from "./projects"

export const reducer = combineReducers({
  projects: updateProjects,
  //
})