"use client"

import { fetchNotes } from "@/requests/notes/fetchNotes"
import { Note } from "@/schemas/note"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ListNotes({ notes }: { notes: any }) {
  const { data } = useQuery({
    queryKey: ["initial-notes"],
    queryFn: () => fetchNotes(),
    initialData: notes,
    staleTime: 5 * 1000,
  })

  return (
    <>
      {
        <div>
          {data.data.map((note: any) => (
            <div key={note.id} className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">{note.title}</Label>
            </div>
          ))}
        </div>
      }
    </>
  )
}
