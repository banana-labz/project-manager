import { User, Project } from "../entities"

type PromiseAll<T> = () => Promise<T[]>
type PromiseOne<T> = (id: number) => Promise<T>

export interface BaseService {
  isEmailUnique: (email: string) => Promise<boolean>
  createProject: (name: string, description: string, owner: string) => Promise<Project>
  createUser: (name: string, email: string) => Promise<User>
  editProject: ({ id, name, description, owner }: Omit<Project, "owner"> & { owner: string }) => Promise<Project>
  getUserById: PromiseOne<User>
  getAllUsers: PromiseAll<User>
  getProjectById: PromiseOne<Project>
  getAllProjects: PromiseAll<Project>
}