/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'gradient': 'linear-gradient(140deg, rgba(140,117,252,1) 0%, rgba(105,161,253,1) 55%, rgba(235,132,252,1) 100%);',
            })
        },
    },
    plugins: [],
}

