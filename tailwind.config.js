//Permite exportar objetos y traerlos de otros lados, estamos en entorno node por eso funciona asi.
module.exports = {
  purge: [
    "docs/*.html"
  ], //Esto permite decirle a tailwind en que lugar se usa tailwind
  darkMode: 'media', // or 'media' or 'class'
  theme: {//Esto es una capa de personalizacion donde podemos agregar clases nuevas que van a estar disponibles en el html
    extend: {
      colors: {
        globant: "#BFD732"
      }
    }, //Esto extiende lo que ya hay, si lo pones afuera pones cosas como que solo existe eso
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

