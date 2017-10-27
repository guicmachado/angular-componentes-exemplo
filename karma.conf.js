//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      'src/app/componentes/**/*.module.js',
      'src/app/componentes/**/*.component.js',
      'src/app/componentes/**/*.spec.js'
    ],

    autoWatch: false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-webpack'
    ],

    preprocessors: {
      './src/app/componentes/periodoCalendario/periodo-calendario.component.js': ['webpack']
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.html$/,
            use: ['html-loader']
          }
        ]
      }
    }
  });
};