import { Dispatch } from "redux"

import { AProjectsFetch } from "./fetch"
import { AProjectsUpdate } from "./update"

import { projectsRequest, projectsSuccess, projectsFailure } from "./fetch"

import service from "../../services"

export { ProjectsActions } from "./types"

export type AProjects = AProjectsFetch | AProjectsUpdate

export const projectsFetch = () => (dispatch: Dispatch<AProjects>) => {
  dispatch(projectsRequest())
  service.getAllProjects()
    .then(data => dispatch(projectsSuccess(data)))
    .catch(err => dispatch(projectsFailure(err)))
}

export { projectsCreate, projectsEdit } from "./update"