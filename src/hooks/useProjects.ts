import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useProjects = () => (
  useSelector<RootState, RootState["projects"]>(state => state.projects)
)