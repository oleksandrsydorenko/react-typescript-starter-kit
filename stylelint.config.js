const RULE_ORDER_AT_RULE_INCLUDE = {
  type: 'at-rule',
  name: 'include',
};

module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['config'],
  plugins: ['stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin'],
      },
    ],
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
    'prettier/prettier': true,
  },
};
