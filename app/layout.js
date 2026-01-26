import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'InnoAIte · Gen-AI Hackathon | YUKTHI ’26',
  description:
    'InnoAIte is a 24-hour Gen-AI Hackathon conducted as part of YUKTHI ’26, hosted by the Department of Artificial Intelligence & Machine Learning, College of Engineering of Technology Payyanur.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-inter bg-bg-dark text-white antialiased">

        {/* GSAP Animations */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  )
}
