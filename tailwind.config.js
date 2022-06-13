/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                rpaBlue: {
                    100: '#f3f6f7',
                    500: '#3510c8ab',
                    600: '#3510c8cc',
                    900: '#012173',
                },
                rpaBlack: {
                    300: '#C6C6C6',
                    600: '#2f2f2f',
                },
                rpaPurple: {
                    500: '#9b51e0',
                },
                rpaLightBlue: {
                    50: '#cae2ff',
                    100: '#c8d5fe',
                    200: '#b5f1ff',
                    300: '#7ce6ff',
                },
            },
        },
    },
    plugins: [],
}
