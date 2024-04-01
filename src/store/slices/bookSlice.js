import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, name: 'Азбука' },
    { id: 2, name: '1984' },
    { id: 3, name: 'Как выучить JS за 2 дня' },
    { id: 4, name: 'Алфавит' },
    { id: 5, name: 'Война и Мир' },
    { id: 6, name: 'Сказки на Ночь' },
    { id: 7, name: 'Мертвые Души' },
    { id: 8, name: 'Хогвартс' },
    { id: 9, name: 'Биография: Стив Джобса)))' },
  ],
  cart: [],
  filter: ''
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    addToCart: (state, action) => {
      const book = state.books.find(book => book.id === action.payload);
      if (book) {
        state.cart.push(book);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(book => book.id !== action.payload);
    },
    sortBooksAscending: (state) => {
        state.books.sort((a, b) => a.id - b.id);
      },
      sortBooksDescending: (state) => {
        state.books.sort((a, b) => b.id - a.id);
      },
      setFilter: (state, action) => {
        state.filter = action.payload;
      },
      createBook: (state, action) => {
        const newId = Math.max(...state.books.map(book => book.id)) + 1;
        const newBook = { id: newId, name: action.payload };
        state.books.push(newBook);
      },
  }
});

export const { addBook, removeBook, addToCart, removeFromCart, sortBooksAscending, sortBooksDescending, setFilter, createBook } = bookSlice.actions;

export default bookSlice.reducer;
