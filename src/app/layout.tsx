// import './globals.css'
import "@radix-ui/themes/styles.css"
import "./globals.css"
import "./theme-config.css"

import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Box, Container, Theme } from "@radix-ui/themes"
import { ThemeProvider } from "@/components/ThemeProvider"
import PlausibleProvider from "next-plausible"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
})

export const metadata: Metadata = {
  title: "Johannes Sjöberg",
  description: "Johannes Sjöberg personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${grotesk.variable}`}
        style={{ margin: 0 }}
      >
        <PlausibleProvider domain={"johannessjoberg.com"}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Theme
              accentColor="red"
              grayColor="mauve"
              panelBackground="solid"
              scaling="100%"
              radius="none"
            >
              <Box className="bg-[color:var(--gray-2)]">{children}</Box>
            </Theme>
          </ThemeProvider>
        </PlausibleProvider>
      </body>
    </html>
  )
}
