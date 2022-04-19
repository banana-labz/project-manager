import service from "./"

service.getAllProjects().then(console.log)
service.getProjectById(3).then(console.log)

service.getAllUsers().then(console.log)
service.getUserById(0).then(console.log)

service.createProject("project1", "testproj", "ILYA").then(console.log)
service.createUser("therion", "strike201420141@gmail.com").then(console.log)

service.editProject({ id: 2, name: "Project2", description: "description2", owner: "EEEE" }).then(console.log)
service.isEmailUnique("email1@mail.com")