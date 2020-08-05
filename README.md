# eslint-config-ericcarraway

### Install

```shell
$ npm i @percuss.io/eslint-config-ericcarraway
```


### Use
```jsonc
// .eslintrc

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
