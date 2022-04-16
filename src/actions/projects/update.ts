import { ActionCreator } from "redux"

import { ProjectActions } from "./types"

import { Project } from "../../entities"

type AProjectsCreate = { type: ProjectActions.PROJECT_CREATE, payload: Project }
type AProjectsEdit = { type: ProjectActions.PROJECT_EDIT, payload: Project }

export const projectsCreate: ActionCreator<AProjectsCreate> = project => ({
  type: ProjectActions.PROJECT_CREATE,
  payload: project
})
export const projectsEdit: ActionCreator<AProjectsEdit> = project => ({
  type: ProjectActions.PROJECT_EDIT,
  payload: project
})

export type AProjectsUpdate = AProjectsCreate | AProjectsEdit