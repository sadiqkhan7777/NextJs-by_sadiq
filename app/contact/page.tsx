// app/contact/page.tsx
import React from 'react';
import Link from 'next/link';
import '../../styles/globals.css'; // Import global CSS

const Contact = () => {
  return (
    <div className="page contact">
      <header className="header">
        <h1>Contact Us</h1>
        <p>This is the contact page.</p>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Contact;
