import { Link } from 'react-router-dom'

const Book = props => {
  return (
    <div style={{ margin: '10px' }}>
      <Link
        to={{
          pathname: `/book/${props.data.id}`,
          details: props.data.volumeInfo,
        }}
      >
        <div class='ui card'>
          <div class='image'>
            <img
              src={props.data.volumeInfo.imageLinks.thumbnail}
            />
          </div>
          <div class='content'>
            {props.data.volumeInfo.title}
            <div class='meta'>{props.data.volumeInfo.authors}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Book
