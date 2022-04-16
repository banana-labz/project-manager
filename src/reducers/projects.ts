import { AnyAction, Reducer } from "redux"

import { Project } from "../entities"

interface ProjectsState {
  loading: boolean,
  error: null | Error,
  items: Project[]
}

const initialOrder: ProjectsState = {
  loading: true,
  error: null,
  items: []
}

export const updateProjects: Reducer<ProjectsState, AnyAction> = (state = initialOrder, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}