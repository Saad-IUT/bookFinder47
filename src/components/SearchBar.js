const SearchBar = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <form action='' onSubmit={props.handleSubmit}>
        <div class='ui action input'>
          <input
            placeholder='Search for Books...'
            type='text'
            onChange={props.handleChange}
          />
          <button class='ui icon button'>
            <i class='search icon'></i>
          </button>
        </div>
      </form>
      <button
        class='ui button primary'
        style={{ marginLeft: '20px' }}
        onClick={() => {
          // props.setOrder('relevance')
        }}
      >
        Sort
      </button>
    </div>
  )
}

export default SearchBar
