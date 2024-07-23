"use server"

import { Note } from "@/schemas/note"
import { api } from "@/services/api"
import { AxiosCustomError, AxiosCustomResponse } from "@/types/api"

interface fetchNotesResponse {
  note: Note
}

export const updateNote = async ({
  id,
  title,
  description,
}: Omit<Note, | "createdAt" | "userId">): Promise<
  AxiosCustomResponse<fetchNotesResponse>
> => {
  try {
    const response = await api.put<fetchNotesResponse>(`/notes/${id}`, {
      title,
      description,
    })
    const { data } = response

    return { data }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || "Erro, tente novamente mais tarde.",
    }
  }
}
