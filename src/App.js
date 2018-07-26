import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'


class BooksApp extends Component {

  state = {

    books: []

  }

  moveBook = (book, shelf) => {

    if (this.state.books) {

      BooksAPI.update(book,shelf).then(() => {

        book.shelf = shelf;
        this.setState(state => ({

          books: state.books.filter(b => b.id !== book.id).concat([book])

        }))
      })
    }
  }

  componentDidMount() {

    BooksAPI.getAll().then((books) => {

      this.setState({ books })

    })
  }

  render() {

    return (

      <div className="app">
        <Route exact path="/" render={() => (

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks
              onMoveBook={ this.moveBook }
              booksOnShelf={ this.state.books }
            />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>

        )}/>
        <Route path="/search" render={() => (

          <Search
            onMoveBook={ this.moveBook }
            booksOnShelf={ this.state.books }
          />

        )}/>
      </div>
      
    )
  }
}

export default BooksApp
