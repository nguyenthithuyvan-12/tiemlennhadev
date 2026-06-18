/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CFECF3',
          dark: '#3D7A7F',
        },
        pink: {
          DEFAULT: '#F9B2D7',
          dark: '#D4869E',
        },
        accent: '#DAF9DE',
        background: '#F6FFDC',
        muted: '#6B8A8C',
        border: '#B8E5E0',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '6px',
        none: '0px',
      },
      letterSpacing: {
        widest: '0.2em',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(61, 90, 91, 0.08)',
        card: '0 4px 24px rgba(61, 90, 91, 0.10)',
      },
      transitionDuration: {
        base: '200ms',
        slow: '400ms',
      },
    },
  },
  plugins: [],
};
