"use server"

import { api } from "@/services/api"
import { AxiosCustomError } from "@/types/api"

export const deleteNote = async ({ noteId }: { noteId: string }) => {
  try {
    await api.delete<void>(`/notes/${noteId}`)
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || "Erro, tente novamente mais tarde.",
    }
  }
}
