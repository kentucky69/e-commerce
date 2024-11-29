module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 1,
            features: {
                'nesting-rules': true
            }
        }),
        process.env.NODE_ENV === 'production' 
            ? require('cssnano') 
            : null
    ].filter(Boolean)
}; 