const fileLoader = () => (
  // "file" loader makes sure those assets get served by WebpackDevServer.
  // When you `import` an asset, you get its (virtual) filename.
  // In production, they would get copied to the `build` folder.
  // This loader doesn't use a "test" so it will catch all modules
  // that fall through the other loaders.
  {
    // Exclude `js` files to keep "css" loader working as it injects
    // its runtime that would otherwise processed through "file" loader.
    // Also exclude `html` and `json` extensions so they get processed
    // by webpacks internal loaders.
    exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
    loader: require.resolve('file-loader'),
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  }
);

module.exports = fileLoader;
