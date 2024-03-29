import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, name: 'Азбука' },
    { id: 2, name: '1984' },
    { id: 3, name: 'Как выучить JS за 2 дня' }
  ],
  cart: []
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
    }
  }
});

export const { addBook, removeBook, addToCart, removeFromCart } = bookSlice.actions;

export default bookSlice.reducer;
