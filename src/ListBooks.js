import React, { Component } from 'react'
import Books from './Books'

class ListBooks extends Component {

  render() {

    const shelves = ["currentlyReading", "wantToRead", "read"]
    const shelveNames = ["Currently Reading", "Want To Read", "Read"]

    return (

      <div>

        {shelves.map((shelf, index) => {

          return(

            <div key={ index } className="list-books-content">
              <div>
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{ shelveNames[index] }</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">

                        {this.props.booksOnShelf.filter(book => book.shelf === shelf)
                          .map(book => (

                            <Books
                              onMoveBook={ this.props.onMoveBook }
                              key={ book.id }
                              book={ book }
                            />

                          ))
                        }

                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )}
        )}

      </div>

    )
  }
}

export default ListBooks
