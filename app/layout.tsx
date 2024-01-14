import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600'
})

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`${process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined}`}>{children}</body>
    </html>
  )
}
