module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: { default: "1rem", sm: "2rem", lg: "4rem", xl: "5rem" },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
