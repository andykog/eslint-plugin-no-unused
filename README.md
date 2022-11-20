# no-unused

[experimental, in early stage of development]

Finds unused TypeScript properties

## Installation

Install `eslint-plugin-no-unused` & `@typescript-eslint/parser`:

```sh
npm install eslint-plugin-no-unused --save-dev
npm install @typescript-eslint/parser --save-dev
```


## Usage

Make sure `@typescript-eslint/parser` is configured in your `.eslintrc` configuration file,
and has `parserOptions.project` property.
```
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
}

```

Add `eslint-plugin-no-unused` to the plugins section of your `.eslintrc` configuration file.
You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "no-unused"
  ]
}
```


Then configure the rule under the rules section.

```json
{
  "rules": {
    "no-unused/no-unused": 2
  }
}
```
