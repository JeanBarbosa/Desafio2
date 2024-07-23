"use client"

import React from "react"
import { fetchNotes } from "@/requests/notes/fetchNotes"
import { useQuery } from "@tanstack/react-query"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { DetailForm } from "@/components/notes/detailForm"
import { DeleteForm } from "@/components/notes/deleteForm"
import { CheckSquareIcon } from "lucide-react"

export default function ListNotes({ notes }: { notes: any }) {
  const { data } = useQuery({
    queryKey: ["initial-notes"],
    queryFn: () => fetchNotes(),
    initialData: notes,
    staleTime: 5 * 1000,
  })

  return (
    <div className="flex items-center justify-center font-medium">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600">
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-3/4">
          <div className="flex items-center mb-6">
            <CheckSquareIcon className="w-8 h-8 text-gray-400" />
            <h4 className="font-semibold ml-3 text-lg">Tarefas</h4>
          </div>
          

          {data.data.length == 0 && <span className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"> 
            Nenhuma tarefa foi adicionado ainda...
             </span>}

          {
            <div className="relative">
              {data.data.map((note: any) => (
                <div key={note.id}>
                  <DetailForm />
                  <DeleteForm noteId={note.id} />
                  <input
                    className="hidden"
                    type="checkbox"
                    id={`note-${note.id}`}
                  />
                  <label
                    className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
                    htmlFor={`note-${note.id}`}
                  >
                    <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="ml-4 text-sm">{note.title}</span>
                  </label>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
