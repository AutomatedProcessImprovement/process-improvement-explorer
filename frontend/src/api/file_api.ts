import {API_instance} from "../axios";

export const getProjectFileForDownload = async (file_path: string) => {
  return await API_instance.get(
    `/api/pix/files/`, {
      params: {
        file_path: file_path
      }
    }
  )
}
export const editExistingFileTitle = async (fileId: number, name: string) => {
  const formData = new FormData()
  formData.append('file_id', fileId)
  formData.append('name', name)
  return await API_instance.put(
    `/api/pix/files/`,
    formData
  )
}
export const removeProjectFile = async (fid: number) => {
  return await API_instance.delete(
    `/api/pix/files/${fid}`,
  )
}
export const uploadFile = async (file: File, tag: string, projectId: number) => {
  const formData = new FormData()
  formData.append('tag', tag)
  formData.append('project_id', projectId)
  formData.append('file', file)
  return await API_instance.post(
    `/api/pix/files/`,
    formData
  )
}