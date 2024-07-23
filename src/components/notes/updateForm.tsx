"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  DialogFooter,
} from "@/components/ui/dialog"
import { Note } from '@/schemas/note'
import { updateNote } from '@/requests/notes/updateNote'

const formSchema = z.object({
  title: z.string({ required_error: "Título é obrigatório" })
  .min(3, "mínimo 3 caracteres"),
  description: z.string()
})

type FormValues = z.infer<typeof formSchema>

export function UpdateForm({note}: {note:Note}) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors },
} = useForm<FormValues>({
    reValidateMode: 'onChange',
    defaultValues: note,
    resolver: zodResolver(formSchema)
  })
  
  const handleFormSubmit = async (data: FormValues) => {
    setIsLoading(true)

    try {
      
    updateNote({
      id: note.id,
      title: data.title,
      description: data.description,
    })
    toast({
      title: 'Sucesso!',
      description: 'Tarefa criada com sucesso!!',
    })
    setOpen(false)
    } catch (error) {
      toast({
        title: 'Erro interno',
        description: 'Ocorreu um erro interno, tente novamente mais tarde',
        variant:"destructive"
      })
    }
  }

  return (
    <>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Título 
            </Label>
            <div className='col-span-3'>
            <Input
              id="title"
              placeholder="Título da tarefa"
              defaultValue={note.title}
              maxLength={80}
              {...register("title")}
            />
            {errors.title && <span className='w-full text-red-400 text-xs'>{errors.title.message}</span>}
            </div>
         
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>

            <Textarea
              id="description"
              className="col-span-3"
              placeholder="Breve descrição da tarefa"
              maxLength={500}
              defaultValue={note.description}
              {...register("description")}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            Salvar
          </Button>
        </DialogFooter>
        </form>
      </>
  )
}
