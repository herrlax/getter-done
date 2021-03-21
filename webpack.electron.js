const path = require('path');

(module.exports = {
  name: 'main',
  mode: 'development',
  // Electron Entrypoint
  entry: './src/main.ts',
  target: 'electron-main',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  node: {
    __dirname: false, // new remove?
  },
}),
  {
    name: 'preload',
    mode: 'development',
    entry: './src/preload.js',
    target: 'electron-preload',
    output: {
      path: `${__dirname}/dist`,
      filename: 'preload.js',
    },
  };
