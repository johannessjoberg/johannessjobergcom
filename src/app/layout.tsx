// import './globals.css'
import "@radix-ui/themes/styles.css"
import "./globals.css"
import "./theme-config.css"

import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Container, Theme } from "@radix-ui/themes"
import { ThemeProvider } from "@/components/ThemeProvider"

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme
            accentColor="cyan"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="medium"
          >
            <Container size="3">{children}</Container>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}
