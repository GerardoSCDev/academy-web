import type { Metadata } from 'next'
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Dashboard for user options',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full' lang="en">
      <body className='h-full' >{children}</body>
    </html>
  )
}
