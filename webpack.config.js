const path = require('path');

module.exports = {
  entry: './src/index.js', // точка входа вашего приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // каталог для результатов сборки
    filename: 'index.js', // имя файла с результатами сборки (должно совпадать с entry point в шаге 1)
    library: 'ajs', // название вашей библиотеки
    libraryTarget: 'umd', // Universal Module Definition (UMD) - шаблон, позволяющий использовать RequireJS и браузер
    libraryExport: 'default', // экспортируемое имя по умолчанию
    globalObject: 'this', // что принимать за глобальный объект (для совместимости с разными средами выполнения)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // используем babel-loader для компиляции JavaScript
        },
      },
    ],
  },
};
