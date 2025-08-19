// app/layout.tsx

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";
import ClientOnly from '@/components/ClientOnly'; // Ensure this path is correct

export const metadata: Metadata = {
  title: 'Society Website',
  description: 'Created with ❤️',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Step 1: Apply font variables to the <html> tag and suppress warnings
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      
      {/* Step 2: The <head> tag can now be empty, as fonts are handled above */}
      <head />

      <body>
        {/* Step 3: Wrap ThemeProvider and children in ClientOnly */}
        <ClientOnly>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}