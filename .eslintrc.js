module.exports = {
  root: true,
  extends: [
    '@react-native-community',
  ],
  rules: {
    "max-len": ["error", {"code": 100}],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "no-return-assign": ["off"],
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render'
        ],
      },
    }],
  },
};
