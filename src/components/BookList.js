import Book from './Book'

const BookList = props => {
  return (
    <div
      class='ui link   cards'
      style={{ justifyContent: 'space-around', marginTop: '20px' }}
    >
      {props.books.map((book, i) => {
        return <Book data={book} key={i} />
      })}
    </div>
  )
}
export default BookList
