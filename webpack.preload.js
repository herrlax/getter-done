module.exports = {
  name: 'preload',
  mode: 'development',
  entry: './src/preload.js',
  target: 'electron-preload',
  output: {
    path: `${__dirname}/dist`,
    filename: 'preload.js',
  },
};
