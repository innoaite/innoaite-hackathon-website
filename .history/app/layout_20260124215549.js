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
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {/* GSAP Animations */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="lazyOnload"
        />
      </head>

      <body className="font-inter bg-bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
