import { useSelector } from "react-redux"
import { RootState } from "../store"

export const useUsers = () => (
  useSelector<RootState>(state => state.users)
)