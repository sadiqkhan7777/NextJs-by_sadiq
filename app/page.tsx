// app/page.tsx
import React from 'react';
import Link from 'next/link';
import '../styles/globals.css'; // Import global CSS

const Home = () => {
  return (
    <div className="page home">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>This is the home page.</p>
        <nav>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Home;
