// //для генерации абсолютного пути у node есть хороший инструмент( он уже есть)
// const path = require('path');
//
//
// module.exports = {
//     entry: './dist/index.js', //говорим webpack о том где у нас точка входа в проекте, точка входа-наш основной файл, в котором  рендер приложения и тд
//     output: {
//         path: path.resolve(__dirname,'dist')
//         //__dirname в эту константу будет записана текущая директория
//         //'dist' - куда хотим записывать
//     }//тут нужно указать в какую директорию собирать получившийся результат.Нам нужно указать не относительный путь, а абсолютный
// }
//
// //проверка получилось ли у нас или нет npx webpack

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Режим разработки
    entry: './src/index.js', // Точка входа

    output: {
        path: path.resolve(__dirname, 'dist'), // Папка сборки
        filename: 'bundle.[contenthash].js', // Имя финального JS-файла
        clean: true // Очищать dist перед каждой сборкой
    },

    devtool: 'source-map', // Для удобной отладки в devtools

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Откуда брать файлы
        },
        compress: true,
        port: 8080, // Адрес: http://localhost:8080
        open: true,  // Автоматически откроет браузер
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Подключение стилей
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Подключение изображений
                type: 'asset/resource',
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/project.html', // Шаблон HTML-файла
        }),
    ],
};