import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/layout/dashboard/dashboard"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { fetchNotes } from "@/requests/notes/fetchNotes"
import ListNotes from "./list-notes"

export default async function Page() {
  const notes = await fetchNotes()

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <DashboardPageHeaderNav>
            <Button variant="outline" size="sm">
              <PlusIcon className="mr-3 h-4 w-4" />
              Criar tarefa
            </Button>
          </DashboardPageHeaderNav>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <ListNotes notes={notes} />
      </DashboardPageMain>
    </DashboardPage>
  )
}
