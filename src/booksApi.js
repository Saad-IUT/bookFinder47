import axios from 'axios'

const googleBooks = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  googleBooks
    .get('/', {
      params: {
        key: 'AIzaSyBphkalpo4zhYJuPOgfZjEIGQ1VptvAAN4',
        q: SearchTerm.replace(/ /g, '%20'),
        page: page_number,
        startIndex: 0,
        maxResults: 20,
      },
    })
    .then(response => {
      setBooks(response.data.items)
      setTotalPages(response.data.total_pages)
    })
}

const getBooksByOrder = (
  SearchTerm,
  setBooks,
  page_number,
  setTotalPages,
  order
) => {
  googleBooks
    .get('/', {
      params: {
        key: 'AIzaSyBphkalpo4zhYJuPOgfZjEIGQ1VptvAAN4',
        q: SearchTerm.replace(/ /g, '%20'),
        page: page_number,
        startIndex: 0,
        maxResults: 20,
        orderBy: order,
      },
    })
    .then(response => {
      setBooks(response.data.items)
      setTotalPages(response.data.total_pages)
    })
}

const getBookDetails = (bookID, setCurrentBook) => {
  googleBooks
    .get(`/${bookID}`, {
      params: {
        key: 'AIzaSyBphkalpo4zhYJuPOgfZjEIGQ1VptvAAN4',
      },
    })
    .then(response => {
      setCurrentBook(response.data)
    })
}

export { getBooksByTerm, getBooksByOrder, getBookDetails }
