import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fia Mad F1 Championship',
  description: 'FiaMadF1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} bg-slate-800 min-h-screen`}>
        <Navbar />
        <main className='container m-auto p-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
