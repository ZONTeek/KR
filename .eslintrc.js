module.exports = {
    root: true,
    extends: ['@react-native-community'],
    rules: {
        'no-multi-spaces': ['error'],
        'no-unused-vars': ['error'],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'comma-dangle': ['error', 'never']
    }
};
