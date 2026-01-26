/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0b0b0f',
        'bg-elevated': '#101019',
        'bg-soft': '#151521',
        'accent-blue': '#4f46e5',
        'accent-violet': '#a855f7',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marqueeScroll 22s linear infinite',
        'ambient': 'ambientShift 22s ease-in-out infinite alternate',
        'noise': 'noisePulse 1.8s steps(2, end) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ambientShift: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        noisePulse: {
          '0%': { opacity: '0.25' },
          '50%': { opacity: '0.4' },
          '100%': { opacity: '0.25' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)',
      }
    },
  },
  plugins: [],
}