import { User, Project } from "../entities"

type PromiseAll<T> = () => Promise<T[]>
type PromiseOne<T> = (id: number) => Promise<T>

class DummyService {
  private maxDelay: number = 3000
  private errorProbability: number = 0.1
  private errorMessage: string = "Some error happened, sorry."
  private users: User[] = []
  private projects: Project[] = []

  private promiseData = <T>(data: T): Promise<T> => new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        Math.random() < this.errorProbability
        ? reject(new Error(this.errorMessage))
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