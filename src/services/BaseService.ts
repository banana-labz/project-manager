import { User, Project } from "../entities"

type PromiseAll<T> = () => Promise<T[]>
type PromiseOne<T> = (id: number) => Promise<T>

export interface BaseService {
  createProject: (name: string, description: string, owner: string) => Promise<Project>
  createUser: (name: string, email: string) => Promise<User>
  editProject: ({ id, name, description, owner }: Project) => Promise<Project>
  getUserById: PromiseOne<User>
  getAllUsers: PromiseAll<User>
  getProjectById: PromiseOne<Project>
  getAllProjects: PromiseAll<Project>
}