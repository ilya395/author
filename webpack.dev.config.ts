import webpack, { Configuration } from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface BaseConfiguration extends Configuration {
  devServer?: WebpackDevServerConfiguration;
};

const config: Configuration = {
  mode: 'development',
  entry: {
    main: ['./src/index.tsx'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.ts', '.tsx'
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  devServer: {
    client: {
      logging: 'info',
      overlay: true,
    },
    open: true,
    port: 4200,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: './dist/assets',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: `assets/css/[name].[hash].[ext]}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: './src/assets/[path][name].[ext]',
                },
            },
        ]
      },
    ]
  },
};

export default config;
