import { Dispatch } from "redux"

import { AProjectsFetch } from "./fetch"
import { AProjectsUpdate } from "./update"

import { projectsRequest, projectsSuccess, projectsFailure } from "./fetch"
import { projectsCreate, projectsEdit } from "./update"

export { ProjectActions } from "./types"

export type AProjects = AProjectsFetch | AProjectsUpdate

const projectsFetch = () => (dispatch: Dispatch) => {
  //projectsRequest, projectsSuccess, projectsFailure
}