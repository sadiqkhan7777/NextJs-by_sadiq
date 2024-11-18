import React, { useState } from 'react';

type BookFormProps = {
  onSubmit: (title: string, author: string) => void;
  editMode?: boolean;
  initialTitle?: string;
  initialAuthor?: string;
};

const BookForm: React.FC<BookFormProps> = ({
  onSubmit,
  editMode = false,
  initialTitle = '',
  initialAuthor = '',
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 w-full"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        className="border p-2 w-full"
      />
      <button type="submit" className={`p-2 w-full ${editMode ? 'bg-green-500' : 'bg-blue-500'}`}>
        {editMode ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
