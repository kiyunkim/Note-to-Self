# NPM

- Node Package Manager
- Software registry that contains 600k+ packages (building blocks of code)

#### Package vs Module

- **Module**: single js file that has some reasonable functionality
- **Package**: directory with one or more modules inside of it and a `package.json` file that contains metadata about the package

## `package.json`

- Contains metadata about the project
- Tracks dependencies
- Generate with `npm init`
- `dependencies` are for use in production
- `devDependencies` are used in development, e.g. testing tool, local server

## Commands

`npm init`  
`npm init --yes` for instant init  
`npm install <module>` install the module `<module>`  
`npm install` install all dependencies from `package.json`  
`npm i` shorthand for install  
`npm install <module> --save` install `<module>` and save to `package.json`as an entry in `dependencies` **This is now the default in npm 5+**
`npm install <module> --save-dev` install `<module>` and save to `package.json`as an entry in `devDependencies`  
`npm install <module> --global` install globally (by default it will install them to a system directory and not a local one)
`npm outated` view version details of outdated dependencies

```json
"dependencies": {
  "normalize.css": "*"
}
```
Accept any major version updates


[Shorthands](https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties)

Flag | Shortcut
---------- | -----------
`--version` | `-v`
`--global` | `-g`
`--save` | `-S`
`--save-dev` | `-D`

## Build Tools (Module bundlers, task runners/automator)

- Webpack
- Browserify
- Require.js
- Gulp
- Grunt
- Babel

## Sources

- [Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
- [npm for Beginners: A Guide for Front-end Developers](https://www.impressivewebs.com/npm-for-beginners-a-guide-for-front-end-developers/)
- [What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)
- [freeCodeCamp Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)
- [Build Tools Rule of Thumb](http://dearkumar.com/confusion-on-js-build-tool-babel-browserify-webpack-grunt-and-gulp-when-to-use-them/)
- [Build Tool comparison](https://survivejs.com/webpack/appendices/comparison/)
- [npm trends](http://www.npmtrends.com/)
