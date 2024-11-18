import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

type BookListProps = {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
};

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="flex justify-between p-2 border-b">
          <div>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
          <div className="space-x-2">
            <button onClick={() => onEdit(book)} className="bg-blue-500 text-white p-1">Edit</button>
            <button onClick={() => onDelete(book.id)} className="bg-red-500 text-white p-1">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
