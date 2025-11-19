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
                    400: '#2dd4bf', // Teal-400
                    500: '#14b8a6', // Teal-500
                }
            }
        },
    },
    plugins: [],
};
