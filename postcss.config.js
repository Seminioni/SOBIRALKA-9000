let plugins = [
  require("postcss-reporter")({ clearReportedMessages: true }),
  require('postcss-inline-svg')({
    removeFill: true
  }),
  require("postcss-flexbugs-fixes")({}),
  require("postcss-normalize")({
    allowDuplicates: true
  }),
  require("postcss-cssnext")({}),
  require("postcss-clearfix")({}),
  require("postcss-font-magician")({
    custom: {
      HelveticaNeue: {
        variants: {
          normal: {
            300: {
              url: {
                woff2: "../fonts/helveticaCyr/HelveticaNeue-Light.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Light.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Light.ttf"
              }
            },
          },
          italic: {
            300: {
              url: {
                woff2: "../fonts/helveticaCyr/HelveticaNeue-Light-Italic.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Light-Italic.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Light-Italic.ttf"
              }
            },
          }
        }
      }
    },
    formats: "woff2 woff ttf"
  })
];

if (global.production) {
  plugins.push(require("css-mqpacker")());
  plugins.push(require("postcss-svgo")());
}

module.exports = {
  plugins: plugins
};
