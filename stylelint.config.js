const RULE_ORDER_AT_RULE_INCLUDE = {
  type: 'at-rule',
  name: 'include',
};

module.exports = {
  extends: [
    // standard rules for styles
    'stylelint-config-standard',
    // rules for ordering styles
    'stylelint-config-rational-order',
    // disables rules that can conflict with Prettier
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['config'],
  plugins: [
    // allows to run Prettier rules as the Stylelint ones
    'stylelint-prettier',
  ],
  rules: {
    // defines allowed at-rules
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin'],
      },
    ],
    // defines styles order
    'order/order': [
      // at-rule @include (e.g., div { @include some-mixin; })
      {
        ...RULE_ORDER_AT_RULE_INCLUDE,
      },
      // block at-rule @include (e.g., div { @include some-mixin {} })
      {
        ...RULE_ORDER_AT_RULE_INCLUDE,
        hasBlock: true,
      },
      // custom properties (e.g., --property: 10px;)
      'custom-properties',
      // dollar variables (e.g., $variable)
      'dollar-variables',
      // CSS declarations (e.g., display: block;)
      'declarations',
      // nested rules (e.g., a { span {} })
      'rules',
      // nested at-rules (e.g., @media () {})
      'at-rules',
    ],
    // defines Prettier rules as the Stylelint ones
    'prettier/prettier': true,
  },
};
