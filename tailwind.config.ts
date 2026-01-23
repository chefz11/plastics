import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        logo: ['La Belle Aurore', 'cursive'],
      },
      colors: {
        sidebar: {
          bg: '#FAFAFA',
          text: '#333333',
          muted: '#6B7280',
          border: '#D9D9D9',
          hover: '#F3F4F6',
          active: '#E5E7EB',
        },
      },
      spacing: {
        'sidebar': '280px',
        'sidebar-collapsed': '64px',
      },
      animation: {
        'slide-in': 'slideIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-out': 'slideOut 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
