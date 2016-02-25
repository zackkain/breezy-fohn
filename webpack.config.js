module.exports = {  
  entry: './src/index.tsx',
  output: {
    filename: './bin/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.tsx$/, loader: 'ts-loader' }
    ]
  }
}