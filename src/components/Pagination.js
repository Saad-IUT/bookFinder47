const Pagination = () => {
  return (
    <div
      class='ui pagination menu'
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <a class='active item'>1</a>
      <a class='item'>2</a>
      <a class='item'>3</a>
      <a class='item'>4</a>
    </div>
  )
}

export default Pagination
