/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'c-green': '#a1f0a8',
                'c-pink': '#fd94c8',
            },
            dropShadow: {
                pink: '1px 2px 6px #fd94c8',
                'pink-sm': '1px 1px 3px rgba(253, 148, 200, 0.2)',
                green: '1px 2px 6px #a1f0a8',
                'green-sm': '1px 1px 3px rgba(161, 240, 168, 0.2)',
            },
        },
    },
    plugins: [],
}
