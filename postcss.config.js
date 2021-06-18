module.exports = {
    plugins: [
        require('autoprefixer'),
        require('precss'),
        require('lost'),
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-preset-env')({
            browsers: 'last 2 versions',
            stage: 0,
        }),
        require('postcss-normalize')
    ]
};