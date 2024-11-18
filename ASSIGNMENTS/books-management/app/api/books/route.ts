import { NextRequest, NextResponse } from 'next/server';

let books = [
  { id: 1, title: 'Harry Potter', author: 'JS Jone', available: true },
  { id: 2, title: 'Fari Tail', author: 'TS Will', available: true },
];

// GET aur POST handler
export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  const { title, author } = await request.json();
  const newBook = { id: Date.now(), title, author , available: true};
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}

// PUT aur DELETE handler
export async function PUT(request: NextRequest) {
  const { id, title, author } = await request.json();
  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return NextResponse.json({ message: 'Book not found' }, { status: 404 });
  }

  books[bookIndex] = { id, title, author, available: true };
  return NextResponse.json(books[bookIndex]);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  books = books.filter((book) => book.id !== id);
  return NextResponse.json({ message: 'Book deleted' }, { status: 204 });
}
