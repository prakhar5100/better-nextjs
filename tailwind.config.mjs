/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : ['var(--font-poppins)']
       },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        calcBackground: '#f0f7f1',
        mortageGreen : '#017848',
        textMortgage : '#1EE07F',
        darkGreen : '#004733',
        specialGray : '#DFE0DC',
        lightGreen : '#F0F7F1'
      },
    },
  },
  plugins: [],
};
