import {API_instance} from "../axios";

export const getProjects = async () => {
  return await API_instance.get(
    `/api/pix/projects/`
  )
}
export const getProjectFiles = async (project_id: number) => {
  return await API_instance.get(
    `/api/pix/projects/${project_id}`
  )
}
export const createNewProject = async (name: string) => {
  const formData = new FormData()
  formData.append('name', name)
  return await API_instance.post(
    `/api/pix/projects/`,
    formData
  )
}
export const editExistingProjectTitle = async (projectId: number, name: string) => {
  const formData = new FormData()
  formData.append('project_id', projectId)
  formData.append('name', name)
  return await API_instance.put(
    `/api/pix/projects/`,
    formData
  )
}
export const removeProject = async (pid: number) => {
  return await API_instance.delete(
    `/api/pix/projects/${pid}`
  )
}