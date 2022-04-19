import React from "react"

import { useState } from "react"

import { useSwitch } from "../hooks"

import { Layout } from "../components/Layout"
import { Projects } from "../components/Projects"
import { CreateProjectDialogContext, EditProjectDialogContext, CreateUserDialogContext } from "../context"


export const ProjectsPage = () => {
  const [isCreateProjectDialogOpen, openCreateProjectDialog , closeCreateProjectDialog] = useSwitch(false)
  
  const [isEditProjectDialogOpen, openEditProjectDialog , closeEditProjectDialog] = useSwitch(false)
  const [editedProjectId, setEditedProjectId] = useState<number>(0)
  
  const [isCreateUserDialogOpen, openCreateUserDialog , closeCreateUserDialog] = useSwitch(false)

  const createProjectContextValue = {
    isOpen: isCreateProjectDialogOpen,
    onOpen: openCreateProjectDialog,
    onClose: closeCreateProjectDialog
  }

  const editProjectContextValue = {
    isOpen: isEditProjectDialogOpen,
    onOpen: openEditProjectDialog,
    onClose: closeEditProjectDialog,
    
    id: editedProjectId,
    setId: setEditedProjectId
  }
  // first you set id, then you open it

  const createUserContextValue = {
    isOpen: isCreateUserDialogOpen,
    onOpen: openCreateUserDialog,
    onClose: closeCreateUserDialog
  }

  return (
    <Layout padding="10px 15% 10px 15%">
      <CreateProjectDialogContext.Provider value={createProjectContextValue}>
        <EditProjectDialogContext.Provider value={editProjectContextValue}>
          <CreateUserDialogContext.Provider value={createUserContextValue}>
            <Projects/>
          </CreateUserDialogContext.Provider>
        </EditProjectDialogContext.Provider>
      </CreateProjectDialogContext.Provider>
    </Layout>
  )
}

export default ProjectsPage