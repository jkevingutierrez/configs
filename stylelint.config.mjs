{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "alpha-value-notation": "number",
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "at-root",
          "each",
          "else",
          "extend",
          "extends",
          "for",
          "forward",
          "function",
          "if",
          "ignores",
          "include",
          "mixin",
          "return",
          "use",
          "warn",
          "while"
        ]
      }
    ],
    "color-function-notation": "legacy",
    "custom-property-pattern": "^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$",
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-no-important": null,
    "declaration-property-unit-allowed-list": {
      "/color/": [
        "/^\\$/"
      ],
      "font": [
        "/^\\$/"
      ]
    },
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": null,
    "function-url-quotes": [
      "always",
      {
        "except": [
          "empty"
        ]
      }
    ],
    "keyframes-name-pattern": null,
    "media-feature-range-notation": "context",
    "no-duplicate-selectors": true,
    "no-descending-specificity": null,
    "number-max-precision": null,
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-alphabetical-order": true,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-import-no-partial-leading-underscore": null,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-rule-conditional-no-parentheses": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)(--?[a-zA-Z0-9]+)*$",
    "scss/double-slash-comment-whitespace-inside": null,
    "scss/no-global-function-names": null,
    "scss/operator-no-newline-after": null,
    "scss/percent-placeholder-pattern": null,
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "unit-allowed-list": [
      "%",
      "ch",
      "deg",
      "dpi",
      "dppx",
      "em",
      "fr",
      "ms",
      "pt",
      "px",
      "rem",
      "s",
      "vh",
      "vmax",
      "vmin",
      "vw",
      "dvh"
    ],
    "value-keyword-case": [
      "lower",
      {
        "camelCaseSvgKeywords": true
      }
    ]
  }
}
