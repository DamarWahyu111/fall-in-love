import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import { AudioProvider } from '@/components/audio-provider'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Valentine's Day - Interactive Cards & Gallery",
  description: 'Share your love with interactive Valentine greeting cards and a beautiful 3D photo gallery. Create personalized messages and memories.',
  keywords: ['Valentine', 'Love', 'Cards', 'Gallery', 'Interactive'],
  authors: [{ name: 'v0 Creator' }],
  openGraph: {
    title: "Valentine's Day - Interactive Cards & Gallery",
    description: 'Create personalized Valentine cards and share beautiful memories',
    type: 'website',
    locale: 'en_US',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a0a0f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AudioProvider>
          {children}
          <Toaster richColors position="top-right" />
        </AudioProvider>
      </body>
    </html>
  )
}
