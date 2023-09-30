import type { Metadata } from 'next'
import { Inter, Kenia } from 'next/font/google'
import Navbar from './_components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const kenia = Kenia({ weight: '400', variable: '--font-logo', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKC',
  description: 'Madrid Kart Championship: Campeonato de karting de risas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} ${kenia.variable} bg-slate-800 min-h-screen text-slate-300`}>
        <Navbar />
        <main className='container m-auto p-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
