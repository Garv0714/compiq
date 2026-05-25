import type { Metadata } from 'next'

import {
  Geist,
  Geist_Mono,
} from 'next/font/google'

import './globals.css'

import Navbar from '@/components/layout/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CompIQ',
  description:
    'AI-powered compensation intelligence platform built with Next.js, Prisma, PostgreSQL, and analytics-driven compensation insights.',

  keywords: [
    'Compensation Intelligence',
    'Salary Analytics',
    'Next.js Dashboard',
    'AI Analytics',
    'Prisma',
    'PostgreSQL',
    'CompIQ',
  ],

  openGraph: {
    title: 'CompIQ',
    description:
      'Modern compensation analytics platform with AI-powered salary intelligence.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
  data-scroll-behavior="smooth"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white">
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}