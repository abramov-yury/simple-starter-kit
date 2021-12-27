const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postCssLoaderOptions = {
  postcssOptions: {
    plugins: [
      require('autoprefixer')({ grid: 'autoplace' }),
      require('mqpacker'),
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
    ],
  },
};

module.exports = {
  miniCssExtractPlugin: new MiniCssExtractPlugin({
    filename: 'css/[name].css',
  }),
  sassRules: {
    test: /\.s[ac]ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: postCssLoaderOptions,
      },
      {
        loader: 'sass-loader',
      },
    ],
  },
  cssRules: {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: postCssLoaderOptions,
      },
    ],
  }
}
