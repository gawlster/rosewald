/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'c-green': '#a1f0a8',
                'c-green-d': '#1cad28',
                'c-pink': '#fd94c8',
                'success-green': 'rgb(42, 133, 42)',
                'error-red': 'rgb(218, 32, 32)',

                'bg-dark': '#202125',
                "bg-mid": "#363636",
                "bg-light": "#424242"
            },
            dropShadow: {
                pink: '1px 2px 6px #fd94c8',
                'pink-sm': '1px 1px 3px rgba(253, 148, 200, 0.2)',
                green: '1px 2px 6px #a1f0a8',
                'green-sm': '1px 1px 3px rgba(161, 240, 168, 0.2)',
                black: '1px 2px 6px #000000',
                'black-dark': '2px 3px 4px #000000',
                'black-sm': '1px 1px 3px rgba(0, 0, 0, 0.2)',
            },
        },
    },
    plugins: [],
}
