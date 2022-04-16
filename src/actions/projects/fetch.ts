import { ActionCreator } from "redux"

import { ProjectActions } from "./types"

import { Project } from "../../entities"

type AProjectsRequest = { type: ProjectActions.FETCH_PROJECTS_REQUEST }
type AProjectsSuccess = { type: ProjectActions.FETCH_PROJECTS_SUCCESS, payload: Project[] }
type AProjectsFailure = { type: ProjectActions.FETCH_PROJECTS_FAILURE, payload: Error | null }

export const projectsRequest: ActionCreator<AProjectsRequest> = () => ({
  type: ProjectActions.FETCH_PROJECTS_REQUEST
})
export const projectsSuccess: ActionCreator<AProjectsSuccess> = projects => ({
  type: ProjectActions.FETCH_PROJECTS_SUCCESS,
  payload: projects
})
export const projectsFailure: ActionCreator<AProjectsFailure> = error => ({
  type: ProjectActions.FETCH_PROJECTS_FAILURE,
  payload: error
})

export type AProjectsFetch = AProjectsRequest | AProjectsSuccess | AProjectsFailure