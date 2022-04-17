import { Reducer } from "redux"

import { AProjects, ProjectsActions } from "../actions"
import { Project } from "../entities"

interface ProjectsState {
  loading: boolean,
  error: null | Error,
  items: Project[]
}

const initialState: ProjectsState = {
  loading: true,
  error: null,
  items: []
}

export const updateProjects: Reducer<ProjectsState, AProjects> = (state = initialState, action) => {
  switch (action.type) {
    case ProjectsActions.FETCH_PROJECTS_REQUEST:
      return { items: [], loading: true, error: null }
    case ProjectsActions.FETCH_PROJECTS_SUCCESS:
      return { items: action.payload, loading: false, error: null }
    case ProjectsActions.FETCH_PROJECTS_FAILURE:
      return { items: [], loading: false, error: action.payload }
    case ProjectsActions.PROJECT_CREATE:
      return { ...state, items: [...state.items, action.payload] }
    case ProjectsActions.PROJECT_EDIT: {
      const { payload } = action
      const result = state.items.map(item => item.id === payload.id ? payload : item)
      return { ...state, items: result }
    }
    default:
      return state
  }
}