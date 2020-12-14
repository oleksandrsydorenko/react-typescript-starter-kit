# React-Typescript Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](/LICENSE)

Starter kit for [React](https://reactjs.org/) web applications build on [Webpack 5](https://webpack.js.org/), [Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/), [Sass](https://sass-lang.com/) with configured [ESlint](https://eslint.org/), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/), [Lint-Staged](https://github.com/okonet/lint-staged), [Commitlint](https://github.com/conventional-changelog/commitlint), [Husky](https://github.com/typicode/husky) and [Jest](https://jestjs.io/).

## Features

- Supporting the latest [EcmaScript](https://ecma-international.org/) features and feature proposals.
- Transpiling TypeScript through [Babel](https://babeljs.io/), type checking with [Fork TS Checker Webpack Plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#readme).
- Autoprefixing CSS with [Autoprefixer](https://github.com/postcss/autoprefixer#readme), removing unused CSS with [PurgeCSS](https://github.com/FullHuman/purgecss#readme), optimizing/minifying CSS with [Optimize CSS Assets Webpack Plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin#readme).
- Targeting browsers with [Browserslist](https://github.com/browserslist/browserslist#readme).
- Optimized code splitting for better caching by splitting out common modules and each NPM package separately.
- Verifying fetched resources using [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) with [Webpack Subresource Integrity Plugin](https://github.com/waysact/webpack-subresource-integrity#readme).
- Linting and formatting React/JavaScript/TypeScript/CSS/Sass with [ESlint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/), [Lint-Staged](https://github.com/okonet/lint-staged#readme) and [Husky](https://github.com/typicode/husky#readme).
- Linting commit messages in accordance to [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) with [commitlint](https://github.com/conventional-changelog/commitlint#readme) and [Husky](https://github.com/typicode/husky#readme).
- Compressing files using [Brotli](https://github.com/google/brotli#readme) algorithm.
- Optimizing/minifying `GIF/JPEG/JPG/PNG/WEBP/SVG` files with [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader#readme) and [SVGO Loader](https://github.com/rpominov/svgo-loader#readme).
- Testing with [Jest](https://jestjs.io/).
- Versioning and generating CHANGELOG file with [Standard Version](https://github.com/conventional-changelog/standard-version#readme).

## Installation

Clone repository:

`git clone https://github.com/oleksandrsydorenko/react-typescript-starter-kit.git`

Install packages using npm:

`npm i`

or yarn:

`yarn`

## Usage

### In development mode

Using npm:

`npm run start`

Using yarn:

`yarn start`

### In production mode

Using npm:

`npm run build`

Using yarn:

`yarn build`

Deploy `dist` folder contents to your server/host.

## Scripts

`build` - runs Webpack in production mode\
`build:stats` - runs Webpack in production mode and generates profiles and statistics about modules\
`clear` - removes _./dist_ and _./node_modules_ directories\
`clear:cache` - removes _./node_modules/.cache_ directory\
`lint` - runs ESlint, Prettier and Stylelint in parallel\
`lint:eslint` - runs ESlint linter\
`lint:prettier` - runs Prettier code formatter\
`lint:stylelint` - runs Stylelint linter\
`start` - runs Webpack in development mode\
`test:coverage` - runs Jest and generates code coverage report\
`test:debug` - runs Jest in debug mode\
`test:silent` - runs Jest in silent mode\
`test:watch` - runs Jest in watch mode\
`ts:build` - transpiles TypeScript with outputs\
`ts:check` - transpiles TypeScript without outputs\
`ts:watch` - transpiles TypeScript without outputs in watch mode

## Stack

[React](https://reactjs.org/)\
[TypeScript](https://www.typescriptlang.org/)\
[Sass](https://sass-lang.com/)\
[Webpack](https://webpack.js.org/)\
[Babel](https://babeljs.io/)\
[ESlint](https://eslint.org/)\
[Prettier](https://prettier.io/)\
[Stylelint](https://stylelint.io/)\
[Jest](https://jestjs.io/)

## License

[MIT](/LICENSE)
