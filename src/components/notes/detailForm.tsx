import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Note } from '@/schemas/note'
import { useState } from 'react'
import { UpdateForm } from './updateForm'



export function DetailForm({note}: {note: Note}) {

  const [isEditing, setIsEditing] = useState(false)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="absolute right-9 p-1 mt-1 text-blue-400 fill-current select-none cursor-pointer hover:bg-blue-200 hover:rounded-lg active:bg-blue-400
                    fa fa-trash"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 17V11"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <circle
                cx="1"
                cy="1"
                r="1"
                transform="matrix(1 0 0 -1 11 9)"
                fill="#1C274C"
              ></circle>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent>
        
        <SheetHeader>
          <SheetTitle>{note.title}</SheetTitle>
          <SheetDescription>
            {note.description}
          </SheetDescription>
        </SheetHeader> 
        <SheetFooter>
            
        {isEditing ?  <UpdateForm note={note} /> : 
        <Button onClick={()=> setIsEditing(!isEditing)} variant="outline" type="submit">Editar</Button>  }
        </SheetFooter>

      </SheetContent>
    </Sheet>
  )
}
