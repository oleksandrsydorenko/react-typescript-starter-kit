# React-Typescript Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](/LICENSE)

Starter kit for [React](https://reactjs.org/) web applications build on [Webpack 5](https://webpack.js.org/), [Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/), [Sass](https://sass-lang.com/) stack with preconfigured [ESlint](https://eslint.org/), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/), [Lint-Staged](https://github.com/okonet/lint-staged), [Commitlint](https://github.com/conventional-changelog/commitlint), [Husky](https://github.com/typicode/husky) and [Jest](https://jestjs.io/).

## Features

- Supporting the latest [EcmaScript](https://ecma-international.org/) features and feature proposals.
- Compiling TypeScript through [Babel](https://babeljs.io/), type checking with [Fork TS Checker Webpack Plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#readme).
- Autoprefixing CSS with [Autoprefixer](https://github.com/postcss/autoprefixer#readme), removing unused CSS with [PurgeCSS](https://github.com/FullHuman/purgecss#readme), optimizing/minifying CSS with [Optimize CSS Assets Webpack Plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin#readme).
- Targeting browsers with [Browserslist](https://github.com/browserslist/browserslist#readme).
- Optimized code splitting for better caching by splitting out common modules and each NPM package separately.
- Verifying fetched resources using [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) with [Webpack Subresource Integrity Plugin](https://github.com/waysact/webpack-subresource-integrity#readme).
- Linting and formatting React/JavaScript/TypeScript/CSS/Sass with [ESlint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/), [Lint-Staged](https://github.com/okonet/lint-staged#readme) and [Husky](https://github.com/typicode/husky#readme).
- Linting commit messages in accordance to [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) with [commitlint](https://github.com/conventional-changelog/commitlint#readme) and [Husky](https://github.com/typicode/husky#readme).
- Compressing files using [Brotli](https://github.com/google/brotli#readme) algorithm.
- Optimizing/minifying `GIF/JPEG/JPG/PNG/WEBP/SVG` files with [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader#readme) and [SVGO Loader](https://github.com/rpominov/svgo-loader#readme).
- Testing with [Jest](https://jestjs.io/).

## Installation

1. Clone repository:

`git clone https://github.com/oleksandrsydorenko/react-typescript-starter-kit.git`

2. Install packages

using npm:

`npm i`

using yarn:

`yarn`

## Usage

### In development mode

Run application:

using npm:

`npm run start`

using yarn:

`yarn start`

### In production mode

Run application

using npm:

`npm run build`

using yarn:

`yarn build`

Deploy `dist` folder with contents to host.

## Scripts

`build` - compiles sources using Webpack\
`build:stats` - compiles sources using Webpack and generates profiles and statistics about modules\
`lint` - runs ESlint, Prettier and Stylelint\
`lint:eslint` - runs ESlint linter\
`lint:prettier` - runs Prettier code formatter\
`lint:stylelint` - runs Stylelint linter\
`start` - runs application in development mode\
`test:coverage` - runs Jest and generates code coverage report\
`test:debug` - runs Jest in debug mode\
`test:silent` - runs Jest in silent mode\
`test:watch` - runs Jest in watch mode\
`ts:check` - compiles TypeScript without output\
`ts:watch` - compiles TypeScript without output in watch mode

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
