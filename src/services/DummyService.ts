import { User, Project } from "../entities"
import { BaseService } from "./BaseService"
type PromiseAll<T> = () => Promise<T[]>
type PromiseOne<T> = (id: number) => Promise<T>

export class DummyService implements BaseService {
  private maxDelay: number = 3000
  private errorProbability: number = 0// 0.1
  private errorGet: string = "We didn't manage to get something, sorry"
  private errorPut: string = "We did not update something, sorry"
  private errorPost: string = "We couldn't create something, sorry"
  private users: User[] = [
    { id: 0, name: "ILYA", email: "test@mail.com" },
    { id: 1, name: "EEEE", email: "test_1337@meta.ua" },
    { id: 2, name: "TEST", email: "test123@ukr.net" },
    { id: 3, name: "User228", email: "user228@gmail.com" },
  ]

  private projects: Project[] = [
    { id: 0, name: "First project", owner: 0, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
    { id: 1, name: "Some project", owner: 0, description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." },
    { id: 2, name: "And another one", owner: 1, description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC." },
    { id: 3, name: "Project", owner: 2, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: 4, name: "Project with noticeably larger name", owner: 3, description: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." },
  ]

  private findMaxId = (data: { id: number }[]): number => (
    data.reduce((prev, cur) => (cur.id > prev ? cur.id : prev), -1)
  )

  public createProject = (name: string, description: string, owner: number) => new Promise<Project>(
    (resolve, reject) => {
      if (name && description && owner in this.users) {
        const project = {
          id: this.findMaxId(this.projects) + 1,
          name,
          description,
          owner
        }
        this.projects.push(project)
        resolve(project)
      }
      else {
        reject(new Error(this.errorPost))
      }
    }
  )

  public createUser = (name: string, email: string) => new Promise<User>(
    (resolve, reject) => {
      if (email && name) {
        const user = {
          id: this.findMaxId(this.users) + 1,
          name,
          email
        }
        this.users.push(user)
        resolve(user)
      }
      else {
        reject(new Error(this.errorPost))
      }
    }
  )

  public editProject = ({ id, name, description, owner }: Project) => new Promise<Project>(
    (resolve, reject) => {
      if (id in this.projects) {
        const project = { id, name, description, owner }
        this.projects = this.projects.map(v =>
          v.id === project.id ? project : v
        )
        resolve(project)
      }
      else {
        reject(new Error(this.errorPut))
      }
    }
  )

  private promiseData = <T>(data: T): Promise<T> => new Promise<T>(
    (resolve, reject) => {
      setTimeout(() => {
        Math.random() < this.errorProbability
        ? reject(new Error(this.errorGet))
        : resolve(data)
      }, this.maxDelay * Math.random())
    }
  )

  public getUserById: PromiseOne<User> = (id) => {
    const user = this.users[id]
    return this.promiseData<User>(user)
  }

  public getAllUsers: PromiseAll<User> = () => {
    //
    return this.promiseData<User[]>(this.users)
  }

  public getProjectById: PromiseOne<Project> = (id) => {
    const project = this.projects[id]
    return this.promiseData<Project>(project)
  }

  public getAllProjects: PromiseAll<Project> = () => {
    //
    return this.promiseData<Project[]>(this.projects)
  }
}