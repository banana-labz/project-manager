import { ActionCreator } from "redux"

import { ProjectsActions } from "./types"

import { Project } from "../../entities"

type AProjectsRequest = { type: ProjectsActions.FETCH_PROJECTS_REQUEST }
type AProjectsSuccess = { type: ProjectsActions.FETCH_PROJECTS_SUCCESS, payload: Project[] }
type AProjectsFailure = { type: ProjectsActions.FETCH_PROJECTS_FAILURE, payload: Error | null }

export const projectsRequest: ActionCreator<AProjectsRequest> = () => ({
  type: ProjectsActions.FETCH_PROJECTS_REQUEST
})
export const projectsSuccess: ActionCreator<AProjectsSuccess> = projects => ({
  type: ProjectsActions.FETCH_PROJECTS_SUCCESS,
  payload: projects
})
export const projectsFailure: ActionCreator<AProjectsFailure> = error => ({
  type: ProjectsActions.FETCH_PROJECTS_FAILURE,
  payload: error
})

export type AProjectsFetch = AProjectsRequest | AProjectsSuccess | AProjectsFailure