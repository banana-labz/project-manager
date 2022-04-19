import React from "react"

import { useState } from "react"

import { useSwitch } from "../hooks"

import { Layout } from "../components/Layout"
import { Projects } from "../components/Projects"
import { CreateProjectModalContext, EditProjectModalContext, CreateUserModalContext } from "../context"


export const ProjectsPage = () => {
  const [isCreateProjectModalOpen, openCreateProjectModal , closeCreateProjectModal] = useSwitch(false)
  
  const [isEditProjectModalOpen, openEditProjectModal , closeEditProjectModal] = useSwitch(false)
  const [editedProjectId, setEditedProjectId] = useState<number>(0)
  
  const [isCreateUserModalOpen, openCreateUserModal , closeCreateUserModal] = useSwitch(false)

  const createProjectContextValue = {
    isOpen: isCreateProjectModalOpen,
    onOpen: openCreateProjectModal,
    onClose: closeCreateProjectModal
  }

  const editProjectContextValue = {
    isOpen: isEditProjectModalOpen,
    onOpen: openEditProjectModal,
    onClose: closeEditProjectModal,
    
    id: editedProjectId,
    setId: setEditedProjectId
  }
  // first you set id, then you open it

  const createUserContextValue = {
    isOpen: isCreateUserModalOpen,
    onOpen: openCreateUserModal,
    onClose: closeCreateUserModal
  }

  return (
    <Layout padding="10px 15% 10px 15%">
      <CreateProjectModalContext.Provider value={createProjectContextValue}>
        <EditProjectModalContext.Provider value={editProjectContextValue}>
          <CreateUserModalContext.Provider value={createUserContextValue}>
            <Projects/>
          </CreateUserModalContext.Provider>
        </EditProjectModalContext.Provider>
      </CreateProjectModalContext.Provider>
    </Layout>
  )
}

export default ProjectsPage