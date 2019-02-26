module.exports = {
  presets: [
    'babel-preset-expo',
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  sourceMaps: true,
  plugins: [
    'jest-hoist',
    '@babel/transform-react-jsx-source',
  ],
};
