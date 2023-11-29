import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './api/components/Nav'
import Hero from './api/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Nav/>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-pink-200 ${inter.className}`}
    >
      <Hero/>
    </main>
  </div>
  )
}
