# eslint-config-alexguerrero

> [ESLint](http://eslint.org) rules according to Alex Guerrero's personal preference

These are the ESLint rules I use in my own projects. They are completely opinionated but they can serve as inspiration or as a starter point.


## Installation

Install the configuration by running:

```
$ npm install --save-dev eslint eslint-plugin-promise eslint-config-alexguerrero
```


## Usage

Once the `eslint-config-alexguerrero` package is installed, you can use it by specifying `alexguerrero` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "alexguerrero",
  "rules": {
    // Add here the rules you want to overwrite the rules of this config
  }
}
```

### Using this config along `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) these rules are not opinionated about that you might want to enforce in your project.

To use this ESLint config in conjunction with ESLint's recommended rule set, extend them both, making sure to list `alexguerrero` last:

```js
{
  "extends": [
    "eslint:recommended",
    "alexguerrero"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `alexguerrero` config compares with `eslint:recommended`, refer to the source code of rules placed into the [rules folder](https://github.com/guerrero/eslint-config-alexguerrero/blob/master/rules).


## License

[Unlicense](https://github.com/guerrero/eslint-config-alexguerrero/blob/master/LICENSE)
