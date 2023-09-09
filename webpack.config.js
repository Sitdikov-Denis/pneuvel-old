const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Ваша точка входа TypeScript/JSX
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Регулярное выражение для файлов TypeScript/JSX
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Используем ts-loader
        },n
      },
      {
        test: /\.jsx?$/, // Регулярное выражение для файлов JavaScript/JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используем babel-loader
          options: {
            presets: ['@babel/preset-react'], // Подключаем пресет React
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Добавьте расширения для TypeScript и JSX
  },
};
