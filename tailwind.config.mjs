/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                slate: {
                    850: '#151f2e',
                    900: '#0f172a',
                    950: '#020617',
                },
                accent: {
                    300: '#5eead4', // Teal-300
                    400: '#2dd4bf', // Teal-400
                    500: '#14b8a6', // Teal-500
                    600: '#0d9488', // Teal-600
                }
            },
            keyframes: {
                'blob': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '25%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '75%': { transform: 'translate(20px, 40px) scale(1.05)' },
                },
                'blob-reverse': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '25%': { transform: 'translate(-30px, 40px) scale(0.9)' },
                    '50%': { transform: 'translate(20px, -30px) scale(1.1)' },
                    '75%': { transform: 'translate(-20px, -40px) scale(1.05)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            animation: {
                'blob': 'blob 20s ease-in-out infinite',
                'blob-reverse': 'blob-reverse 25s ease-in-out infinite',
                'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
};
