
import { fetchNotes } from "@/requests/notes/fetchNotes"
import ListNotes from "./list-notes"
import { AddForm } from "@/components/notes/addForm"
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/layout/dashboard/dashboard"

export default async function Page() {
  const notes = await fetchNotes()

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>
          <DashboardPageHeaderNav>
            <AddForm />
          </DashboardPageHeaderNav>
        </DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <ListNotes notes={notes} />
      </DashboardPageMain>
    </DashboardPage>
  )
}
