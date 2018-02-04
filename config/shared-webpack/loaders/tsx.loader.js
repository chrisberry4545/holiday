const tsxLoader = ({partnerName}) => (
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: "awesome-typescript-loader",
      },
      {
        loader: 'replace-string-loader',
        options: {
            search: '/dependency-injection/inversify.config',
            replace: `/${partnerName}/inversify.config`,
            flags: 'g',
            file: true
        },
      },
    ],
  }
);

module.exports = tsxLoader;
