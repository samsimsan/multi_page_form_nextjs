import { Inter } from 'next/font/google'
import './globals.css'

import FormProvider from '@/Providers/FormProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Multi page form',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FormProvider>
        <body className={`${inter.className} grid justify-items-center items-center h-[100vh] bg-[var(--Magnolia)]`}>
          {children}
        </body>
      </FormProvider>
    </html>
  )
}
