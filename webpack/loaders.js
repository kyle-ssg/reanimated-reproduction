module.exports = [
    {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
    },
    { test: /\.json$/, loader: "json-loader" },
    {
        test: /\.js?/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
    },
    {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=source:src&attrs[]=img:src'
    },
    {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ogv|mp4|webm)$/,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
    }
];
