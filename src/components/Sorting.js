import React from 'react'

const Sorting = props => {
  return (
    <div class='ui small compact selection menu' style={{ marginLeft: '20px' }}>
      <div class='ui simple dropdown item'>
        Sort
        <i class='dropdown icon'></i>
        <div class='menu'>
          <div
            class='item'
            onClick={() => {
              props.setOrder('newest')
              props.handleSubmitOrder()
            }}
          >
            Newest
          </div>
          <div
            class='item'
            onClick={() => {
              props.setOrder('relevance')
              props.handleSubmitOrder()
            }}
          >
            Most relevant
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sorting
