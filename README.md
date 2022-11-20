# no-unused

[experimental, in early stage of development]

Finds unused TypeScript properties

## Installation

Install `eslint-plugin-no-unused`:

```sh
npm install eslint-plugin-no-unused --save-dev
```

## Usage

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
