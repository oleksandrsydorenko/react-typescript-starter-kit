module.exports = {
  extends: [
    // standard rules for styles
    'stylelint-config-standard',
    // rules for ordering styles
    // must be defined before stylelint-config-prettier preset
    'stylelint-config-rational-order',
    // disables rules that can conflict with Prettier
    // must be defined at the end of the presets list
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['config'],
  plugins: [
    // allows to run Prettier rules as the Stylelint ones
    'stylelint-prettier',
  ],
  rules: {
    // defines styles order
    'order/order': [
      // custom properties (e.g., --property: 10px;)
      'custom-properties',
      // dollar variables (e.g., $variable)
      'dollar-variables',
      // CSS declarations (e.g., display: block;)
      'declarations',
      // nested rules (e.g., a { span {} })
      'rules',
      // nested at-rules (e.g., div { @media () {} })
      'at-rules',
    ],
    // defines Prettier rules as the Stylelint ones
    'prettier/prettier': true,
  },
};
