/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0b0b0f',
        'bg-elevated': '#101019',
        'bg-soft': '#151521',
        'text-primary': '#f9fafb',
        'text-muted': '#9ca3af',
        'accent-blue': '#4f46e5',
        'accent-violet': '#a855f7',
        'border-subtle': 'rgba(148, 163, 184, 0.25)',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': '18px',
        'md': '12px',
        'pill': '999px',
      },
      animation: {
        'marquee-scroll': 'marqueeScroll 22s linear infinite',
        'ambient-shift': 'ambientShift 22s ease-in-out infinite alternate',
        'noise-pulse': 'noisePulse 1.8s steps(2, end) infinite',
        'float': 'float 2.8s ease-in-out infinite',
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
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}