const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;


// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ...your other extensions
    },
  },
  plugins: [],
  // Add this for custom utilities
  corePlugins: {
    // ...your other core plugins
  },
  // Add this for arbitrary values
  safelist: ['image-rendering-pixelated'],
}