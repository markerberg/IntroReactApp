module.exports = {
  entry: './app/app.jsx',// where webpack starts compiling
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
      openWeatherMap: 'app/api/openWeatherMap.jsx'
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
