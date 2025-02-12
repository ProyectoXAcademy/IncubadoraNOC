const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // Desactivamos la seguridad de Chrome para evitar problemas de cross-origin
  reporter: 'cypress-mochawesome-reporter',
  // ---------- Líneas nuevas ----------
  reporterOptions: {
    charts: true, // Incluir gráficos en el reporte
    reportPageTitle: 'Mi Reporte', // Personalización del título del reporte
    embeddedScreenshots: true, // Incluir capturas de pantalla en el reporte
    inlineAssets: true, // Incluir imágenes en el reporte
  },
  // -----------------------------------
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // Configuración del plugin para el reporte
    },
  },
  video: true, // Guardar videos de las pruebas
  screenshotOnRunFailure: true, // Guardar capturas cuando las pruebas fallan
  videosFolder: "cypress/videos", // Carpeta para guardar los videos
  screenshotsFolder: "cypress/screenshots", // Carpeta para guardar las capturas
});
