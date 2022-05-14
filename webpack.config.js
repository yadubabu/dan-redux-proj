const config = {
    entry: './index.js',
    output: {
      path: __dirname,
      filename: 'block.build.js',
    },
    devServer: {
      static: './index.js'
    },
    module : {
      rules : [
        {
          test: /.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015'],
            plugins: ['transform-class-properties']
          }
        }
      ]
    }
  };
  export default config;