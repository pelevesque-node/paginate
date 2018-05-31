/* global describe, it */
'use strict'

const expect = require('chai').expect
const paginate = require('../index')

describe('#paginate()', () => {
  it('should work with left bleeding, numLinks < totalPages, and numItems/perPage = x.0', () => {
    const result = JSON.stringify(paginate(10, 3, 10, 300, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 10,
      currentPage: 3,
      perPage: 10,
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
    })
    expect(result).to.equal(expected)
  })

  it('should work with left bleeding, numLinks < totalPages, and numItems/perPage = x.x', () => {
    const result = JSON.stringify(paginate(10, 3, 10, 306, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 10,
      currentPage: 3,
      perPage: 10,
      numItems: 306,
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
      lastPage: 31,
      numPreviousPages: 2,
      numFollowingPages: 28
    })
    expect(result).to.equal(expected)
  })

  it('should work with right bleeding, numLinks < totalPages, and numItems/perPage = x.0', () => {
    const result = JSON.stringify(paginate(5, 9, 20, 200, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 5,
      currentPage: 9,
      perPage: 20,
      numItems: 200,
      url: 'www.localhost.com/?page=',
      links: [
        { page: 6,  active: false, url: 'www.localhost.com/?page=6'  },
        { page: 7,  active: false, url: 'www.localhost.com/?page=7'  },
        { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
        { page: 9,  active: true,  url: 'www.localhost.com/?page=9'  },
        { page: 10, active: false, url: 'www.localhost.com/?page=10' }
      ],
      firstPageLink: 6,
      lastPageLink: 10,
      firstPage: 1,
      lastPage: 10,
      numPreviousPages: 8,
      numFollowingPages: 1
    })
    expect(result).to.equal(expected)
  })

  it('should work with right bleeding, numLinks < totalPages, and numItems/perPage = x.x', () => {
    const result = JSON.stringify(paginate(5, 9, 20, 203, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 5,
      currentPage: 9,
      perPage: 20,
      numItems: 203,
      url: 'www.localhost.com/?page=',
      links: [
        { page: 7,  active: false, url: 'www.localhost.com/?page=7'  },
        { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
        { page: 9,  active: true,  url: 'www.localhost.com/?page=9'  },
        { page: 10, active: false, url: 'www.localhost.com/?page=10' },
        { page: 11, active: false, url: 'www.localhost.com/?page=11' }
      ],
      firstPageLink: 7,
      lastPageLink: 11,
      firstPage: 1,
      lastPage: 11,
      numPreviousPages: 8,
      numFollowingPages: 2
    })
    expect(result).to.equal(expected)
  })

  it('should work in center, numLinks < totalPages, and numItems/perPage = x.0', () => {
    const result = JSON.stringify(paginate(6, 11, 5, 100, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 6,
      currentPage: 11,
      perPage: 5,
      numItems: 100,
      url: 'www.localhost.com/?page=',
      links: [
        { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
        { page: 9,  active: false, url: 'www.localhost.com/?page=9'  },
        { page: 10, active: false, url: 'www.localhost.com/?page=10' },
        { page: 11, active: true,  url: 'www.localhost.com/?page=11' },
        { page: 12, active: false, url: 'www.localhost.com/?page=12' },
        { page: 13, active: false, url: 'www.localhost.com/?page=13' }
      ],
      firstPageLink: 8,
      lastPageLink: 13,
      firstPage: 1,
      lastPage: 20,
      numPreviousPages: 10,
      numFollowingPages: 9
    })
    expect(result).to.equal(expected)
  })

  it('should work in center, numLinks < totalPages, and numItems/perPage = x.x', () => {
    const result = JSON.stringify(paginate(6, 11, 5, 102, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 6,
      currentPage: 11,
      perPage: 5,
      numItems: 102,
      url: 'www.localhost.com/?page=',
      links: [
        { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
        { page: 9,  active: false, url: 'www.localhost.com/?page=9'  },
        { page: 10, active: false, url: 'www.localhost.com/?page=10' },
        { page: 11, active: true,  url: 'www.localhost.com/?page=11' },
        { page: 12, active: false, url: 'www.localhost.com/?page=12' },
        { page: 13, active: false, url: 'www.localhost.com/?page=13' }
      ],
      firstPageLink: 8,
      lastPageLink: 13,
      firstPage: 1,
      lastPage: 21,
      numPreviousPages: 10,
      numFollowingPages: 10
    })
    expect(result).to.equal(expected)
  })

  it('should work with numItems == 0', () => {
    const result = JSON.stringify(paginate(10, 3, 10, 0, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 0,
      currentPage: 3,
      perPage: 10,
      numItems: 0,
      url: 'www.localhost.com/?page=',
      links: [],
      firstPageLink: 0,
      lastPageLink: 0,
      firstPage: 0,
      lastPage: 0,
      numPreviousPages: 0,
      numFollowingPages: 0
    })
    expect(result).to.equal(expected)
  })

  it('should work with numLinks == 0', () => {
    const result = JSON.stringify(paginate(0, 3, 10, 300, 'www.localhost.com/?page='))
    const expected = JSON.stringify({
      numLinks: 0,
      currentPage: 3,
      perPage: 10,
      numItems: 300,
      url: 'www.localhost.com/?page=',
      links: [],
      firstPageLink: 0,
      lastPageLink: 0,
      firstPage: 0,
      lastPage: 0,
      numPreviousPages: 0,
      numFollowingPages: 0
    })
    expect(result).to.equal(expected)
  })
})
