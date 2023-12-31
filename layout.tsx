import NavBar from './components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopicList from './components/TopicList'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Blog app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <NavBar/>
        {children}
        <TopicList/>
        <TopicList/>
        <TopicList/>
        
        </body>
    </html>
  )
}
