# eslint-config-ericcarraway

Shareable ESLint config for percuss.io JavaScript projects.

### 1. Install

https://www.npmjs.com/package/@percuss.io/eslint-config-ericcarraway

```shell
$ npm i --save-dev @percuss.io/eslint-config-ericcarraway
```

_This command will install this package & save it to your project's `devDependencies`._

### 2. Use

```jsonc
// your project's `.eslintrc` file

{
  "extends": [
    // (before) additional shareable configs
    //          from which to inherit
    //          whose individual `rules`
    //          will be overwritten by `ericcarraway`
    //          if they conflict

    "@percuss.io/eslint-config-ericcarraway"

    // (after) additional shareable configs
    //         from which to inherit
    //         whose individual `rules`
    //         will overwrite `ericcarraway`
    //         if they conflict
  ],

  "rules": {
    // your project's "final say" on individual rules
  }
}
```
