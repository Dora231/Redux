import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortBooksAscending, sortBooksDescending, createBook } from 'C:/Users/inuri/OneDrive/Рабочий стол/Redux/1 less/react-main/src/store/slices/bookSlice';
import Modal from './Modal'

export default function Header() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookName, setNewBookName] = useState('');

  const handleCreateBook = () => {
    dispatch(createBook(newBookName));
    setModalOpen(false);
  };

  return (
    <div>
      <p>Уга Буга ыыыыы</p>
      <button onClick={() => dispatch(sortBooksAscending())}>
        по возрастанию
      </button>
      <button onClick={() => dispatch(sortBooksDescending())}>
        по убыванию
      </button>
      <button onClick={() => setModalOpen(true)}>
        Создать новую книгу
      </button>
      {modalOpen && (
        <Modal>
          Название: 
          <br></br><input value={newBookName} onChange={e => setNewBookName(e.target.value)} />
          <button onClick={handleCreateBook}>
            Создать
          </button>
        </Modal>
      )}
    </div>
  );
}
