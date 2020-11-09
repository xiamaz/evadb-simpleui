module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    boxShadow: ({ after }) => after(['focus-within']),
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
