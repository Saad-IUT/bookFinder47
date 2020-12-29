import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import BookDetails from './components/BookDetails'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' exact component={App} />
      <Route path='/book/:id' exact component={BookDetails} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
