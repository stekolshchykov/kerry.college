module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        "text-xs", "text-s", "text-m", "text-l", "text-xl", "text-xxl",
        "rotate-90", "opacity-40", "translate-x-0", "translate-x-full",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F1F5FC',
                mina: '#0B2336',
                accent: '#927B2B',
            },
            fontFamily: {
                sans: ['Alegreya Sans', 'sans-serif'],
            },
            fontWeight: {
                b: '700',
                l: '300',
            },
            fontSize: {
                xs: ['12px', 'auto'],
                s: ['14px', 'auto'],
                m: ['16px', 'auto'],
                m2: ['20px', 'auto'],
                l: ['24px', 'auto'],
                xl: ['28px', 'auto'],
                xxl: ['36px', 'auto'],
                xxxl: ['56px', 'auto'],
            },
            spacing: {
                32: '32px',
                28: '28px',
                185: '185px',
            },
        },
    },
    plugins: [],
};
