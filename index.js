'use strict'

function makeLinks (numLinks, firstLink, currentPage, url) {
  const links = []
  for (let i = 0; i < numLinks; i++) {
    const page = firstLink + i
    links.push({
      page: page,
      active: page === currentPage,
      url: url + page
    })
  }
  return links
}

function calculateNumPreviousPages (
  numLinks, numLinksPerFlank, currentPage, lastPage
) {
  // left flank
  if (currentPage <= numLinksPerFlank) {
    return currentPage - 1
  // right flank
  } else if (lastPage - currentPage < numLinksPerFlank) {
    return numLinks - ((lastPage - currentPage) + 1)
  // middle
  } else {
    return numLinksPerFlank
  }
}

function calculateFirstLink (numLinks, currentPage, lastPage) {
  const numLinksPerFlank = Math.floor(numLinks / 2)
  const numPreviousPages = calculateNumPreviousPages(
    numLinks, numLinksPerFlank, currentPage, lastPage
  )
  return currentPage - numPreviousPages
}

module.exports = (numLinks, currentPage, numItemsPerPage, numItems, url) => {
  const lastPage = Math.ceil(numItems / numItemsPerPage)
  numLinks = Math.min(numLinks, lastPage)
  const firstLink = calculateFirstLink(numLinks, currentPage, lastPage)
  const links = makeLinks(numLinks, firstLink, currentPage, url)
  return {
    numLinks: numLinks,
    currentPage: currentPage,
    numItemsPerPage: numItemsPerPage,
    numItems: numItems,
    url: url,
    links: links,
    firstPageLink: numLinks ? links[0].page : 0,
    lastPageLink: numLinks ? links[links.length - 1].page : 0,
    firstPage: numLinks ? 1 : 0,
    lastPage: numLinks ? lastPage : 0,
    numPreviousPages: numLinks ? currentPage - 1 : 0,
    numFollowingPages: numLinks ? lastPage - currentPage : 0
  }
}
