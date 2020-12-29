import { useEffect, useState } from 'react'
import { getBookDetails } from '../booksApi'
import { Link } from 'react-router-dom'
import Header from './Header'
import { Container } from 'semantic-ui-react'

const BookDetails = props => {
  const [currentBook, setCurrentBook] = useState({})
  useEffect(() => {
    getBookDetails(props.location.bookId, setCurrentBook)
  }, [])

  return (
    <div>
      <Header title='Book Details' />
      <Container>
        <img
          class='ui medium rounded image'
          src={props.history.location.details.imageLinks.thumbnail}
        />
        <div class='ui card'>
          <div class='content'>
            <div class='header'>{props.history.location.details.title}</div>
            <div class='meta'>{props.history.location.details.authors}</div>
            <div class='ui card'>
              <p>{props.history.location.details.description}</p>
            </div>
            <a href={props.history.location.details.infoLink}>
              Additional info...
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BookDetails
