# eslint-plugin-no-unused

[experimental, in early stage of development]

Finds unused TypeScript code with [no-unused](https://www.npmjs.com/package/no-unused).


## Installation

Install `eslint-plugin-no-unused` & `@typescript-eslint/parser`:

```sh
npm install eslint-plugin-no-unused --save-dev
npm install @typescript-eslint/parser --save-dev
```


## Usage

Make sure `@typescript-eslint/parser` is configured in your `.eslintrc` configuration file,
and has `parserOptions.project` property.
```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
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
    "no-unused/no-unused": ["warn", {"ignore": "**/*.spec.ts"}]
  }
}
```


## Options

- `ignore` (glob pattern) - pattern for ignored files. These files won't be analyzed.
  Hint: add `**/*.spec.ts` then identifiers that are used only in tests will be marked as unused.


## CLI tool

See [no-unused](https://www.npmjs.com/package/no-unused).
