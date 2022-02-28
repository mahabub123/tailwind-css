module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'1rem',
        screens:{
          lg:'1124px'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
