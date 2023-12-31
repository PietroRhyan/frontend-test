import { Navbar } from '@/components/Navbar'
import '../styles/globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk, Krona_One } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const krona = Krona_One({
  subsets: ['latin'],
  variable: '--font-krona',
  weight: '400',
})
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: '700',
})

export const metadata: Metadata = {
  title: 'Looplex Front Test',
  description: 'This website is a test for Frontend Developer at Looplex',
  authors: [{ name: 'Pietro Rhyan', url: 'https://github.com/PietroRhyan' }],
  keywords: ['nextjs', 'react', 'typescript'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${krona.variable} ${grotesk.variable}`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
