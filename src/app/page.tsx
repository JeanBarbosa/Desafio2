import { NavBar } from '@/components/navbar/navbar'
import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { Others } from '@/components/sections/Others'

export default function Home() {
    
  return (
    <main>
        <NavBar />
        <Header />
        <Others />
        <Footer />
    </main>
  )
}
