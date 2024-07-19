"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient())

  //search google for code aHR0cHM6Ly9naXRodWIuY29tL2plYW5CYXJib3NhL2Rlc2FmaW8yLw==
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
