const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Ваш файл с точкой входа
  output: {
    filename: 'bundle.js', // Название бандла
    path: path.resolve(__dirname, 'dist'), // Путь для сохранения бандла
  },
};
