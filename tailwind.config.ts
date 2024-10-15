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
      colors: {
        background: '#F1F5FC',
        primary: '#0B2336',
        accent: '#927B2B',
      },
      fontFamily: {
        sans: ['Alegreya Sans', 'sans-serif'],
      },
      fontWeight: {
        b: '700', // жирный
        l: '300', // тонкий
      },
      fontSize: {
        xs: ['12px', 'auto'],
        s: ['14px', 'auto'],
        m: ['16px', 'auto'],
        l: ['24px', 'auto'],
        xl: ['28px', 'auto'],
        xxl: ['36px', 'auto'], // для xxl
      },
      spacing: {
        32: '32px',
        28: '28px',
        185: '185px',
      },
    },
  },
  plugins: [],
}
