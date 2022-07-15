/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'c-green': '#a1f0a8',
                'c-pink': '#fd94c8',
            },
        },
    },
    plugins: [],
}
