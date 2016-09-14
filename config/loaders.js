module.exports = [
    {
        test: /\.css$/,
        loaders: ['style', 'css']
    },
    { test: /\.json$/, loader: "json" },
    {
        test: /\.js?/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
    },
    {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=source:src&attrs[]=img:src'
    },
    {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ogv|mp4|webm)$/,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
    }
];