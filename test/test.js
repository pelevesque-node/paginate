'use strict'

const expect = require('chai').expect
const paginate = require('../index')

describe('#paginate()', () => {
  it('should work with numItems === 0', () => {
    const result = paginate(10, 3, 10, 0, 'www.localhost.com/?page=')
    const expected = {
      numLinks: 0,
      currentPage: 3,
      numItemsPerPage: 10,
      numItems: 0,
      url: 'www.localhost.com/?page=',
      links: [],
      firstPageLink: 0,
      lastPageLink: 0,
      firstPage: 0,
      lastPage: 0,
      numPreviousPages: 0,
      numFollowingPages: 0,
    }
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
  })

  it('should work with numLinks === 0', () => {
    const result = paginate(0, 3, 10, 300, 'www.localhost.com/?page=')
    const expected = {
      numLinks: 0,
      currentPage: 3,
      numItemsPerPage: 10,
      numItems: 300,
      url: 'www.localhost.com/?page=',
      links: [],
      firstPageLink: 0,
      lastPageLink: 0,
      firstPage: 0,
      lastPage: 0,
      numPreviousPages: 0,
      numFollowingPages: 0,
    }
    expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
  })

  describe('left bleeding', () => {
    it('numLinks < totalPages && numItems/perPage === x.0', () => {
      const result = paginate(10, 3, 10, 300, 'www.localhost.com/?page=')
      const expected = {
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
          { page: 10, active: false, url: 'www.localhost.com/?page=10' },
        ],
        firstPageLink: 1,
        lastPageLink: 10,
        firstPage: 1,
        lastPage: 30,
        numPreviousPages: 2,
        numFollowingPages: 27,
      }
      expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
    })

    it('numLinks < totalPages && numItems/perPage === x.x', () => {
      const result = paginate(10, 3, 10, 306, 'www.localhost.com/?page=')
      const expected = {
        numLinks: 10,
        currentPage: 3,
        numItemsPerPage: 10,
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
          { page: 10, active: false, url: 'www.localhost.com/?page=10' },
        ],
        firstPageLink: 1,
        lastPageLink: 10,
        firstPage: 1,
        lastPage: 31,
        numPreviousPages: 2,
        numFollowingPages: 28,
      }
      expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
    })
  })

  describe('right bleeding', () => {
    it('numLinks < totalPages && numItems/perPage === x.0', () => {
      const result = paginate(5, 9, 20, 200, 'www.localhost.com/?page=')
      const expected = {
        numLinks: 5,
        currentPage: 9,
        numItemsPerPage: 20,
        numItems: 200,
        url: 'www.localhost.com/?page=',
        links: [
          { page: 6,  active: false, url: 'www.localhost.com/?page=6'  },
          { page: 7,  active: false, url: 'www.localhost.com/?page=7'  },
          { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
          { page: 9,  active: true,  url: 'www.localhost.com/?page=9'  },
          { page: 10, active: false, url: 'www.localhost.com/?page=10' },
        ],
        firstPageLink: 6,
        lastPageLink: 10,
        firstPage: 1,
        lastPage: 10,
        numPreviousPages: 8,
        numFollowingPages: 1,
      }
      expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
    })

    it('numLinks < totalPages && numItems/perPage === x.x', () => {
      const result = paginate(5, 9, 20, 203, 'www.localhost.com/?page=')
      const expected = {
        numLinks: 5,
        currentPage: 9,
        numItemsPerPage: 20,
        numItems: 203,
        url: 'www.localhost.com/?page=',
        links: [
          { page: 7,  active: false, url: 'www.localhost.com/?page=7'  },
          { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
          { page: 9,  active: true,  url: 'www.localhost.com/?page=9'  },
          { page: 10, active: false, url: 'www.localhost.com/?page=10' },
          { page: 11, active: false, url: 'www.localhost.com/?page=11' },
        ],
        firstPageLink: 7,
        lastPageLink: 11,
        firstPage: 1,
        lastPage: 11,
        numPreviousPages: 8,
        numFollowingPages: 2,
      }
      expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
    })
  })

  describe('centered', () => {
    it('numLinks < totalPages && numItems/perPage === x.0', () => {
      const result = paginate(6, 11, 5, 100, 'www.localhost.com/?page=')
      const expected = {
        numLinks: 6,
        currentPage: 11,
        numItemsPerPage: 5,
        numItems: 100,
        url: 'www.localhost.com/?page=',
        links: [
          { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
          { page: 9,  active: false, url: 'www.localhost.com/?page=9'  },
          { page: 10, active: false, url: 'www.localhost.com/?page=10' },
          { page: 11, active: true,  url: 'www.localhost.com/?page=11' },
          { page: 12, active: false, url: 'www.localhost.com/?page=12' },
          { page: 13, active: false, url: 'www.localhost.com/?page=13' },
        ],
        firstPageLink: 8,
        lastPageLink: 13,
        firstPage: 1,
        lastPage: 20,
        numPreviousPages: 10,
        numFollowingPages: 9,
      }
      expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
    })

    it('numLinks < totalPages && numItems/perPage === x.x', () => {
      const result = paginate(6, 11, 5, 102, 'www.localhost.com/?page=')
      const expected = {
        numLinks: 6,
        currentPage: 11,
        numItemsPerPage: 5,
        numItems: 102,
        url: 'www.localhost.com/?page=',
        links: [
          { page: 8,  active: false, url: 'www.localhost.com/?page=8'  },
          { page: 9,  active: false, url: 'www.localhost.com/?page=9'  },
          { page: 10, active: false, url: 'www.localhost.com/?page=10' },
          { page: 11, active: true,  url: 'www.localhost.com/?page=11' },
          { page: 12, active: false, url: 'www.localhost.com/?page=12' },
          { page: 13, active: false, url: 'www.localhost.com/?page=13' },
        ],
        firstPageLink: 8,
        lastPageLink: 13,
        firstPage: 1,
        lastPage: 21,
        numPreviousPages: 10,
        numFollowingPages: 10,
      }
      expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
    })
  })
})
