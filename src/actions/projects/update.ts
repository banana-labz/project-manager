import { ActionCreator } from "redux"

import { ProjectsActions } from "./types"

import { Project } from "../../entities"

type AProjectsCreate = { type: ProjectsActions.PROJECT_CREATE, payload: Project }
type AProjectsEdit = { type: ProjectsActions.PROJECT_EDIT, payload: Project }

export const projectsCreate: ActionCreator<AProjectsCreate> = project => ({
  type: ProjectsActions.PROJECT_CREATE,
  payload: project
})
export const projectsEdit: ActionCreator<AProjectsEdit> = project => ({
  type: ProjectsActions.PROJECT_EDIT,
  payload: project
})

export type AProjectsUpdate = AProjectsCreate | AProjectsEdit