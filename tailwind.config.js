/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans' : ['system-ui'],
      'mono' : ['SFMono-Regular','Monaco', 'Consolas', '"Liberation Mono"', 'monospace']
    }
  },
  plugins: [],
}