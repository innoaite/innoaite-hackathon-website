import { Inter, Space_Grotesk } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700']
});

export const metadata = {
  title: 'YUKTHI · Gen‑AI Hackathon',
  description: 'YUKTHI is a 24‑hour Gen‑AI hackathon hosted by College of Engineering of Technology Payyanur, Department of AI & ML.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}