import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addToCart, setFilter } from 'C:/Users/inuri/OneDrive/Рабочий стол/Redux/1 less/react-main/src/store/slices/bookSlice';

const BookList = () => {
  const books = useSelector((state) => state.book.books);
  const filter = useSelector((state) => state.book.filter);
  const dispatch = useDispatch();

  const filteredBooks = books.filter(book => book.name.startsWith(filter));

  const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

  return (
    <div>
      {alphabet.map((letter) => (
        <button key={letter} onClick={() => dispatch(setFilter(letter))}>
          {letter}
        </button>
      ))}
      <button onClick={() => dispatch(setFilter(''))}>
        Сбросить фильтр
      </button>
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h2>{book.name}</h2>
          <button onClick={() => dispatch(removeBook(book.id))}>
            Удалить книгу
          </button>
          <button onClick={() => dispatch(addToCart(book.id))}>
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;


