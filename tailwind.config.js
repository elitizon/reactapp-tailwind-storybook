const purgeEnabled = process.env.NODE_ENV === "production"

console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: [
      "./src/**/*.html",
      "./src/**/*.tsx",
      "./src/**/*.jsx",
      "./public/**/*.html"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
