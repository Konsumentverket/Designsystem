const path = require("path");

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../../")
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('awesome-typescript-loader'),
                options: {
                    configFileName: '../tsconfig.json',
                    transpileOnly: true
                }
            }
        ]
    }
};