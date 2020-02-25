module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['react-docgen', [
        'module-resolver', {
            alias: {
                components: './app/components/',
                common: '../common/',
                assets: './app/assets/',
            },
        },
    ]],
    env: {
        production: {
            plugins: ['transform-remove-console'],
        },
    },
};
