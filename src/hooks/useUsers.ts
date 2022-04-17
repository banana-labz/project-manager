import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useUsers = () => (
  useSelector<RootState, RootState["users"]>(state => state.users)
)