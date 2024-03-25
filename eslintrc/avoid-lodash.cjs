module.exports = {
  extends: ['plugin:you-dont-need-lodash-underscore/compatible'],
  rules: {
    'you-dont-need-lodash-underscore/is-function': 'off', // Also checks of String Instances
    'you-dont-need-lodash-underscore/is-string': 'off', // Also checks of String Instances
  },
};
