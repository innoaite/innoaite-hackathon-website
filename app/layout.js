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
    'InnoAIte is a 24-hour Gen-AI Hackathon conducted as part of YUKTHI ’26, hosted by the Department of AI & ML, College of Engineering of Technology Payyanur. Join us to innovate and solve real-world challenges with AI.',
  keywords: [
    'InnoAIte', 'Gen-AI Hackathon', 'AI Hackathon 2026', 'YUKTHI 26', 'AI ML Event', 'College Hackathon India'
  ].join(', '),
  openGraph: {
    title: 'InnoAIte · Gen-AI Hackathon | YUKTHI ’26',
    description:
      'Join InnoAIte, a 24-hour Gen-AI Hackathon at YUKTHI ’26, hosted by the AI & ML Department, College of Engineering Payyanur.',
    url: 'https://innoaite.live',
    siteName: 'InnoAIte',
    images: [
      {
        url: 'https://innoaite.live/assets/innoaite_OG.png', // add OG image
        width: 1200,
        height: 630,
        alt: 'InnoAIte Hackathon 2026',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@InnoAIte',
    title: 'InnoAIte · Gen-AI Hackathon | YUKTHI ’26',
    description:
      'Participate in InnoAIte – a 24-hour Gen-AI Hackathon hosted by College of Engineering Payyanur.',
    images: ['https://innoaite.live/assets/innoaite_OG.png'],
  },
  alternates: {
    canonical: 'https://innoaite.live',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#4f46e5" />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
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
