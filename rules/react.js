/** @import { Linter } from 'eslint' */

/**
 * Rules from `eslint-plugin-react`.
 * @see https://github.com/jsx-eslint/eslint-plugin-react
 *
 * @satisfies {Linter.RulesRecord}
 */
export const reactRules = {
  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md */
  'react/boolean-prop-naming': [
    `error`,
    {
      rule: `^(can|has|is|should)[A-Z]([A-Za-z0-9]?)+|^disabled$`,
      validateNested: true,
    },
  ],

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md */
  'react/button-has-type': [`error`, { button: true, submit: true }],

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md */
  'react/function-component-definition': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md */
  'react/hook-use-state': [`error`, { allowDestructuredState: false }],

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md */
  'react/jsx-boolean-value': [`error`, `always`],

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md */
  'react/jsx-curly-brace-presence': [
    `error`,
    {
      children: `never`,
      props: `never`,
    },
  ],

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md */
  'react/jsx-fragments': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md */
  'react/jsx-no-constructed-context-values': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md */
  'react/jsx-no-leaked-render': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md */
  'react/jsx-no-script-url': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */
  'react/jsx-no-target-blank': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md */
  'react/jsx-no-undef': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md */
  'react/jsx-no-useless-fragment': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md */
  'react/jsx-pascal-case': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md */
  'react/jsx-sort-props': [
    `error`,
    {
      callbacksLast: true,
      ignoreCase: true,
      locale: `auto`,
      multiline: `ignore`,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: false,
      shorthandLast: false,
    },
  ],

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md */
  'react/no-adjacent-inline-elements': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md */
  'react/no-array-index-key': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md */
  'react/no-children-prop': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md */
  'react/no-danger': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md */
  'react/no-danger-with-children': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md */
  'react/no-invalid-html-attribute': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md */
  'react/no-this-in-sfc': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md */
  'react/no-typos': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md */
  'react/no-unknown-property': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md */
  'react/no-unstable-nested-components': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md */
  'react/self-closing-comp': [`error`, { component: true, html: false }],

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md */
  'react/style-prop-object': `error`,

  /** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md */
  'react/void-dom-elements-no-children': `error`, // (e.g. <img />, <br />)
};
