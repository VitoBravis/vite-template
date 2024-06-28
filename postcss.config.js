module.exports = {
    plugins: [
        require('postcss-sort-media-queries')({
            sort: 'mobile-first',
        }),
        require('autoprefixer'),
        require('postcss-nested'),
        require('cssnano')({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),
        require('postcss-variable-compress')([
            '--vh'
        ])
    ],
};
