import { useState } from 'react'
import 'fomantic-ui-css/semantic.css'
import Header from './components/Header'
import Pagination from './components/Pagination'
import SearchBar from './components/SearchBar'
import { getBooksByTerm, getBooksByOrder } from './booksApi'
import BookList from './components/BookList'
import { Container } from 'semantic-ui-react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [order, setOrder] = useState('relevance')

  const handleSubmit = e => {
    e.preventDefault()
    getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages)
  }

  const handleSubmitOrder = () => {
    getBooksByOrder(searchTerm, setBooks, currentPage, setTotalPages, order)
  }

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  // const nextPage = async page_number => {
  //   setCurrentPage(page_number)
  //   // await getMoviesByTerm(searchTerm, setMovies, currentPage, setTotalPages)
  // }

  return (
    <div>
      <Header title='Book finder' />
      <Container>
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setOrder={setOrder}
          handleSubmitOrder={handleSubmitOrder}
        />
        <BookList books={books} />
        <Pagination />
      </Container>
    </div>
  )
}

export default App
