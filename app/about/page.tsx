// app/about/page.tsx
import React from 'react';
import Link from 'next/link';
import '../../styles/globals.css'; // Import global CSS

const About = () => {
  return (
    <div className="page about">
      <header className="header">
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default About;
