module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      fontSize: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}