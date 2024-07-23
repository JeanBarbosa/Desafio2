"use client"

import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { addNote } from "@/requests/notes/addNote"
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const formSchema = z.object({
  title: z.string({ required_error: "Título é obrigatório" })
  .min(3, "mínimo 3 caracteres"),
  description: z.string()
})

type FormValues = z.infer<typeof formSchema>

export function AddForm() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors },
} = useForm<FormValues>({
    reValidateMode: 'onChange',
    resolver: zodResolver(formSchema)
  })
  
  const handleFormSubmit = async (data: FormValues) => {
    setIsLoading(true)

    try {
      
    addNote({
      title: data.title,
      description: data.description,
    })
    setOpen(false)
    } catch (error) {
      toast({
        title: 'Erro interno',
        description: 'Ocorreu um erro interno, tente novamente mais tarde'
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon className="mr-3 h-4 w-4" />
          Criar tarefa
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Tarefa</DialogTitle>
          <DialogDescription>
            Descreva a sua tarefa aqui. Clique em salvar quando estiver feito.
          </DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  )
}
