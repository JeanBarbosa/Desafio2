"use server"

import { Note } from "@/schemas/note"
import { api } from "@/services/api"
import { AxiosCustomError, AxiosCustomResponse } from "@/types/api"

interface fetchNotesResponse {
  notes: Note[]
}

export const fetchNotes = async (): Promise<
  AxiosCustomResponse<fetchNotesResponse>
> => {
  try {
    const response = await api.get<fetchNotesResponse>("/notes")
    const { data } = response

    return { data }
  } catch (err) {
    const error = err as AxiosCustomError

    return {
      error: error.response.data.message || "Erro, tente novamente mais tarde.",
    }
  }
}
