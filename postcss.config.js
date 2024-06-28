import SortMediaQueries from 'postcss-sort-media-queries';
import Autoprefixer from 'autoprefixer';
import PostCSSNested from 'postcss-nested';
import CssNano from 'cssnano';
import VariableCompress from 'postcss-variable-compress';

export default {
    plugins: [
        SortMediaQueries({
            sort: 'mobile-first',
        }),
        Autoprefixer,
        PostCSSNested,
        CssNano({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),
        VariableCompress([
            '--vh'
        ])
    ],
};
