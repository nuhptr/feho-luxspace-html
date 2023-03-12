/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: { sans: ['Open Sans', 'sans-serif'] },
            colors: {
                pink: {
                    400: '#F9CADA',
                },
                blue: {
                    200: "#BCE7F0"
                }
            },
        },
    },
    plugins: [],
};
