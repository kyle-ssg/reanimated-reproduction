// Define common loaders for different file types
module.exports = [
    {
        test    : /.*\/janus-frontend-common\/.*\.js$/,
        exclude : /.*\/diffusion.js$/,
        use     : [
            {
                loader: 'babel-loader',
                // loader: 'next-babel-loader',
                options: {
                    presets: [
                        '@babel/react',
                        // 'next/babel',
                        {
                            plugins:  [['@babel/plugin-proposal-class-properties', { loose: true }]],
                        },
                    ],
                },
            },
        ],
    },
];
