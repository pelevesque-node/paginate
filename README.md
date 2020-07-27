[![Build Status](https://travis-ci.org/pelevesque/paginate.svg?branch=master)](https://travis-ci.org/pelevesque/paginate)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/paginate/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/paginate?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# paginate

Makes useful calculations for creating website pagination links.

## Node Repository

https://www.npmjs.com/package/@pelevesque/paginate

## Installation

`npm install @pelevesque/paginate`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const paginate = require('@pelevesque/paginate')
```

```js
const numLinks = 10 // number of links to others pages
const currentPage = 3
const numItemsPerPage = 10
const numItems = 300
const url = 'http://www.localhost.com/?page='

const paginateObject = paginate(numLinks, currentPage, numItemsPerPage, numItems, url)

// result
paginateObject = {
  numLinks: 10,
  currentPage: 3,
  numItemsPerPage: 10,
  numItems: 300,
  url: 'www.localhost.com/?page=',
  links: [
    { page: 1,  active: false, url: 'www.localhost.com/?page=1'  },
    { page: 2,  active: false, url: 'www.localhost.com/?page=2'  },
    { page: 3,  active: true,  url: 'www.localhost.com/?page=3'  },
    { page: 4,  active: false, url: 'www.localhost.com/?page=4'  },
    { page: 5,  active: false, url: 'www.localhost.com/?page=5'  },
    { page: 6,  active: false, url: 'www.localhost.com/?page=6'  },
    { page: 7,  active: false, url: 'www.localhost.com/?page=7'  },
    { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
    { page: 9,  active: false, url: 'www.localhost.com/?page=9'  },
    { page: 10, active: false, url: 'www.localhost.com/?page=10' }
  ],
  firstPageLink: 1,
  lastPageLink: 10,
  firstPage: 1,
  lastPage: 30,
  numPreviousPages: 2,
  numFollowingPages: 27
}
```

## Integration with Adonis.js

https://forum.adonisjs.com/t/tutorial-beginner-pagination-hack/1267
