/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}