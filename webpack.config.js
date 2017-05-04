var webpack = require('webpack');

module.exports = {
  entry: [// use script loader bc these regular script files not packaged for webpack
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],// where webpack starts compiling
  externals: {// key:value, key is module, value is variable name to use
    jquery: 'jQuery'
  },
  plugins: [// create shortcuts, key:val, what we see: what gets loaded
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname, // dirname is path to current folder
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, //path to whatever file your in
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx'
    },
    extensions: ['', '.js', '.jsx']// what extensions do we want to file
  },
  module: {// what modules to use
    loaders: [
      {
        loader: 'babel-loader',
        query: { //pass data to tell it what to do to files
          presets: ['react', 'es2015', 'stage-0']// run file through react and es2015
        },
        test: /\.jsx?$/, // which files to test, at which extension
        exclude: /(node_modules|bower_components)/ //which folder we dont want to parse
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
