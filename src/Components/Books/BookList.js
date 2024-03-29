import React from 'react'
import { useSelector } from 'react-redux'


export default function BookList() {
    const books = useSelector((state) => state.book.books);

  return (
    <div>
      <p>BookList</p>
      {books.map(book=><div key={book.id}>Название{book.name}{book.id}</div>)}
    </div>
  )
}
