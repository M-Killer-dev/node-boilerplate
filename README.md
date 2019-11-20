# RESTful API Node Server Boilerplate

[![Build Status](https://travis-ci.org/hagopj13/node-express-mongoose-boilerplate.svg?branch=master)](https://travis-ci.org/hagopj13/node-express-mongoose-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/hagopj13/node-express-mongoose-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/hagopj13/node-express-mongoose-boilerplate?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2ab03f5d62a1404f87a659afe8d6d5de)](https://www.codacy.com/manual/hagopj13/node-express-mongoose-boilerplate?utm_source=github.com&utm_medium=referral&utm_content=hagopj13/node-express-mongoose-boilerplate&utm_campaign=Badge_Grade)

A boilerplate/starter project for quickly building production-ready RESTful APIs using Node.js, Express, and Mongoose.

It comes with many built-in features, such as authentication using JWT, request validation, unit and integration tests, continuous integration, docker support, etc. For more details about the features, check the list below.

## Features

- **ES9**: latest ECMAScript features
- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Getting Started

### Installation

Clone the repo:

```bash
git clone https://github.com/hagopj13/node-express-mongoose-boilerplate.git
cd node-express-mongoose-boilerplate
```

Install dependencies:

```bash
yarn install
```

Environment varibales:

```bash
cp .env.example .env

# open the .env file and fill out any empty environment vars (optional)
```

### Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Inspirations

- [danielfsousa/express-rest-es2017-boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
- [madhums/node-express-mongoose](https://github.com/madhums/node-express-mongoose)
- [kunalkapadia/express-mongoose-es6-rest-api](https://github.com/kunalkapadia/express-mongoose-es6-rest-api)

## License

[MIT](LICENSE)
